const express = require("express")
const router = express.Router()
const controller = require("../controllers/gamesController")
const cors = require('cors')

router.get("/games", cors(), controller.getAllGames)
router.put("/games/:id", cors(), controller.updateGamePut)
router.patch("/games/:id", cors(), controller.updateGamePatch)

module.exports =  router