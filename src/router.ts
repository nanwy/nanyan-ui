import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/SwitchDemo.vue";
import Button from "./components/Button.vue";
import Dialog from "./components/Dialog.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
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
        component: DocDemo
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