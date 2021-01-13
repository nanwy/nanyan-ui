<template>
  <div class="home">
    <Topnav />
    <div class="banner">
      <h1>一个简单的轮子</h1>
      <p class="actions">
        <!-- <router-link to="/doc">开始上手</router-link> -->
        <NanButton
          theme="cyberpunk"
          size="small"
          round
          cyberpunkText="开始上手"
          @click="routerClick"
        ></NanButton>
      </p>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="nan-icon" aria-hidden="true">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用最新的 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="nan-icon" aria-hidden="true">
            <use xlink:href="#icon-typescript-def"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg class="nan-icon" aria-hidden="true">
            <use xlink:href="#icon-lightbulb_idea"></use>
          </svg>

          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import NanButton from "../lib/Button/Button.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Topnav,
    NanButton,
  },
  setup(props) {
    const router = useRouter();
    const routerClick = () => {
      router.push("/doc/intro");
    };

    return {
      routerClick,
    };
  },
};
</script>


<style lang="scss" scoped>
.home {
  // display: flex;
  height: 100%;
  background-color: #fcee0a;
}
.banner {
  padding: 200px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    rgba(63, 58, 64, 1) 0%,
    rgba(41, 36, 42, 1) 100%
  );
  color: #cdcdcd;
  // opacity: 0.5;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 25px;
    background: url("https://img.nanwayan.cn/razor-top.svg") repeat-x top;
  }
  > .actions {
    padding: 15px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
.features {
  width: 100%;
  position: relative;
  margin: 64px auto 0;
  // width: 400px;
  padding-bottom: 300px;

  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      color: #6f486b;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>