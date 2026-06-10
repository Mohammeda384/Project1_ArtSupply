import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import supplydata from '../data/supplydata.js'

//get the local directory by converting
//the url to the path using file function
const __fileName = fileURLToPath(import.meta.url)
//access the path function to get just the directory
//(strips off the file to get the location)
const __dirName = path.dirname(__fileName)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(supplydata)
})
//responds with 200 and sends the gift html
router.get('/:supplyId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirName, '../public/supply.html'))
})

export default router