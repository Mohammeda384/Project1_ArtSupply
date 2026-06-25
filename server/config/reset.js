
import { pool } from './database.js'
import dotenv from 'dotenv'
import supplyData from '../data/supplydata.js'
//id name image description

const createSuppliesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS supplies;

    CREATE TABLE IF NOT EXISTS supplies (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
    )
        `

  try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 supplies table created successfully')
  }


  catch (err) {
    console.error('⚠️ error creating supplies table', err)
  }
}

//try catch to prevent errors


const seedSuppliesTable = async () => {
  await createSuppliesTable()
}

supplyData.forEach((supply) => {
  const insertQuery = {
    text: 'INSERT INTO supplies (name, image, description) VALUES ($1, $2, $3)'
  }
  const values = [
    supply.name,
    supply.image,
    supply.description,

  ]

  pool.query(insertQuery, values, (err, res) => {
    if (err) {
      console.error('⚠️ error inserting supply', err)
      return
    }

    console.log(`✅ ${supply.name} added successfully`)
  })
})
//creating values to set to an array of supply attributes


//query the pool with insertQuery and values



seedSuppliesTable()