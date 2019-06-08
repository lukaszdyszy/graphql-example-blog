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
@import "../global.scss";

.wall {
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-content: center;
  padding: 20px 0;
}
</style>
