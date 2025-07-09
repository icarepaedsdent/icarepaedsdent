#!/bin/bash

# Smart Supabase Keep-Alive Script
# Automatically detects the correct domain to ping
# Works with local development, Vercel deployment, and production domains

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/domains.conf"
LOG_FILE="/tmp/supabase-keepalive.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Function to log messages
log_message() {
    echo "[$TIMESTAMP] $1" >> "$LOG_FILE"
}

# Function to test if a URL is accessible
test_url() {
    local url="$1"
    curl -s -f --max-time 10 "$url" > /dev/null 2>&1
    return $?
}

# Read domains from config file
read_domains() {
    if [ ! -f "$CONFIG_FILE" ]; then
        log_message "⚠️  Config file not found: $CONFIG_FILE"
        # Fallback to current Vercel deployment
        echo "https://i-care-one.vercel.app"
        return
    fi
    
    # Read domains from config file, ignore comments and empty lines
    grep -v '^#' "$CONFIG_FILE" | grep -v '^[[:space:]]*$' | sed 's/[[:space:]]*$//'
}

# Test endpoints for each domain
test_domain_endpoints() {
    local domain="$1"
    local endpoints=("/api/health" "/" "/api/contact" "/about")
    
    for endpoint in "${endpoints[@]}"; do
        local url="${domain}${endpoint}"
        log_message "   🔗 Testing: $endpoint"
        
        if test_url "$url"; then
            echo "$url"
            return 0
        fi
    done
    
    return 1
}

# Find the first working domain and endpoint
WORKING_URL=""
log_message "🚀 Starting i-Care Supabase keep-alive check..."

while IFS= read -r domain; do
    [ -z "$domain" ] && continue
    
    log_message "🔍 Testing domain: $domain"
    
    FOUND_URL=$(test_domain_endpoints "$domain")
    if [ $? -eq 0 ] && [ -n "$FOUND_URL" ]; then
        WORKING_URL="$FOUND_URL"
        log_message "✅ Found working endpoint: $FOUND_URL"
        break
    else
        log_message "❌ Domain unreachable: $domain"
    fi
done < <(read_domains)

# If no working URL found, exit
if [ -z "$WORKING_URL" ]; then
    log_message "🚨 No working domains found! All endpoints are down."
    exit 1
fi

# Ping the working endpoint
RESPONSE=$(curl -s "$WORKING_URL" 2>/dev/null)
STATUS_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$WORKING_URL" 2>/dev/null)

if [ "$STATUS_CODE" = "200" ]; then
    # Check if it's a health endpoint response
    if [[ "$WORKING_URL" == *"/api/health"* ]]; then
        # Extract status from JSON response if possible
        if command -v jq >/dev/null 2>&1; then
            DB_STATUS=$(echo "$RESPONSE" | jq -r '.database // "unknown"' 2>/dev/null)
            APP_STATUS=$(echo "$RESPONSE" | jq -r '.status // "unknown"' 2>/dev/null)
            log_message "✅ Supabase keep-alive successful (HTTP $STATUS_CODE, App: $APP_STATUS, DB: $DB_STATUS) - $WORKING_URL"
        else
            log_message "✅ Supabase keep-alive successful (HTTP $STATUS_CODE) - $WORKING_URL"
        fi
    else
        # For non-health endpoints, just confirm the ping
        log_message "✅ Website keep-alive successful (HTTP $STATUS_CODE) - $WORKING_URL"
    fi
else
    log_message "⚠️  Keep-alive check returned HTTP $STATUS_CODE - $WORKING_URL"
fi

# Rotate log file to prevent it from growing too large
if [ -f "$LOG_FILE" ]; then
    tail -n 200 "$LOG_FILE" > "$LOG_FILE.tmp" && mv "$LOG_FILE.tmp" "$LOG_FILE"
fi

# Optional: Send a notification if all domains are down (uncomment if needed)
# if [ -z "$WORKING_URL" ]; then
#     # Add your notification method here (email, Slack, etc.)
#     echo "All i-Care domains are down!" | mail -s "i-Care Website Alert" your-email@example.com
# fi 