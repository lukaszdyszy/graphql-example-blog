<template>
  <div id="app">
    <div class="content">
      <transition name="page" mode="out-in">
        <router-view :key="$route.params.category"></router-view>
      </transition>
    </div>
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
  font-size: 18px;
}

a {
  color: inherit;
  text-decoration: none;
}

main {
  min-height: 100vh;
  padding: 75px 0;
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

.content{
  min-height: 100vh;
}

// page transition
.page-enter-active, .page-leave-active{
  transition: 0.75s;
}
.page-enter, .page-leave-to{
  opacity: 0;
}
.page-enter-to, .page-leave{
  opacity: 1;
}


</style>
