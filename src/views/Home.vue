<template>
  <div class="home" v-if="posts.length > 0 && categories.length > 0">
    <header>
      <TopBar :mode="'flexible'"></TopBar>
      <Header :image="categories[0].image.url" 
      :title="title"
      :description="description">
      </Header>
    </header>
    <main>
      <div class="container">
        <h2>newest</h2>
        <Wall :posts="posts"></Wall>
        <div class="show-more">
          <router-link to="/archives">show more</router-link>
        </div>
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
      categories: Array(),
      title: 'Blog',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt nam hic nihil, officiis autem?'
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
            category {
              name,
              color{
                css
              }
            }
            createdAt
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

.show-more{
  padding: 50px 0 0 0;
  a{
    display: block;
    max-width: 350px;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
    background-color: rgb(98, 201, 98);
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    &:hover{
      background-color: rgb(83, 170, 83);
    }
  }
}
</style>
