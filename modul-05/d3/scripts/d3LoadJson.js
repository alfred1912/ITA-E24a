// Henter JSON-data fra filen 'albums.json' og udfører en funktion, når dataene er indlæst
d3.json("data/albums.json").then(function (data) {
  console.log(data); // Logger JSON-dataene i konsollen for at verificere indholdet

  // Tilføjer en overskrift til #dataJSON-elementet med teksten "JSON Data:"
  d3.select("#dataJSON").append("h2").text("JSON Data:");

  // Binder JSON-data til 'p'-elementer og tilføjer et 'p' for hver albumindgang i JSON-filen
  d3.select("#dataJSON")
    .selectAll("p")
    .data(data)
    .enter()
    .append("p")
    .text(function (album) { // Tilføjer tekst til hvert 'p'-element
      return (
        album.artistName +
        " - " +
        album.albumName +
        " - " +
        album.trackList.length
      ); // Viser kunstnernavn, albumnavn og antal numre for hvert album
    });

  // Initialiserer et tomt array til CD-objekter
  let cdObjects = [];
  for (let i in data) {
    // Opretter et nyt CD-objekt for hvert album i JSON-dataene
    let cd = new CD(
      data[i].artistName,
      data[i].albumName,
      data[i].trackList.length
    );
    cdObjects.push(cd); // Tilføjer CD-objektet til 'cdObjects'-arrayet
  }

  console.log(cdObjects); // Logger det nye array af CD-objekter til konsollen

  // Tilføjer en overskrift til #dataOBJ-elementet med teksten "Object Data:"
  d3.select("#dataOBJ").append("h2").text("Object Data:");

  // Binder cdObjects-data til 'p'-elementer og tilføjer et 'p' for hver CD i 'cdObjects'
  d3.select("#dataOBJ")
    .selectAll("p")
    .data(cdObjects)
    .enter()
    .append("p")
    .text(function (albumObj) { // Tilføjer tekst til hvert 'p'-element
      return (
        albumObj.artist +
        " - " +
        albumObj.title +
        " - " +
        albumObj.numberOfTracks
      ); // Viser kunstnernavn, albumnavn og antal numre for hvert CD-objekt
    });
});

// Definitionen af CD-konstruktørfunktionen til oprettelse af CD-objekter
function CD(artist, title, numberOfTracks) {
  this.artist = artist; // Sætter kunstnernavn
  this.title = title; // Sætter albumnavn
  this.numberOfTracks = numberOfTracks; // Sætter antal numre
}

