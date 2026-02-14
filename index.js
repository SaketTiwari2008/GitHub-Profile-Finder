const path = require("path");
const ejsMate = require("ejs-mate");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.engine("ejs", ejsMate);

async function getUser(username) {
  try {
    let url = `https://api.github.com/users/${username}`;
    const response = await axios.get(url);
    return { data: response.data, status: 200 };
  } catch (error) {
    console.error(error);
    return { status: 404 };
  }
}

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", async (req, res) => {
  let { username } = req.body;
  let user = await getUser(username);
  if (user.status === 200) {
    res.render("card.ejs", { user: user.data });
  } else {
    res.redirect("/error");
  }
});

app.get("/error", (req, res) => {
  res.render("error.ejs", { user: { message: "Not Found" } });
});

app.listen(PORT, () => {
  console.log("App listening at PORT: ", PORT);
});
