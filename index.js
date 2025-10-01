const express = require("express")
const dotenv = require("dotenv")
const path = require("path")

dotenv.config()

const app = express()

console.log("Current dirname:", __dirname)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`)
})