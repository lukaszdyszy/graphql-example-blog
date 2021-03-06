<template>
    <div class="single" v-if="posts.length > 0">
        <vue-scroll-progress-bar height="3px" :backgroundColor="progressBarColor"/>
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
                    <div :style="{'color': posts[0].category.color.css}">
                        <router-link :to="'/category/' + posts[0].category.name">
                            {{ posts[0].category.name }}
                        </router-link>
                    </div>
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
import { debounce } from 'lodash';

Vue.component("vue-scroll-progress-bar", VueScrollProgressBar)

export default {
    name: 'Single',
    components: {
        TopBar,
        VueScrollProgressBar
    },
    data(){
        return {
            posts: Array(),
            progressBarColor: ''
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
                        name,
                        color{
                            css
                        }
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
            let self = this;
            this.posts = Array();
            this.$apollo.queries.posts.options.variables = {
                id: this.$route.params.id
            }
            this.$apollo.queries.posts.options.result = _.debounce(function(){
                self.normalizeAssets();
                if(self.posts[0].category.name != 'others'){
                    self.progressBarColor = self.posts[0].category.color.css;
                } else {
                    self.progressBarColor = "rgb(28, 158, 61)";
                }
            }, 100);
            this.$apollo.queries.posts.skip = false;
            
            window.scroll(0, 0);
        },
        normalizeAssets(){
            let images = document.getElementsByClassName('css-1pmpp80');
            if(images.length > 0){
                for(let i=0; i<images.length; i++){
                    images[i].removeAttribute("width");
                    images[i].style.maxWidth = "100%";
                    images[i].removeAttribute("height");
                    images[i].style.height = "auto";
                }
            }
        }
    },
    created(){
        this.initialize();
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

// .single{
//     background-color: rgb(243, 243, 243);
// }
// .container{
//     background-color: white;
// }

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

.title-bar{
    border-top: 3px double $secondary-color;
    border-bottom: 1px solid $secondary-color;
    padding: 10px 0;
    margin-top: 25px;
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

p{
    line-height: 150%;
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
