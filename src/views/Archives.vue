<template>
    <div class="archives">
        <TopBar :mode="'static'"></TopBar>
        <section class="arch">
        </section>
    </div>
</template>

<script>
import gql from "graphql-tag";
import TopBar from '../components/TopBar.vue';
import { log } from 'util';

export default {
    name: "Archives",
    components: {
        TopBar
    },
    data(){
        return {
            posts: Array(),
            all: "1",
        }
    },
    apollo: {
        posts: {
            query: gql`{
                posts{
                    title
                }
            }`,
            skip() {
                return this.skipQuery
            }
        }
    }
}
</script>

<style lang="scss" scoped>

section.arch{
    padding: 100px 10px 50px 10px;
    min-height: 100vh;
}

.tools{
    background-color: rgb(134, 134, 134);
    border-radius: 10px;
    border: 1px solid black;
    padding: 10px;
}

</style>

