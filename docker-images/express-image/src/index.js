// Random Chance generator
var Chance = require('chance');
var chance = new Chance();

// Express to make the http app
var express = require('express');
var app = express();

// Liste of pokemons
var POKEMON = require('./pokemons');

// List of Arenas
var ARENA = require('./arenas.json');

app.get('/', function (req, res) {
   res.send(generateBattle());
});

app.listen(3000, function () {
  console.log('Accepting http requests on port 3000!');
});

function generateBattle() {
   // Choose an arena name
   var arenaName = ARENA.arenas[chance.integer({min: 0, max: ARENA.arenas.length - 1})];

   // Create the battle
   var battle = new Battle(arenaName);

   // Set pokemons fighting
   var pokemon1 = POKEMON.pokemons[chance.integer({min: 0, max: POKEMON.pokemons.length - 1})];
   var pokemon2 = POKEMON.pokemons[chance.integer({min: 0, max: POKEMON.pokemons.length - 1})];
   battle.setFighters(pokemon1, pokemon2);

   return battle;
}

function Battle(arenaName) {
   this.arena = arenaName;
   this.firstFighter = null;
   this.secondeFighter = null;

   // Set the pokemons
   this.setFighters = function(pokemon1, pokemon2) {
      this.firstFighter = pokemon1;
      this.secondeFighter = pokemon2;
   }

}
