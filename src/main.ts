import "./lib/scss/nan.scss";
import "./index.scss";
import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import "/@/assets/scss/style.scss"
import "/@/assets/scss/index.scss"
import "/@/assets/scss/icon/iconfont.scss"
// router.afterEach(() => {
//   console.log("切换路由");
// });
const app = createApp(App);
app.use(router);
app.mount("#app");
