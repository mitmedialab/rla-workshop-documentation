// Imported packages
import * as fs from "fs";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as winston from "winston";
import * as logger from "morgan";
import * as express from "express";

// Configure app
const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("client/public"));
app.engine('html', function (path, options, callback) {
  fs.readFile(path, 'utf-8', callback);
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});
app.set("port", (process.env.PORT || 5000));

// Sync database every time the website loads
app.listen(app.get("port"), () => {
  winston.info("Listening on port", app.get("port"));
});
