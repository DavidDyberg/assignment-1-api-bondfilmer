# James Bond Movies API
## Instalation
1. Installera Node.js om du inte redan har det installerat.
2. Kör npm install för att installera projektets beroenden.
3. Kör npm run dev för att starta servern.

## Testa APIet med postman

1. Ladda ner och installera Postman om du inte redan har det installerat.

2. Skapa en ny "Collection" i Postman.

3. För varje API-slutpunkt, skapa en ny "Request" i din collection och konfigurera den med rätt metod och URL (enligt beskrivningen nedanför).

4. För POST och PUT-anrop, gå till fliken "Body" i din request och välj "raw" och "JSON" som format. Skriv sedan in JSON-data för din karaktär enligt exempel nedan.

5. Skicka dina requests genom att klicka på send och utforska API:et!
### Hur använder du postman?
#### Hämta alla filmer
1. Välj metod GET i postman.
2. Skriv in din url följt av: /movies
#### Hämta en specifik film baserat på dess IMDB-id
1. Välj metod GET i postman.
2. Skriv in din url följt av: /movies/"IMDB-idt till filmen du vill hämta"
#### Skapa en ny film
1. Välj metod POST i postman.
2. Skriv in din url följt av: /movies
3. Gå till fliken "Body" i din request och välj "raw" och "JSON" som format. Skriv sedan in JSON-data för din film. I bodyn, skriv in information på din film enligt strukturen nedan. Välj själv vad du vill skriva!
{
    "movie": {
        "Title": "",
        "Year": "",
        "Genre": "",
        "imdbRating": ""
    }
}
#### Uppdatera en film baserat på dess IMDB-id
1. Välj metod PUT i postman.
2. Skriv in din url följt av: /movies/"IMDB-idt till filmen du vill uppdatera"
3. Använd dig av samma struktrur som ovan.

#### Ta bort en film baserat på dess IMDB-id
1. Välj metod DELETE i postman.
2. Skriv in din url följt av: /movies/"IMDB-idt till filmen du vill radera".
