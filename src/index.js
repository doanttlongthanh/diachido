const path = require("path");
const express = require("express");
const morgan = require("morgan");
// import { engine } from "express-handlebars";
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const router = require("./router/index");

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/source/views"));

// Router init
router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
