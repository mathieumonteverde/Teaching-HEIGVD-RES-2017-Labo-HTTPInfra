$(function() {
   setInterval(function() {
      ajaxPokemonBattle();
   }, 3000);
});


function ajaxPokemonBattle() {
   $.getJSON("/api/pokemons/", function( battle ) {
      $("#arena h1").html(battle.arena);
      $("#fighter1 h2").html(battle.firstFighter);
      $("#fighter2 h2").html(battle.secondeFighter);
   });
}
