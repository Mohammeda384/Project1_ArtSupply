import pg from 'pg'

//connect using a connection pool
//make a cache of database to query from
//allows for easy reuse

//make config object and pass it to pg.pool constructor


//use the connection pool to query the database
//by acquiring a client from the pool, and doing
//queries on the client, and sending it back to the pool

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config)