let artist = '#artist'
let song = '#song'
//let url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
let url;

$(document).on('ready', () => {
  console.log(artist, song)

  fetch(url)
  .then(res => res.json())
  .then(getData => {
    console.log(getData)
  })
}



