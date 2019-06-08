<template>
    <div class="single" v-if="posts.length > 0">
        <vue-scroll-progress-bar height="3px" />
        <header>
            <TopBar :mode="'static'"></TopBar>
        </header>
        <div class="container">
            <main>
                <div class="title-bar">
                    <div class="title"><h2>{{ posts[0].title }}</h2></div>
                    <div class="date">
                        {{ dateTime }}
                    </div>
                </div>
                <div class="categories">
                    <div :class="posts[0].category.name">{{ posts[0].category.name }}</div>
                </div>
                <img :src="posts[0].thumbnail.url" alt="" class="thumb">
                <div class="single-content" v-html="posts[0].content.html"></div>
            </main>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
import TopBar from "../components/TopBar.vue";
import Vue from 'vue'
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'

Vue.component("vue-scroll-progress-bar", VueScrollProgressBar)

export default {
    name: 'Single',
    components: {
        TopBar,
        VueScrollProgressBar
    },
    data(){
        return {
            posts: Array()
        }
    },
    apollo: {
        posts: {
            query: gql`query($id: ID!){
                posts(where: {id: $id}){
                    title,
                    createdAt,
                    thumbnail{
                        url
                    },
                    content{
                        html
                    },
                    category{
                        name
                    }
                }
            }`,
            variables: {
                id: ""
            },
            skip() {
                return this.skipQuery
            }
        }
    },
    methods: {
        initialize(){
            this.$apollo.queries.posts.options.variables = {
                id: this.$route.params.id
            }
            this.$apollo.queries.posts.skip = false;
        }
    },
    created(){
        this.initialize();
        this.$parent.topbarMode = 'static';
    },
    computed: {
        dateTime(){
            if(this.posts.length > 0){
                let date = this.posts[0].createdAt.split('T')[0];
                let time = this.posts[0].createdAt.split('T')[1].split('.')[0];
                return date + ' ' + time;
            } else {
                return '';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../global.scss';

img.thumb{
    width: 100%;
    height: auto;
}

h2{
    padding: 0;
    font-size: 2.25rem;
}

.date{
    color: $secondary-color;
    font-size: 1.1rem;
}

img{
    max-width: 100% !important;
    height: auto;
}

.categories {
    padding: 15px 0 25px 0;
    font-size: 1.2rem;
    display: flex;
    div{
        border: 1px solid;
        border-radius: 7px;
        padding: 3px;
    }
}

@media (min-width: $desktop-width) {
    .title-bar{
        display: flex;
    }
    .title{
        flex: 4;
    }
    .date{
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
}

</style>
