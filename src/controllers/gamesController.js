const games = require("../models/games.json")

const getAllGames = (req, res) =>{
    res.status(200).json(games)
}

const updateGame = (req, res) => {
  
}

module.exports = {
    getAllGames,
    updateGame
}