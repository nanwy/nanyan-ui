import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/switch/SwitchPage.vue";
import Button from "./components/button/ButtonPage.vue";
import Dialog from "./components/Dialog.vue";
import Tabs from "./components/tabs/TabsPage.vue";
import intro from './markdown/intro.md'
import start from './markdown/start.md'
import install from './markdown/install.md'
import Markdown from './components/Markdown.vue'
import Input from './components/input.vue'
import Radio from './components/radio.vue'
import { h } from "vue";
const md = (path) => h(Markdown, {
  content: path,
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
        component: md(intro)
      },
      {
        path: 'start',
        component: md(start)
      },
      {
        path: 'install',
        component: md(install)
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
        component: Tabs,
      },
      {
        path: "input",
        component: Input,
      },
      {
        path: "radio",
        component: Radio
      }
    ],
  },
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// });

export default router