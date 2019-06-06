<template>
  <div class="wall">
    <Post
      v-for="post in posts"
      :id="post.id"
      :title="post.title"
      :thumbnail="post.thumbnail.url"
      :excerpt="post.excerpt"
    ></Post>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Wall",
  components: {
    Post
  },
  props: {
    posts: Array
  }
};
</script>

<style lang="scss" scoped>
.wall {
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
}
</style>
