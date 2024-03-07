// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => 
   (movie.director));
    //console.log("EXERCICE 1 ->", result);//
    return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  //console.log("EXERCICE 2 ->", array);//
  return result;w
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let { totalScore, numMovies } = array.reduce((acc, movie) => {
    if (movie.director === director) {
      acc.totalScore += movie.score;
      acc.numMovies++;
    }
    return acc;
  }, { totalScore: 0, numMovies: 0 });

  return numMovies ? totalScore / numMovies : 0;
}
  


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let copiedMovies = [...array]
  return copiedMovies
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map(array => array.title);
      }

// Exercise 5: Order by year, ascending
function orderByYear(array) {
    let result = array.map(item => ({ ...item })).sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  return result;
}



// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array) {
  let { totalScore, numMovies } = array.reduce((acc, movie) => {
    if (movie.genre) { 
      acc.totalScore += movie.score;
      acc.numMovies++;
    }
    return acc;
  }, { totalScore: 0, numMovies: 0 });

  return numMovies ? parseFloat((totalScore / numMovies).toFixed(2)) : 0;
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map(item => {
    let nuevoItem = { ...item };
    // Convertimos la duración a minutos
    nuevoItem.duration = nuevoItem.duration.split(' ').reduce((acc, time) => {
      if (time.includes('h')) {
        return acc + parseInt(time.replace('h', '')) * 60;
      } else if (time.includes('min')) {
        return acc + parseInt(time.replace('min', ''));
      } else {
        return acc;
      }
    }, 0);
    return nuevoItem;
  });
  return result;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
