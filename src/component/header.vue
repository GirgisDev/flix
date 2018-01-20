<template>
    <nav>
        <div class="site-brand">
          <router-link to="/">FLIX</router-link>
        </div>
        <ul class="right-nav">
          <li>
              <router-link to="/">Movies</router-link>
          </li>
        </ul>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
}
nav {
  height: 70px;
  line-height: 70px;
  background: #222222;
  font-family: "lato";

  .site-brand {
    width: 49%;
    margin: 0;
    padding: 0;
    float: left;
    padding-left: 40px;
    a {
      color: #dd0510;
      text-decoration: none;
      font-weight: bold;
      font-family: "lato";
      font-size: 50px;
    }
  }
  .right-nav {
    margin: 0;
    padding: 0;
    width: 50%;
    text-align: center;
    display: inline-block;

    li {
      display: inline-block;

      a {
        text-decoration: none;
        color: #fff;
        padding: 0 10px;
        display: block;
        transition: all 0.4s ease-in-out;

        &.router-link-exact-active {
          background: #dd0510;
        }
        &:hover {
          background: #dd0510;
        }
      }
    }
  }
}
</style>
