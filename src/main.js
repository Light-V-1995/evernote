import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Button from "ant-design-vue/lib/button";
import "ant-design-vue/dist/antd.css";

Vue.component(Button.name, Button);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
