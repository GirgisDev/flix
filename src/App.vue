<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import showMovies from "./component/show-movies.vue";
import movie from "./component/movie.vue";
import appHeader from "./component/header.vue";

export default {
  components: {
    "show-blogs": showMovies,
    "app-header": appHeader,
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
html, body {
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-family: 'lato', sans-serif;
}
._input-style {
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #CCC;
  background: #F3F3F3;

  &:focus {
    outline: none;
    border: 1px solid #999;
  }
}
.container {
  width: 80%;
  margin: 0 auto;
}
.row {
  margin-bottom: 15px;
  display: block;
  &::after {
    clear: both;
  }
}
._col {
  width: 33.33333%;
  float: left;
}
._limited-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
._tag {
  background: #DEDEDE;
  color: #757575;
  padding: 3px 8px;
  margin: 0 5px;
  border-radius: 4px;
}
._no-content {
  text-align: center;
  margin: 60px auto;
  font-size: 1.5rem;
  color: #DD0510;
}
._loading {
  margin: 0 auto;
  display: block;
  height: 500px;
}
.clearfix {
  clear: both;
}
@media screen and (max-width: 767px) {
  ._col {
    width: 100%;
  }
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  ._col {
    width: 50%;
  }
}
</style>
