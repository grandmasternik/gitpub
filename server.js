const express = require("express");
const app = express();
const port = 3000;
const drinks = require(`./models/drinks`);

// ========Routes===========//
app.get("/", (req, res)=>{
    res.send("Welcome to the Gitpub App");
});

app.get("/drinks", (req, res)=>{
    res.render(`drinks_index.ejs`, {
        allDrinks: drinks
    })
});

// ========Web Server========//
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });