var nbmusic, day, x, y, z, midi, midi_title;

nbmusic = 6; // mettez ici le nombre de musiques de votre liste de lecture
day = new Date();
z = day.getTime();
y = (z - (parseInt(z/1000,10) * 1000))/10;
x = parseInt(y/100*nbmusic,10) + 1; // ici on tire une musique au sort

// insérez en dessous chacune des musiques avec leur titre :
if (x == (1))
{
	midi="musiques/musique_printemps.mp3";
	midi_title="Belle musique de printemps !";
}

if (x == (2))
{
	midi="musiques/musique_ete.mp3";
	midi_title="Summer Dance";
}

if (x == (3))
{
	midi="musiques/musique_automne.mp3";
	midi_title="Automne";
}

if (x == (4))
{
	midi="musiques/musique_hiver.mp3";
	midi_title="La neige tombe en hiver";
}

if (x == (5))
{
	midi="musiques/musique_paques.mp3";
	midi_title="Ecoute les cloches";
}

if (x == (6))
{
	midi="musiques/musique_noel.mp3";
	midi_title="Petit papa noël";
}

document.write('<embed type="audio/x-mpeg3" src= ' + midi + ' autostart="true" loop="true" ')
document.write('volume="100" align="center" width="70" height="25">')
document.write('<p style="text-align:center;">Titre :  ' + midi_title + ' </p> ')
