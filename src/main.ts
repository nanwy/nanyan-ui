import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import "./index.css";
import "./index.scss";

router.afterEach(() => {
  console.log("切换路由");
});
const app = createApp(App);
app.use(router);
app.mount("#app");
