import "./lib/scss/nan.scss";
import "./index.scss";
import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import "/@/assets/scss/style.scss"
import "../src/style/scss/index.scss"
import "../src/style/scss/icon/iconfont.scss"


import 'github-markdown-css'
// router.afterEach(() => {
//   console.log("切换路由");
// });
const app = createApp(App);
app.use(router);
app.mount("#app");
// app.component('Markdown', Markdown)
