<template>
  <div class="post">
    <h3>{{ title }}</h3>
    <img :src="thumbnail" alt="" class="thumbnail" />
    <p class="excerpt">
      {{ excerpt }}
    </p>
    <router-link :to="'/single/' + id">read more</router-link>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    title: String,
    thumbnail: String,
    excerpt: String,
    id: String
  }
};
</script>

<style lang="scss" scoped>
.post {
  border: 1px solid rgb(185, 185, 185);
  padding: 10px;
  box-shadow: 0px 3px 10px 1px rgba(94, 94, 94, 0.55);
}

h3 {
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 0;
  padding: 0 0 15px 0;
}

img.thumbnail {
  width: 100%;
  height: auto;
}

p {
  line-height: 150%;
  margin: 0;
  padding: 10px 0;
}

a {
  display: block;
  width: 100%;
  border: 1px solid;
  color: rgb(133, 133, 133);
  padding: 10px;
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 2px;
  &:hover {
    color: #88d188;
  }
}
</style>
