const path = require('path');
const withOffline = require('next-offline');
const webpack = require('webpack');

require('dotenv').config({
    path: path.resolve(
        __dirname,
        `.env.${process.env.NODE_ENV}`,
    ),
});

module.exports = withOffline({
    env: {
        API_KEY: process.env.API_KEY,
        URL_MOVIE_POPULAR: process.env.URL_MOVIE_POPULAR,
        URL_MOVIE_DETAIL: process.env.URL_MOVIE_DETAIL,
        URL_MOVIE_SEARCH: process.env.URL_MOVIE_SEARCH,
        URL_SERIES_POPULAR: process.env.URL_SERIES_POPULAR,
        URL_SERIES_DETAIL: process.env.URL_SERIES_DETAIL,
        URL_SERIES_SEARCH: process.env.URL_SERIES_SEARCH,
        URL_GENRE_FAMILY: process.env.URL_GENRE_FAMILY,
        URL_GENRE_DOCUMENTARY: process.env.URL_GENRE_DOCUMENTARY,
        URL_POSTER: process.env.URL_POSTER
    }
});