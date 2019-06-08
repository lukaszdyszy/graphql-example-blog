<template>
  <div class="top-bar" :class="{ sticky: sticky }">
    <div class="social">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-youtube"></i>
    </div>
    <div class="main-menu">
      <i class="fas fa-bars fa-2x mobile" @click="open = !open"></i>
      <nav :class="{ open: open }">
        <i class="fas fa-times fa-2x mobile" @click="open = !open"></i>
        <h4 class="mobile">menu</h4>
        <ul class="menu" @click="open = !open">
          <li>
            <router-link to="/"><i class="fas fa-home"></i> home</router-link>
          </li>
          <li>
            <router-link to="/category/games"
              ><i class="fas fa-gamepad"></i> games</router-link
            >
          </li>
          <li>
            <router-link to="/category/films"
              ><i class="fas fa-video"></i> movies</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash';

export default {
  name: "TopBar",
  props: {
    mode: String
  },
  data() {
    return {
      open: false,
      sticky: false
    };
  },
  created() {
    let self = this;
    if(this.mode == 'flexible'){
      window.addEventListener("scroll", _.debounce(function() {
        if (window.scrollY >= window.innerHeight) {
          self.sticky = true;
        } else {
          self.sticky = false;
        }
      }), 1000);
    } else {
      this.sticky = true;
    }
  }
};
</script>

<style lang="scss">
@import "../global.scss";

.top-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  display: flex;
  z-index: 10;
  transition: 0.45s;
  color: white;
  text-shadow: 3px 1px 1px black;
  div {
    flex: 1;
  }
  &.sticky {
    position: fixed;
    width: 100vw;
    background-color: rgb(49, 49, 49);
  }
}
.social {
  text-align: left;
  letter-spacing: 25px;
}
.main-menu {
  text-align: right;
}

nav {
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(100vw);
  transition: 0.75s;
  &.open {
    transform: translateX(0);
  }
}
h4 {
  padding: 0;
  display: block;
  margin: 35px 0;
  border-bottom: 1px solid rgb(150, 150, 150);
  text-transform: uppercase;
  letter-spacing: 7px;
  font-size: 2.5rem;
  font-weight: bold;
}
ul.menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    text-transform: capitalize;
    line-height: 180%;
  }
}

.fa-times {
  position: absolute;
  top: 15px;
  left: 15px;
}

@media (min-width: $desktop-width) {
  .mobile {
    display: none;
  }
  nav {
    transform: translateX(0);
    background-color: rgba(0, 0, 0, 0);
    position: static;
    width: auto;
    height: auto;
    flex-direction: row;
    justify-content: flex-end;
  }
  ul.menu {
    display: flex;
    li {
      padding: 0 15px;
      font-size: 1.15rem;
    }
  }
}
</style>
