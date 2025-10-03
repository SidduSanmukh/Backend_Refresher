const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); //enabaling the path to accessing the public folder

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //Enabiling the path to access the views folder files.

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    res.render("index", { files: files });
  });
});

app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", { filename: req.params.filename, filedata: filedata });
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    err => {}
  );
  res.redirect("/");
});

app.post("/update", (req, res) => {
  let old_path = `./files/${req.body.old_name}`;
  let new_name = `${req.body.new_name}`;

  if (!new_name.endsWith(".txt")) {
    new_name += ".txt";
  }

  let new_path = `./files/${new_name}`;

  fs.readdir("./files", (err, files) => {
    if (files.includes(new_name)) {
      res.redirect("/");
      console.log("cannot change filename");
      return;
    } else {
      fs.rename(old_path, new_path, err => {
        if (err) {
          console.log(err);
          return res.send("Error renaming file");
        }
      });
      res.redirect("/");
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});
