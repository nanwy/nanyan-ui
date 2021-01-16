# 开始

## 下载与使用

## 引入 `nanyan-ui`

### 完整引入

```
    import 'nanyan-ui/dist/lib/nanyan.css'
    import { createApp } from 'vue'
    import App from './App.vue'
    import { NanyanUI } from 'nanyan-ui'

    createApp(App)
      .use(NanyanUI)
      .mount('#app')
```

> 以上代码便完成了 nanyan-ui 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入

> 如果你只希望引入部分组件，比如 Button ，那么需要在 main.js(main.ts) 中写入以下内容：

```
    import 'nanyan-ui/dist/lib/nanyan.css'
    import { createApp } from 'vue'
    import { Button } from 'nanyan-ui'
    import App from './App.vue'

    createApp(App).use(Button).mount('#app')
```

> 完整组件列表和引入方式

```
    import App from './App.vue'
    import { createApp } from 'vue'
    import {
        Button,
        Switch,
        Dialog,
        Tab,
        Tabs,
    } from 'nanyan-ui'

    createApp(App)
        .component('Button',Button)
        .component('Switch',Switch)
        .component('Dialog',Dialog)
        .component('Tab',Tab)
        .component('Tabs',Tabs)
```
