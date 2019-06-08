<template>
    <div class="archives">
        <TopBar :mode="'static'"></TopBar>
        <main>
            <div class="lds-ring" v-if="$apollo.queries.posts.loading"><div></div><div></div><div></div><div></div></div>
            <div class="container">
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
                    id
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

</style>

