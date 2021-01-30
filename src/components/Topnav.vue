<template>
  <div class="topnav">
    <div class="toggleAside" v-if="meunVisible" @click="toggleSilde"></div>
    <router-link to="/" class="logo"></router-link>
    <div class="col"><div class="title">NANYAN-UI</div></div>
    <div class="meun">MEUN</div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    meunVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    // console.log("asideVisible: ", asideVisible.value);
    const toggleSilde = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleSilde };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  background: #f5f5f5;
  // padding: 0 10px;
  height: 48px;
  display: flex;
  // padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px -1px rgb(34 34 34 / 15%),
    0 4px 5px 0 rgb(34 34 34 / 12%), 0 1px 10px 0 rgb(34 34 34 / 10%);
  width: 100%;
  z-index: 10;
  // justify-content: center;
  // align-items: center;
  box-sizing: border-box;
  color: #000;
  .col {
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 100%;
    padding: 12px;
    max-width: 100%;
    .title {
      font-size: 1.25rem;
      font-weight: 500;
      // letter-spacing: 0.1rem;
    }
  }
  > .logo {
    max-width: 6em;
    // margin-right: auto;
    width: 50px;
    height: 50px;
    background-image: url("../style/img.jpg");
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
    width: 30px;
    height: 30px;
    display: block;
    background: red;
    position: fixed;
    left: 16px;
    z-index: 99;
    cursor: pointer;
    top: 16px;
    transform: translateY(-50%);
    display: none;
  }
  span {
    background-color: #f7f8fa;
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
    // > .logo {
    //   margin: 0 auto;
    // }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>