export default {
    computed: {
        filterdMovies: function () {
            return this.movies.filter(movie => {
                return movie.title.toLowerCase().match(this.search.toLowerCase())
            });
        }
    }
}