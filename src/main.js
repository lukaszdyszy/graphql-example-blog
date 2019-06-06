import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cju9uhlan02iu01ffwwpyksrp/master"
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

Vue.use(VueApollo);

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount('#app')
