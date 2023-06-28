require("dotenv").config() // Lien .env (LIGNE 1 !!!)
require("./models/connection") // Fichier de connection à la BDD Mongoose très important !

var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")


var cartsRouter = require("./routes/carts")
var indexRouter = require("./routes/index")
var usersRouter = require("./routes/users") // Ajouter si vous voulez créer un nouveau fichier de route
var tripsRouter = require("./routes/trips") // à checker si ça fonctionne



var app = express()

const cors = require("cors") // Installation de Cors

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/users", usersRouter) // Ajouter si vous voulez créer un nouveau fichier de route
app.use("/trips", tripsRouter) // à checker si ça marche
app.use("/carts", cartsRouter)

module.exports = app


