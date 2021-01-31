<template>
  <div class="layout" :class="{ 'show-menu': !asideVisible }">
    <Topnav class="nav" meunVisible />
    <div class="content">
      <aside class="aside-menu" :class="{ 'hide-menu': !asideVisible }">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍 </router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装 </router-link>
          </li>
          <li>
            <router-link to="/doc/start">开始 </router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/radio">Radio 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    // console.log("asideVisible: ", asideVisible.value);
    const onClick = () => {
      console.log("被点击");
    };
    return { asideVisible, onClick };
  },
};
</script>

<style lang="scss" scoped>
.router-link-active {
  color: #fcee0a;
}
.layout {
  // display: flex;

  padding: 0;
  // flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  // margin: 0 auto;
  width: 100%;
  height: 100%;
  // width: 1140px;
  // background: #f7f8fa;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    // padding: 16px;
    padding: 48px 30px 0;
  }
}
aside {
  background: #fff;
  height: 100%;
  width: 240px;
  // margin-top: 10px;
  padding: 54px 10px 0;
  border-radius: 8px;
  transition: all 0.5s;
  z-index: 1;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
main {
  overflow: auto;
}
</style> 