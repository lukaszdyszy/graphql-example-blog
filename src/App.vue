<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>

<style lang="scss">
@import "global.scss";

* {
  box-sizing: border-box;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px;
}

a {
  color: inherit;
  text-decoration: none;
}

main {
  min-height: 100vh;
  padding: 30px 0;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  overflow-x: hidden;
  @media (min-width: $container-width) {
    max-width: $container-width;
  }
}

</style>
