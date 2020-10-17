const games = require("../models/games.json")

const getAllGames = (req, res) =>{
    res.status(200).json(games)
}

const updateGame = (req, res) => {
  const gameToUpdate = req.body
  const id = parseInt(req.params.id)

  const gamesIds = games.map(game => game.id)
  const updateId = gamesIds.indexOf(id)

  const gameUpdated = { id, ...gameToUpdate }
  games.splice(updateId, 1, gameUpdated)

  const game = games.find(game => game.id == id)

  res.status(200).send(game)
  console.log(games);
}

module.exports = {
    getAllGames,
    updateGame
}