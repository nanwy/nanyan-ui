<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>一个简单的轮子</h1>
      <p class="actions">
        <a href>Github</a>
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
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import NanButton from "/@/lib/Button/Button.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Topnav,
    NanButton,
  },
  setup(props) {
    const router = useRouter();
    const routerClick = () => {
      router.push("/doc");
    };

    return {
      routerClick,
    };
  },
};
</script>


<style lang="scss" scoped>
.banner {
  padding: 400px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  opacity: 0.5;
  h1 {
    color: #000;
  }
  > .actions {
    padding: 8px 0;
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
</style>