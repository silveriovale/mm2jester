const jokes = [
  "Did you hear about the orc who thought kites were made from flypaper?",
  "Why are there only twenty hours in an Orc day?  Ever see an orc with twenty-four fingers and toes?",
  "Why can't orcs lie on the beach?  Cats will bury them.",
  "What do you call an orc with half a brain?  Gifted.",
  "How can you recognize an orc pirate?  He is the one with a patch over botheyes.",
  "Did you hear about the orc who went to the dentist to have a wisdom tooth put in?",
  "Why can't orcs boil water?  They forgot the recipe!",
  "What's the most dangerous job in CRON?  Dentist to a vampire.",
  "Why did the doctor tell the zombie to get plenty of sleep?  He was dead on his feet.",
  "What's a ghost's favorite game?  Hide and Shriek.",
  "What's a sea monster's favorite meal?  Fish and Ships.",
  "Why didn't the skeleton cross the road?  He didn't have the guts.",
  "What are the two things an orc cannot have for breakfast?  Lunch and dinner.",
  "Orc party game = Pin the horns on the dragon.",
  "Why do orc women wear high-healed shoes?  To keep their knuckles from dragging on the ground.",
  "Did you hear about the orc ventri-loquist whose dummy quit to find a new partner?",
  "An orc bought a pet rock.  It ran away the next day.",
  "Orc inventions:  waterproof sponges.",
  "How many orcs does it take to carry out a kidnapping?  Ten, one to capture the kid and nine to write the ransom note.",
  "Did you hear about the orc who cut off his left arm and leg?  He wanted to be all right.",
  "How can you tell if an orc is an aristocrat?  His tattoo has no spelling errors.",
  "What do you get when the Mega Dragon walks through a vegetable garden? Squash."
]

$(document).ready(function() {
  $(".btn-tell-joke").click(function() {
    $(this).hide();
    $(".question").hide();
    $(".joke-text").text(getRandomJoke());
    $(".joke-card").show();
  });
});

function getRandomJoke() {
  const randomJokeIndex = Math.floor(Math.random()*jokes.length);
  return jokes[randomJokeIndex];
}
