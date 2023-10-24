const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let movies = [];

app.get('/', (req, res) => {
    res.send('Welcome to my favorite movie list');

    if(movies.length === 0){
        console.log('No movies added yet');
    }
    else{
        console.log('Movies are added, please hit /movies endpoint');
    }
});

app.get("/movies/:id", (req, res) => {
	const id = req.params.id;
	const movie = movies.find((movie) => movie.id == id);
	if (movie) {
		res.json(movie);
	} else {
		res.status(404).send("Movie not found");
	}
});

app.get('/movies', (req, res) => {
    res.json(movies);
});

app.post('/movies', (req, res) => {
    const newMovie = req.body;
    movies.push(newMovie);
    res.json(newMovie);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
