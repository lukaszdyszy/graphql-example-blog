<template>
  <div class="header" :style="{'background-image': 'url('+image+')', 'border-color': color}">
    <div class="claim">
      <h1>{{ title }}</h1>
      <p>
        {{ description }}
      </p>
    </div>
    <i class="fas fa-arrow-down fa-3x" @click="scrollDown()"></i>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    color: String,
    title: String,
    description: String
  },
  methods: {
    scrollDown() {
      let vh = window.innerHeight;
      window.scrollTo({ top: vh, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../global.scss";

.header {
  border: 7px solid black;
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: white;
  text-shadow: 2px 2px 2px #000000;
  position: relative;
}
.claim {
  text-align: center;
}
h1 {
  margin: 0;
  padding: 20px 0;
  letter-spacing: 5px;
  text-transform: capitalize;
  font-size: 3rem;
}
p{
  font-size: 1.5rem;
  letter-spacing: 1px;
}

.fa-arrow-down {
  position: absolute;
  bottom: 15vh;
  left: 50%;
  transform: translateX(-50%);
  &:hover{
    cursor: pointer;
  }
}

@media (min-width: $desktop-width) {
  .header {
    padding: 25px;
  }
}
</style>
