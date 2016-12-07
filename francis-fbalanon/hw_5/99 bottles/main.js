var one = "bottles of beer on the wall,";
var two = "bottles of beer. Take one down and pass it around,";
var three = "bottles of beer on the wall.";
var four = "1 bottle of beer on the wall.";

window.onload = function() {
  var lyrics = document.getElementById('bottles');

for (var count = 97; count >= 0; count --){
    if (count > 2) {
        var lyricLine = count + " "  + one + " " + count + " " + two + " " + (count - 1) + " " + three;
        var newLyric = lyricLine;
        var newLine = document.createElement('li');
        var newLyricText = document.createTextNode(newLyric);
        newLine.appendChild(newLyricText);
        lyrics.appendChild(newLine);
        lyricLine.value = "";
    } else if (count === 2) {
        var lyricLine = count + " "  + one + " " + count + " " + two + " " + four;
        var newLyric = lyricLine;
        var newLine = document.createElement('li');
        var newLyricText = document.createTextNode(newLyric);
        newLine.appendChild(newLyricText);
        lyrics.appendChild(newLine);
        lyricLine.value = "";
    } else if (count === 1) {
        var lyricLine = "1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall."
        var newLyric = lyricLine;
        var newLine = document.createElement('li');
        var newLyricText = document.createTextNode(newLyric);
        newLine.appendChild(newLyricText);
        lyrics.appendChild(newLine);
        lyricLine.value = "";
    } else {
        var lyricLine = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
        var newLyric = lyricLine;
        var newLine = document.createElement('li');
        var newLyricText = document.createTextNode(newLyric);
        newLine.appendChild(newLyricText);
        lyrics.appendChild(newLine);
        lyricLine.value = "";
    }
};
};

