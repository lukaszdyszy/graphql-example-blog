<template>
  <div class="home" v-if="posts.length > 0 && categories.length > 0">
    <header>
      <TopBar :mode="'flexible'"></TopBar>
      <Header :image="categories[0].image.url"></Header>
    </header>
    <main>
      <div class="container">
        <h2>newest</h2>
        <Wall :posts="posts"></Wall>
        <router-link to="/archive"></router-link>
      </div>
    </main>
  </div>
</template>

<script>
import gql from "graphql-tag";
import Header from "../components/Header.vue";
import Wall from "../components/Wall.vue";
import TopBar from "../components/TopBar.vue";

export default {
  name: "Home",
  components: {
    TopBar,
    Header,
    Wall
  },
  data() {
    return {
      posts: Array(),
      categories: Array()
    };
  },
  apollo: {
    posts: {
      query: gql`
        {
          posts(orderBy: createdAt_DESC, first: 6) {
            title
            thumbnail {
              url
            }
            excerpt
            id
          }
        }
      `
    },
    categories: {
      query: gql`{
        categories(where: {
          name: "others"
        }){
          image{
            url
          }
        }
      }`
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 2rem;
  margin: 0;
  padding: 20px 0;
  text-transform: capitalize;
  letter-spacing: 3px;
  font-weight: bold;
}
</style>
