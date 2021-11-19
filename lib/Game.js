const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.Player;
}

Game.prototype.initializeGame = function() {

};

module.exports = Game;