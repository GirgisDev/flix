<template>
    <div class="container">
      <div class="row" v-show="!loading">
        <h1>Latest Movies and series</h1>
        <input 
          type="text" 
          class="_input-style" 
          v-model="search" 
          placeholder="search Movies">
      </div>
      <div class="_col" v-for="movie in filterdMovies" v-show="!loading">
        <div class="movie-post">
          <router-link class="movie-post__img-container" v-bind:to="'/movie/' + movie.id">
            <img class="movie-post__img" v-bind:src="imageOriginalPth + movie.poster_path" alt="">
          </router-link>
          <div class="movie-post__info">
            <router-link class="movie-post__title" v-bind:to="'/blog/' + movie.id">
              <h4 v-bind:title="movie.title">{{movie.title | to-uppercase | snippetTitle}}</h4>
            </router-link>
            <p class="movie-post__description">{{movie.overview | snippet}}</p>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="row" v-show="filterdMovies.length && !loading">
        <div class="pagination">
          <div class="pagination__btn" v-show="currentPage != 1">
            &lt;&lt;
          </div>
          <div
            class="pagination__btn" 
            v-bind:class="{'pagination__btn--active': btn == currentPage}"
            v-on:click="paginateTo(btn)"
            v-for="btn in paginationArray">
            {{btn}}
          </div>
          <div class="pagination__btn" v-show="currentPage != totalPages">
            &gt;&gt;
          </div>
        </div>
      </div>
      <div class="row" v-show="search.length && !filterdMovies.length && !loading">
        <div class="_no-content">
          No movies matches your search
        </div>
      </div>
      <div class="row _loading-row" v-show="loading">
        <img 
          src="./../assets/_loading.gif"
          class="_loading" 
          alt="Loading">
      </div>
    </div>
</template>

<script>
import searchMixin from "../mixins/search-mixin";
export default {
  data() {
    return {
      movies: [],
      search: "",
      apiUrl: "https://api.themoviedb.org/3/movie/top_rated?api_key=",
      apiKey: '8eb894d6d7272a00baae3ec074b8b0ff',
      language: '&language=en-US',
      currentPage: 1,
      totalPages: null,
      loading: false,
      imageOriginalPth: "http://image.tmdb.org/t/p/w500//",
      paginationArray: []
    };
  },
  methods: {
    paginateTo: function (pageNum) {
      this.loading = true;
      this.$http  
        .get(this.apiUrl + this.apiKey + this.language + '&page=' + pageNum)
        .then(data => data = data.json())
        .then(data => {
          this.movies = data.results;
          this.currentPage = pageNum;
          this.totalPages = data.total_pages;
        }).then(data => {
          var N = this.currentPage + 5;
          if (this.currentPage <= 5) {
            this.paginationArray = [];
            for (var i = 1; i <= 10; i++) {
              this.paginationArray.push(i);
            }
          } else {
            if (this.currentPage >= this.totalPages)
              return;
            this.paginationArray = [];
            for (var i = this.currentPage - 4; i <= N; i++) {
              if (i <= 0)
                return;
              else {
                this.paginationArray.push(i);
              }
            }
          }
          this.loading = false;
        })
        
    }
  },
  created() {
    this.loading = true;
    this.$http  
      .get(this.apiUrl + this.apiKey + this.language + '&page=' + this.currentPage)
      .then(data => data = data.json())
      .then(data => {
        this.movies = data.results;
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
      }).then(data => {
        var N = this.currentPage + 9;
        for (var i = this.currentPage; i <= N; i++) {
          this.paginationArray.push(i);
        }
        this.loading = false;
      })
  },
  computed: {
  },
  mixins: [searchMixin]
};
</script>

<style lang="scss" scoped>
.movie-post {
  border-radius: 8px;
  border: 1px solid #ccc;
  min-height: 200px;
  max-height: 530px;
  margin: 20px 10px;

  .movie-post__img-container {
    display: inline-block;
    height: 400px;
    .movie-post__img {
      border-radius: 2px 2px 0 0;
      position: relative;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: -webkit-fill-available;
    }
  }
  .movie-post__info {
    padding: 0 10px;
    .movie-post__title {
      text-decoration: none;
      color: #DD0510;
    }
    .movie-post__description {
      color: #888;
    }
  }
}
.pagination {
  .pagination__btn {
    display: inline-block;
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #CCC;
    border-radius: 5px;
    cursor: pointer;
    color: #757575;
    margin: 0 2px;
  }
  .pagination__btn--active {
    background: #DEDEDE;
  }
}
</style>
