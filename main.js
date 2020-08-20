let artist = document.querySelector('#artist').value;
let song = document.querySelector('#song').value;
//let url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
let url = `https://api.lyrics.ovh/v1/thrice/deadbolt`;



$(document).on('ready', () => {
  console.log("yess")
  fetch(url)
  .then(res => res.json())
  .then(getData => {
    document.querySelector('#test').innerHTML = getData.lyrics;
  })
  .catch(err => console.log(err));
});
