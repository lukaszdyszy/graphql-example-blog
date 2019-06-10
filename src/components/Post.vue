<template>
  <div class="post">
    <h3>{{ title }}</h3>
    <span class="date">{{ 
      date.split('T')[0] + ' ' + date.split('T')[1].split('.')[0] 
      }}</span>
    <div class="categories">
      <div :style="{'color': category.color.css}">
        <router-link :to="'/category/' + category.name">{{ category.name }}</router-link>
      </div>
    </div>
    <img :src="thumbnail" alt="" class="thumbnail" />
    <p class="excerpt">
      {{ excerpt }}
    </p>
    <div class="read-more">
      <router-link :to="'/single/' + id">read more</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    title: String,
    date: String,
    thumbnail: String,
    excerpt: String,
    id: String,
    category: Object
  }
};
</script>

<style lang="scss" scoped>
@import url('../global.scss');

.post {
  border: 1px solid rgb(185, 185, 185);
  padding: 10px;
  box-shadow: 0px 3px 10px 1px rgba(94, 94, 94, 0.55);
}

h3 {
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 0;
  padding: 0 0 15px 0;
}

img.thumbnail {
  width: 100%;
  height: auto;
}

span.date{
  color: grey;
}

p {
  line-height: 150%;
  margin: 0;
  padding: 10px 0;
}

div.read-more{
  a {
    display: block;
    width: inherit;
    height: inherit;
    border: 1px solid;
    color: grey;
    padding: 10px;
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 2px;
    &:hover {
      color: #88d188;
    }
  }
}

</style>
