<template>
  <div class="container">
    <div id="single-movie" v-show="!loading">
      <div class="movie-post__img-container">
        <img class="movie-post__img" v-bind:src="imageOriginalPth + movie.poster_path" alt="">
      </div>
      <div class="movie-post__info">
        <h3 class="movie-post__title movie-post__title--red" v-bind:title="movie.title">{{movie.title | snippetTitle}}</h3>
        <p class="movie-post__description">{{movie.overview}}</p>
        <p class="movie-post__description">Releasing Date: {{movie.release_date}}</p>
        <p class="movie-post__description">Runtime: {{movie.runtime}} min.</p>
        <p>
          Genres: <span v-for="genre in movie.genres" class="_tag">{{genre.name}}</span>
        </p>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="row _loading-row" v-show="loading">
      <img 
        src="./../assets/_loading.gif"
        class="_loading _loading--less-height" 
        alt="Loading">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      movie: {},
      loading: false,
      apiUrl: "https://api.themoviedb.org/3/movie/"+ this.$route.params.id + "?api_key=8eb894d6d7272a00baae3ec074b8b0ff&language=en-US",
      imageOriginalPth: "http://image.tmdb.org/t/p/w500//"
    };
  },
  created() {
    this.loading = true;
    this.$http.get(this.apiUrl)
      .then(data => data = data.json()).then(data => {
        this.movie = data;
        this.loading = false;
      });
  }
};
</script>

<style lang="scss">
#single-movie {
    border: 1px solid #CCC;
    color: #757575;
    margin: 40px auto;
    border-radius: 4px;
    box-shadow: 1px 0 8px 0px rgba(22, 22, 22, .3);

    h1 {
      border-bottom: 1px solid #AAA;
      margin-top: 0;
    }

    .movie-post__img-container {
      float: left;
      height: 240px;
      .movie-post__img {
        height: -webkit-fill-available;
      }
    }
    .movie-post__info {
      float: left;
      width: 75%;
      padding: 0 20px;
    }

    .movie-post__title--red {
      color: #DD0510;
    }
}
._loading--less-height {
  height: initial;
}
</style>
