// import './style/scss/global-import.scss'
import "./lib/scss/nan.scss";
import "./style/scss/index.scss"
import "./index.scss";
// import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
// import App from './App.tsx';
import router from "./router";
// import NanUI from "nanyan-ui";
import NanUI from 'nanyan-uizhu'
console.log('NanUI: ', NanUI);
// import 'nanyan-ui/dist/lib/index.css'
// import 'nanyan-uizhu/index.css'
// import "/@/assets/scss/style.scss"

// import "../src/style/scss/icon/iconfont.scss"
import V3Components from './lib/index'
// console.log('V3Components: ', { ...V3Components });

import 'github-markdown-css'
// router.afterEach(() => {
//   console.log("切换路由");
// });
const app = createApp(App);
console.log('app', app);

app.use(router);
app.mount("#app");
app.use(V3Components)
// app.use(NanUI)
// app.component('Markdown', Markdown)
