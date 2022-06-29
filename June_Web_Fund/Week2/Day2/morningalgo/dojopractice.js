


// function d6() {
//   var roll = Math.random();
//   roll = Math.ceil(6*roll)
//   return roll;
// }
  
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

// var lifesAnswers = [
//   "It is certain.",
//   "It is decidedly so.",
//   "Without a doubt.",
//   "Yes – definitely.",
//   "You may rely on it.",
//   "As I see it, yes.",
//   "Most likely.",
//   "Outlook good.",
//   "Yes.",
//   "Signs point to yes.",
//   "Reply hazy, try again.",
//   "Ask again later.",
//   "Better not tell you now.",
//   "Cannot predict now.",
//   "Concentrate and ask again.",
//   "Don't count on it.",
//   "My reply is no.",
//   "My sources say no.",
//   "Outlook not so good.",
//   "Very doubtful."
// ];


// function oracle(question){
//   var i  = Math.ceil(Math.random()*lifesAnswers.length);
//   console.log (lifesAnswers[i]);
// }

// var question= 'prompt("what goes here?")'
// oracle(question)

var pokemon = [
  { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
  { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
  { "id": 9,   "name": "Blastoise",  "types": ["water"] },
  { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
  { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
  { "id": 23,  "name": "Ekans",      "types": ["poison"] },
  { "id": 24,  "name": "Arbok",      "types": ["poison"] },
  { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
  { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
  { "id": 52,  "name": "Meowth",     "types": ["normal"] },
  { "id": 63,  "name": "Abra",       "types": ["psychic"] },
  { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
  { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
  { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
  { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
  { "id": 98,  "name": "Krabby",     "types": ["water"] },
  { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
  { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
  { "id": 133, "name": "Eevee",      "types": ["normal"] },
  { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
  { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
  { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
  { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];


// var monster = {
//   id: 1,
//   name: "Bulbasaur",
//   types: ["poison", "grass"]
// };

// console.log(monster.id)

// for(var i=0; i<pokemon.length; i++) {
//   if(pokemon[i].id > 99) {
//       console.log(pokemon[i].name);
//       }
//   }

  // for(var i=0; i<pokemon.length; i++) {
  //   if(pokemon[i].id %3 == 0) {
  //       console.log(pokemon[i].name);
  //       }
  //   }

    // for(var i=0; i<pokemon.length; i++) {
    //   var type = pokemon[i].types.length
    //   if (type>1){
    //       console.log(pokemon[i].name);
    //       }
    //   }

      for(var i=0; i<pokemon.length; i++) {
        var type = pokemon[i].types.length;
        if (type>1){
            console.log(pokemon[i].name);
            }
        }
  