var members = [ 
    { name: 'Melanie Johnson', part: 'Vocals' },
    { name: 'Wynn McElwee', part: 'Guitar' },
    { name: 'Travis Hildreth', part: 'Guitar' },
    { name: 'Jeff Clark', part: 'Bass' },
    { name: 'James Wilinski', part: 'Drums' }
]; 

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // while there remain elements to shuffle...
  while (0 !== currentIndex) {

    // pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // and swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(document).ready(function() {
    // put band members in random order
    members = shuffle(members);
    console.log(members);
    
    // add them to the page in that order
    var memberParts = $('.member-parts-box span');
    var memberNames = $('.member-names-box span');
    for (var i = 0; i < members.length; i++) {
        memberParts[i].innerText = members[i].part;
        memberNames[i].innerText = members[i].name;
    }
});