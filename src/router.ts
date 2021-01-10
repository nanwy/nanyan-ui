import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/switch/SwitchPage.vue";
import Button from "./components/Button.vue";
import Dialog from "./components/Dialog.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import Markdown from './components/Markdown.vue'
import { h } from "vue";
const md = (path) => h(Markdown, {
  path,
  key: path
})
// const history = createWebHashHistory();
// const router:Array<RouteLocationRaw> = [
//   history: history,
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: 'Home',
    component: Home,
  },
  {
    path: "/doc",
    name: 'Doc',
    component: Doc,
    children: [
      {
        path: '',
        redirect: '/doc/intro'
      },
      {
        path: 'intro',
        component: md('../markdown/intro.md')
      },
      {
        path: 'start',
        component: md('../markdown/install.md')
      },
      {
        path: 'install',
        component: md('../markdown/install.md')
      },
      {
        path: "switch",
        component: Switch,
      },
      {
        path: "button",
        component: Button,
      },
      {
        path: "dialog",
        component: Dialog,
      },
      {
        path: "tabs",
        component: TabsDemo,
      },
    ],
  },
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// });

export default router