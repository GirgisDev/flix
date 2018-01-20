import showMovies from './component/show-movies.vue'
import movie from './component/movie.vue'

export default [
    { path: '/', component: showMovies },
    { path: '/movie/:id', component: movie },
]