let dataset = [1, 2, 3, 4, 5]; // Defineret et array 'datasæt' med værdierne 1 til 5

d3.select("#data") // Vælger HTML-elementet med id "#data" ved hjælp af D3
  .selectAll("p") // Vælger alle 'p'-elementer i '#data" selvom de måske ikke eksisterer
  .data(dataset) // Binder dataene i 'dataset' til de valgte 'p'-elementer
  .enter() //Indsætter en virtuel placeholder for hvert dataelement, hvor der ikke allerede er et tilsvarende 'p'-element
  .append("p") //Tilføjer et nyt 'p'-element for hvert dataelement, der mangler en tilsvarende DOM-node
  .text(function (d) { // // Indsætter tekst i hvert 'p'-element
    return d; //Returnerer værdien af det aktuelle dataelement til brug som tekst
  });