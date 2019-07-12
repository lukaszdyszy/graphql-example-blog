<template>
  <div class="category" v-if="posts.length > 0">
    <header>
      <TopBar :mode="'flexible'"></TopBar>
      <Header 
      :image="posts[0].category.image.url" 
      :color="posts[0].category.color.css"
      :title="this.$route.params.category"
      :description="posts[0].category.description"></Header>
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
  name: "Category",
  components: {
    TopBar,
    Header,
    Wall
  },
  data() {
    return {
      posts: Array()
    };
  },
  apollo: {
    posts: {
        query: gql`query($category: String!){
          posts(where: {
              category: {
                  name: $category
              }
          }, orderBy: createdAt_DESC) {
            title
            thumbnail {
              url
            }
            excerpt
            id,
            category{
                name,
                image{
                    url
                }
                color{
                  css
                },
                description
            }
            createdAt
          }
        }`,
        variables: {
            category: ""
        },
        skip() {
            return this.skipQuery
        }
    }
  },
  methods: {
    initialize(){
      this.$apollo.queries.posts.options.variables = {
          category: this.$route.params.category
      }
      this.$apollo.queries.posts.skip = false;
      window.scroll(0, 0);
    }
  },
  mounted(){
      this.initialize();
  },
  watch: {
    '$route.params.category'(){
      this.initialize();
      this.$apollo.queries.posts.refetch();
    }
  }
};
</script>

<style lang="scss">
h2 {
  font-size: 2rem;
  margin: 0;
  padding: 20px 0;
  text-transform: capitalize;
  letter-spacing: 3px;
  font-weight: bold;
}
</style>
