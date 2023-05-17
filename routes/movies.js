const express = require('express');
const router = express.Router();
const mockData = require('../mockdata');

let movies = mockData;

router.get('/',(req, res) => {
    res.json(movies)
})

router.get('/:imdbID', (req, res) => {
    const imdbID = req.params.imdbID
    const movie = movies.find((movie) => movie.imdbID === imdbID)

    if (!movie) {
        return res
        .status(404).
        json({message: `Ingen film med id ${imdbID} kunde hittas`})
    }
    res.json(movie)
})

router.delete('/:imdbID', (req, res) => {
    const imdbID = req.params.imdbID
    const movie = movies.find((movie) => movie.imdbID === imdbID)

    if (!movie) {
        return res
        .status(404)
        .json({ message:`Ingen film med id ${imdbID} existerar`})
    }

    const updatedData = movies.filter((movie) => movie.imdbID !== imdbID)
    movies = updatedData

    res.json({message: `Filmen med id ${imdbID} har blivigt borttagen!`})
})

let newimdbID = 100
router.post('/', (req, res) => {
    const movie = req.body.movie
    console.log({movie})

    const { Title, Year, Released, Genre } = movie;
    if (!Title || !Year || !Released || !Genre) {
        return res
        .status(400)
        .json({ message: 'Obligatoriska fält saknas. De obligatoriska fälten är [Title, Year, Released och Genre]' });
      }
    
      if (isNaN(Year)) {
        return res
        .status(400)
        .json({ message: 'Year måste vara numeriskt' });
      }

    const newMovie = {
        ...movie,
        imdbID: newimdbID.toString()
    }

    newimdbID++
    movies.push(newMovie)

    console.log(newMovie)
    res.json(newMovie)
})

router.put('/:imdbID', (req, res) => {
    const imdbID = req.params.imdbID
    const movie = req.body.movie;
    const index = movies.findIndex((movie) => movie.imdbID === imdbID);

    if (index === -1) {
        return res
        .status(404)
        .json({message: `Filmen med ID ${imdbID} existerar ej`})
      }

    const updatedMovie = {...movies[index], ...movie};
    movies[index] = updatedMovie

    res.json(updatedMovie)
})
module.exports = router;