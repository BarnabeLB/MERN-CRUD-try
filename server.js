//jshint esversion: 6
require('dotenv').config();
//DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const petRouter = require("./controllers/pet");
const session = require ("express-session");
const auth = require("./middle");

const port = process.env.PORT || 3000;
const DBURL = process.env.MONGODB_URI;

const Thing = require ("./models/thing.js");


//DATABASE CONNECTION
mongoose.connect(DBURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log( err  ? err : "Connected");
})
//MIDDLEWARE

app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));
app.use(session({
    secret: 'lol',
    resave: false, 
    saveUninitialized: true
}));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//ROUTES
app.use('/pet/', auth, petRouter);                                  // la method auth (middleware) est appelée lorsqu'on essaye de se connecter au path /pet/

app.get('/', auth,  (req, res) => {                                 // la method auth est appelée lorsqu'on essaye de se connecter au path /
    Thing.find({}, (err, foundsThings) => {
        res.render("Index", {things : foundsThings});
    });
    
});

app.get('/login', (req,res) => {
    res.render("Login");
});

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    
    if (username == "plop" && password == "lol") {
        req.session.login = true;

    }
    res.redirect("/");
})
 

//LISTENER
app.listen(port, (() => {
    console.log(`listening on port ${port}`);
}));


