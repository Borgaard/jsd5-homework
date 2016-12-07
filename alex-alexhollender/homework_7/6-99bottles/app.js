var contailerUl = document.getElementById('song-lyrics');

var lyric1 = " bottles of beer on the wall, ";
var lyric2 = " bottles of beer.";
var lyric3 = " Take one down, pass it around, ";
var lyric4 = " bottles of beer on the wall."

var lyric1b = " bottle of beer on the wall";
var lyric2b = " bottle of beer";

for(var i = 99; i >= 1; i--) {
	if (i >= 2) {
	var newLi = document.createElement('li');
	var lyricLine = document.createTextNode(i + lyric1 + i + lyric2 + lyric3 + (i - 1) + lyric4);
	newLi.appendChild(lyricLine);
	contailerUl.appendChild(newLi);
	} else {
	  var newLi = document.createElement('li');
	  var lyricLine = document.createTextNode(i + lyric1b + i + lyric2b + lyric3 + (i - 1) + lyric4);
	  newLi.appendChild(lyricLine);
	  contailerUl.appendChild(newLi);
	}
}