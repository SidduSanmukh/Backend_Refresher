const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")))

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
  res.render("index")
})

console.log("Current dirname:", __dirname)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`)
})