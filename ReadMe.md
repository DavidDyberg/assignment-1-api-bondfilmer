# James Bond Filmer API
## Instalation
1. Installera Node.js om du inte redan har det installerat.
2. Kör npm install för att installera projektets beroenden.
3. Kör npm run dev för att starta servern.

## Testa APIet med postman

1. Ladda ner och installera Postman om du inte redan har det installerat.

2. Skapa en ny "Collection" i Postman.

3. För varje API-slutpunkt, skapa en ny "Request" i din collection och konfigurera den med rätt metod och URL (enligt beskrivningen nedanför).

4. Skiv in rätt API-nyckel för att få tillgång till APIN. Se detta under rubriken "Hantera Api-nycklar" nedan.

5. För POST och PUT-anrop, gå till fliken "Body" i din request och välj "raw" och "JSON" som format. Skriv sedan in JSON-data för din karaktär enligt exempel nedan.

6. Skicka dina requests genom att klicka på send och utforska API:et!
### Hur använder du postman?
#### Hämta alla filmer
1. Välj metod GET i postman.
2. Skriv in din URL följt av: /movies?apiKey=5
#### Hämta en specifik film baserat på dess IMDB-id
1. Välj metod GET i postman.
2. Skriv in din URL följt av: /movies/"IMDB-idt till filmen du vill hämta"?apiKey=5
#### Skapa en ny film
1. Välj metod POST i postman.
2. Skriv in din URL följt av: /movies?apiKey=5
3. Gå till fliken "Body" i din request och välj "raw" och "JSON" som format. Skriv sedan in JSON-data för din film. I bodyn, skriv in information på din film enligt strukturen nedan. Välj själv vad du vill skriva!

```
{
    "movie": {
        "Title": "",
        "Year": "",
        "Released": "",
        "Genre": ""
    }
}
```

```
function test() {
  console.log("notice the blank line before this function?");
}
```
#### Uppdatera en film baserat på dess IMDB-id
1. Välj metod PUT i postman.
2. Skriv in din URL följt av: /movies/"IMDB-idt till filmen du vill uppdatera"?apiKey=5
3. Använd dig av samma struktrur som ovan.

#### Ta bort en film baserat på dess IMDB-id
1. Välj metod DELETE i postman.
2. Skriv in din URL följt av: /movies/"IMDB-idt till filmen du vill radera"?apiKey=5

## Hantera Api-nycklar

### Implementera API-nyckeln i din URL
För att få tillgång till filmerna måste du skriva in en giltig API-nyckel. Följ instruktionerna nedan för att implementera en giltig nyckel.

1. Välj en giltig API-nyckel från denna lista: ['5','6','8']
2. Skriv in '?apiKey=' i slutet av din URL följt av en av siffrorna från listan ovan.
3. Om nycklen är inskriven korrekt så kan du börja utforska APIet!
### Ta bort en API-nyckel
1. Välj metod DELETE i postman.
2. Skriv in din URL följt av: /removeKey följt av den nyckel du vill ta bort. Exempelvis /removeKey?apiKey=5

### Lägg till en ny API-nyckel
1. Välj metod POST i postman.
2. Skriv in din URL följt av: /addKey
3. Gå till fliken "Body" i din request och välj "raw" och "JSON" som format. Skriv sedan in JSON-data för din film. I bodyn, skriv in information på din nya nyckel enligt strukturen nedan.

{
  "apiKey": "50"
}
