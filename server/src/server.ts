// Imported packages
import * as fs from "fs";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as winston from "winston";
import * as logger from "morgan";
import * as express from "express";

var PREMADE_FOLDERS = [
  "https://drive.google.com/drive/u/0/folders/1H6OLX2n3pvuBk5cRWIxS5h4BkRC8alLq", 
  "https://drive.google.com/drive/u/0/folders/16VOjlUJ9Bf2QtvISgI_VZKLin9-io2nU", 
  "https://drive.google.com/drive/u/0/folders/1ktI7bbpNhLg9XODfkvIAwOgw3LhVLKka", 
  "https://drive.google.com/drive/u/0/folders/1jQFU0e4Uw9VCR-MihNK4rJqoO8gVIEp8", 
  "https://drive.google.com/drive/u/0/folders/1hi8mJlgzeWttjn_4Y-2oA77MXzr1S5Wf", 
  "https://drive.google.com/drive/u/0/folders/15U-ruAhvudJidOKLjZu3p7c37M9qXsxb", 
  "https://drive.google.com/drive/u/0/folders/1IhZfrxPZ8QaDWw5CKqG-q2KmrpMFiVgJ", 
  "https://drive.google.com/drive/u/0/folders/1u1spUHvnJPXLPeMpN9tokWq8l6Ngqt81", 
  "https://drive.google.com/drive/u/0/folders/1-YcoUgcgDvHAyFLM6__hoH0PqsdNUT-C", 
  "https://drive.google.com/drive/u/0/folders/13K3EBkRBIGtdQW7jj_K9tXqaHddBl5bn", 
  "https://drive.google.com/drive/u/0/folders/1pA_k2BIqqPlL66E4c-SBG1w2TW9B6pwy", 
  "https://drive.google.com/drive/u/0/folders/15hbZ7lr5ra5Reue3TUbQN355AvjS90pt", 
  "https://drive.google.com/drive/u/0/folders/1WL7yAndqXJx7TCxwRrFvn9AOepMGevaU", 
  "https://drive.google.com/drive/u/0/folders/17u9VZFb2tmGuFHeOQC1M7zfb4JOoVt5l", 
  "https://drive.google.com/drive/u/0/folders/1YaLXHMZWADKgrURnTeY4HrOF3NDFSs-9"
]

// Configure app
const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("client/public"));
app.engine('html', function (path, options, callback) {
  fs.readFile(path, 'utf-8', callback);
});
app.get("/teamfolders", (req, res) => {
  var jsonFile = JSON.parse(fs.readFileSync(path.join(__dirname, 'folders.json'), 'utf8'));
  res.send(jsonFile['folders']);
});
app.post("/teamfolder", (req, res) => {
  var jsonFile = JSON.parse(fs.readFileSync(path.join(__dirname, 'folders.json'), 'utf8'));
  var newFolder = [req.body.name, PREMADE_FOLDERS[jsonFile['folders'].length]]; 
  jsonFile['folders'].push(newFolder);
  fs.writeFileSync(path.join(__dirname, 'folders.json'), JSON.stringify(jsonFile));
  res.send(true);
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});
app.set("port", (process.env.PORT || 5000));

// Sync database every time the website loads
app.listen(app.get("port"), () => {
  winston.info("Listening on port", app.get("port"));
});
