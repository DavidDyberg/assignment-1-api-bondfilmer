const movies = require('./routes/movies'); 
const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

const validApiKeys = ['2', '5', '6', '8', '10'];
const authendicApiKey = (req, res, next) => {
   const apiKey = req.query.apiKey
   
  if (!apiKey) {
    return res
    .status(403)
    .json({message: 'Ingen API nyckel inskriven'})
  }

  if (!validApiKeys.includes(apiKey) && req.method !== 'DELETE') {
    return res
    .status(404)
    .json({message: 'Fel API nyckel! Skriv in en annan nyckel.'})
  }
  next()
}
   
app.delete('/removeKey', (req, res) => {
  const apiKey = req.query.apiKey;

  const index = validApiKeys.indexOf(apiKey);
  if (index > -1) {
    validApiKeys.splice(index, 1);
    return res
    .status(200)
    .json({ message: 'API-nyckel borttagen' });
  }

  return res
  .status(404)
  .json({ message: 'API-nyckel hittades inte' });
});

app.post('/addKey', (req, res) => {
  const apiKey = req.body.apiKey;
  
  if (!apiKey) {
    return res
    .status(404)
    .json({message: 'Ingen nyckel är inskriven'})
  }

  if (validApiKeys.includes(apiKey)) {
    return res
    .status(409)
    .json({message:'API-nyckeln existerar redan'})
  }

  validApiKeys.push(apiKey)
  return res
  .status(202)
  .json({message: 'API-nyckel tillagd!'})
})

app.use((req, res, next) => {
  authendicApiKey(req, res, next);
})

app.use("/movies", movies);

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to this James Bond movies API!!')
})

app.listen(port, () => {
  console.log(`This server is running on port ${port}`)
});