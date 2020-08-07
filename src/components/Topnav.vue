<template>
  <div class="topnav">
    <span class="toggleAside" @click="toggleSilde"></span>
    <div class="logo"></div>
    <div class="meun">MEUN</div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    console.log("asideVisible: ", asideVisible.value);
    const toggleSilde = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleSilde };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  background: rgb(0, 0, 0);
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    width: 50px;
    height: 50px;
    background-image: url("../assets/img.jpg");
    background-size: cover;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 6px;
    // background: red;
    position: absolute;
    left: 16px;
    top: 16px;
    transform: translateY(-50%);
    display: none;
  }
  span {
    background-color: #fff;
  }
  span::after {
    content: "";
    width: 24px;
    // display: block;
    height: 6px;
    background: #fff;
    position: absolute;
    left: 0px;
    top: 12px;
    transform: translateY(-50%);
    // display: none;
  }
  span::before {
    content: "";
    // display: block;
    width: 24px;
    height: 6px;
    background: #fff;
    position: absolute;
    left: 0px;
    top: 20px;
    transform: translateY(-50%);
    // display: none;
  }
  @media (max-width: 500px) {
    > .meun {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>