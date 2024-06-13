import express from "express"

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => { 
    res.render("index.ejs"); 
});

app.get("/about", (req, res) => { 
    res.render("about.ejs"); 
});

app.get("/teams", (req, res) => { 
    res.render("teams.ejs"); 
});

app.get("/sponsors", (req, res) => { 
    res.render("sponsors.ejs"); 
});

app.get("/recruitment", (req, res) => { 
    res.render("recruitment.ejs"); 
});

app.listen(port, () => { 
    console.log(`Server running on port ${port}`); 
});