const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: './.env' });

async function runMigrations() {
  console.log('🚀 Starting database migration system...\n');

  // Check if DATABASE_URL is available
  if (!process.env.DATABASE_URL) {
    console.log('❌ DATABASE_URL not found in environment variables');
    return;
  }

  console.log('✅ DATABASE_URL found');

  // Create PostgreSQL client
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    // Connect to database
    console.log('🔄 Connecting to database...');
    await client.connect();
    console.log('✅ Connected to database successfully');

    // Create migrations tracking table if it doesn't exist
    await createMigrationsTable(client);

    // Get list of executed migrations
    const executedMigrations = await getExecutedMigrations(client);
    console.log(`📋 Found ${executedMigrations.length} previously executed migrations`);

    // Get all migration files
    const migrationFiles = await getMigrationFiles();
    console.log(`📁 Found ${migrationFiles.length} migration files`);

    // Filter out already executed migrations
    const pendingMigrations = migrationFiles.filter(file => 
      !executedMigrations.includes(file.name)
    );

    if (pendingMigrations.length === 0) {
      console.log('✅ No new migrations to execute. Database is up to date!');
      return;
    }

    console.log(`🔄 Found ${pendingMigrations.length} new migrations to execute:`);
    pendingMigrations.forEach(migration => {
      console.log(`   - ${migration.name}`);
    });

    // Execute pending migrations
    for (const migration of pendingMigrations) {
      await executeMigration(client, migration);
    }

    console.log('\n🎉 All migrations completed successfully!');

  } catch (error) {
    console.log('❌ Migration failed:', error.message);
    console.log('Error details:', error);
  } finally {
    await client.end();
    console.log('🔌 Database connection closed');
  }
}

async function createMigrationsTable(client) {
  console.log('🔄 Creating/checking migrations tracking table...');
  
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS schema_migrations (
      id SERIAL PRIMARY KEY,
      migration_name VARCHAR(255) UNIQUE NOT NULL,
      executed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      checksum VARCHAR(64)
    );
    
    CREATE INDEX IF NOT EXISTS idx_schema_migrations_name ON schema_migrations(migration_name);
  `;
  
  await client.query(createTableSQL);
  console.log('✅ Migrations tracking table ready');
}

async function getExecutedMigrations(client) {
  const result = await client.query('SELECT migration_name FROM schema_migrations ORDER BY executed_at');
  return result.rows.map(row => row.migration_name);
}

async function getMigrationFiles() {
  const migrationsDir = path.join(__dirname, 'migrations');
  
  if (!fs.existsSync(migrationsDir)) {
    console.log('❌ Migrations directory not found:', migrationsDir);
    return [];
  }

  const files = fs.readdirSync(migrationsDir)
    .filter(file => file.endsWith('.sql'))
    .sort() // Sort to ensure proper execution order
    .map(file => ({
      name: file,
      path: path.join(migrationsDir, file)
    }));

  return files;
}

async function executeMigration(client, migration) {
  console.log(`\n🔄 Executing migration: ${migration.name}`);
  
  try {
    // Read migration file
    const migrationSQL = fs.readFileSync(migration.path, 'utf8');
    
    // Execute migration in a transaction
    await client.query('BEGIN');
    
    try {
      // Execute the migration SQL
      await client.query(migrationSQL);
      
      // Record migration as executed
      await client.query(
        'INSERT INTO schema_migrations (migration_name) VALUES ($1)',
        [migration.name]
      );
      
      await client.query('COMMIT');
      console.log(`✅ Migration completed: ${migration.name}`);
      
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    }
    
  } catch (error) {
    console.log(`❌ Migration failed: ${migration.name}`);
    throw error;
  }
}

runMigrations(); 