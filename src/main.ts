import "./lib/scss/nan.scss";
import "./style/scss/index.scss"
import './style/scss/global-import.scss'
import "./index.scss";
// import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
// import App from './App.tsx';
import router from "./router";
import NanUI from "nanyan-ui";
// console.log('NanUI: ', App);
// import 'nanyan-ui/lib/theme/index.css'
import 'nanyan-ui/index.css'
// import "/@/assets/scss/style.scss"

// import "../src/style/scss/icon/iconfont.scss"
import V3Components from './packages/index'
console.log('V3Components: ', {...V3Components});

import 'github-markdown-css'
// router.afterEach(() => {
//   console.log("切换路由");
// });
const app = createApp(App);
console.log('app',app);

app.use(router);
app.mount("#app");
app.use(V3Components)
app.use(NanUI)
// app.component('Markdown', Markdown)
