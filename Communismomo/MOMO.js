function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
    head.appendChild(line);
}

if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

var audio = document.getElementById('bgSong');
audio.src='audio/VotreMusique.mp3';
audio.load();
audio.play();
