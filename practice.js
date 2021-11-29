"use strict";

const numberOfFilms = +prompt("сколько фильмов вы смотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt("один из последный просмотрреных фильмом", ""),
    b = prompt("на сколько оцените его?", ""),
    c = prompt("один из последных просмотренных фильмов", ""),
    d = prompt("на сколко вы оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);