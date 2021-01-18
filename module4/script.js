/*
Solution of assignment 4:

Expected output:

Hello Yaakov
Good Bye John
Good Bye Jayant
Good Bye Sakshi
Hello Paul
Hello Jason
Hello Neetu
Hello Manish
Hello Bharat
Good Bye Jim
*/

(function() {
    var names = ["Yaakov", "John", "Jayant", "Sakshi", "Paul", "Jason", "Neetu", "Manish", "Bharat", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
