export function DentalAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="w-full h-full animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDuration: '4s' }}
      >
        {/* Background circle */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#bgGradient)"
          opacity="0.1"
        />
        
        {/* Rotating orbit path (invisible) */}
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="none"
          id="orbitPath"
        />
        
        {/* Central tooth character */}
        <g className="animate-bounce" style={{ animationDuration: '3s' }}>
          {/* Tooth body */}
          <path
            d="M180 160 Q180 140 200 140 Q220 140 220 160 L220 200 Q220 220 200 230 Q180 220 180 200 Z"
            fill="#ffffff"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          {/* Tooth face */}
          <circle cx="190" cy="175" r="2" fill="#374151" />
          <circle cx="210" cy="175" r="2" fill="#374151" />
          <path
            d="M185 190 Q200 200 215 190"
            stroke="#374151"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Tooth crown/sparkle */}
          <path
            d="M200 150 L205 160 L195 160 Z"
            fill="#fbbf24"
            className="animate-pulse"
          />
        </g>
        
        {/* Rotating dental tools */}
        <g>
          {/* Toothbrush */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 200 200;360 200 200"
              dur="8s"
              repeatCount="indefinite"
            />
            <g transform="translate(320, 200)">
              <rect x="-20" y="-3" width="40" height="6" rx="3" fill="#3b82f6" />
              <rect x="15" y="-8" width="8" height="16" rx="2" fill="#1e40af" />
            </g>
          </g>
          
          {/* Dental mirror */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 200 200;360 200 200"
              dur="10s"
              repeatCount="indefinite"
            />
            <g transform="translate(80, 200)">
              <circle cx="0" cy="0" r="12" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
              <line x1="8" y1="8" x2="25" y2="25" stroke="#6b7280" strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>
          
          {/* Molar tooth */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 200 200;360 200 200"
              dur="12s"
              repeatCount="indefinite"
            />
            <g transform="translate(200, 80)">
              <rect x="-8" y="-8" width="16" height="16" rx="4" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
              <circle cx="0" cy="0" r="2" fill="#10b981" />
            </g>
          </g>
          
          {/* Dental floss */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 200 200;360 200 200"
              dur="6s"
              repeatCount="indefinite"
            />
            <g transform="translate(200, 320)">
              <rect x="-15" y="-4" width="30" height="8" rx="4" fill="#f59e0b" />
              <path d="M-10 -4 Q0 -10 10 -4" stroke="#ffffff" strokeWidth="1" fill="none" />
            </g>
          </g>
          
          {/* Heart/care symbol */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 200 200;360 200 200"
              dur="15s"
              repeatCount="indefinite"
            />
            <g transform="translate(280, 120)">
              <path
                d="M0 8 C-6 2 -12 -2 -8 -8 C-4 -12 0 -8 0 -4 C0 -8 4 -12 8 -8 C12 -2 6 2 0 8 Z"
                fill="#ef4444"
                className="animate-pulse"
              />
            </g>
          </g>
          
          {/* Smile/star */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 200 200;360 200 200"
              dur="9s"
              repeatCount="indefinite"
            />
            <g transform="translate(120, 280)">
              <path
                d="M0 -10 L3 -3 L10 -3 L5 2 L7 9 L0 5 L-7 9 L-5 2 L-10 -3 L-3 -3 Z"
                fill="#fbbf24"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
            </g>
          </g>
        </g>
        
        {/* Floating particles */}
        <g>
          <circle cx="150" cy="150" r="3" fill="#3b82f6" opacity="0.6">
            <animate attributeName="cy" values="150;140;150" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="250" r="2" fill="#10b981" opacity="0.6">
            <animate attributeName="cy" values="250;240;250" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="150" r="2.5" fill="#f59e0b" opacity="0.6">
            <animate attributeName="cy" values="150;145;150" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="250" r="2" fill="#ef4444" opacity="0.6">
            <animate attributeName="cy" values="250;245;250" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
} 