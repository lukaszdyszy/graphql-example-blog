<template>
    <div class="archives">
        <TopBar :mode="'static'"></TopBar>
        <main>
            <div class="container">
                <div class="loading" v-if="$apollo.loading != 0">
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
                <Wall :posts="posts"></Wall>
            </div>
            <div class="pagination">
                <div class="pag-arrow" @click="prevPage()"><i class="fas fa-angle-left"></i></div>
                <div @click="page=0;getPosts()"> 1 </div>
                <div class="number"> ... {{ page + 1 }} ... </div>
                <div @click="page=lastPage-1;getPosts()"> {{ lastPage }} </div>
                <div class="pag-arrow" @click="nextPage()"><i class="fas fa-angle-right"></i></div>
            </div>
        </main>
    </div>
</template>

<script>
import gql from "graphql-tag";
import TopBar from '../components/TopBar.vue';
import Wall from '../components/Wall.vue';
import { log } from 'util';

export default {
    name: "Archives",
    components: {
        TopBar,
        Wall
    },
    data(){
        return {
            posts: Array(),
            page: 0,
            lastPage: Array()
        }
    },
    apollo: {
        posts: {
            query: gql`query($start: Int!){
                posts(orderBy: createdAt_DESC, first: 6, skip: $start){
                    title,
                    thumbnail{
                        url
                    },
                    excerpt,
                    id,
                    category {
                    name,
                    color{
                        css
                    }
                    }
                    createdAt
                }
            }`,
            variables: {
                start: Number
            },
            skip() {
                return this.skipQuery
            }
        },
        lastPage: {
            query: gql`{
                posts{
                    id
                }
            }`,
            update(data) {
                let pages = Math.ceil(data.posts.length / 6);
                return pages;
            }
        }
    },
    methods: {
        getPosts(){
            let startFrom = this.page * 6;
            this.$apollo.queries.posts.options.variables = {
                start: startFrom
            }
            this.$apollo.queries.posts.skip = false;
            this.$apollo.queries.posts.refetch();
        },
        prevPage(){
            if(this.page > 0){
                this.page--;
                this.getPosts();
            }
        },
        nextPage(){
            if(this.page < this.lastPage-1){
                this.page++;
                this.getPosts();
            }
        }
    },
    created(){
        this.getPosts();
        window.scroll(0, 0);
    }
}
</script>

<style lang="scss" scoped>

main{
    padding: 100px 0 0 0;
}

.pagination{
    display: flex;
    justify-content: center;
    font-size: 1.35rem;
    padding: 30px 0;
    div{
        padding: 15px;
    }
}
.pag-arrow{
    padding: 7px;
    border: 1px solid black;
}



.loading{
    display: flex;
    justify-content: center;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

}
.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgb(58, 58, 58);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}


</style>

