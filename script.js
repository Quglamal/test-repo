const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movise: {},
  actors: {},
  geners: [],
  privat: false,
};

const a = promt("Один из последних просмотренных фильмов?", ""),
  b = promt("На сколько оцените его?", ""),
  c = promt("Один из последних просмотренных фильмов?", ""),
  d = promt("На сколько оцените его?", "");

personalMovieDB.movise[a] = b;
personalMovieDB.movise[c] = d;

console.log(numberOfFilms);
