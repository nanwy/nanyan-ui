<template>
  <!-- <button v-bind="$attrs"> 全部属性 
      <slot />
    </button> -->
  <button class="nan-button" :class="`theem-${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  // inheritAttrs: false, //继承属性
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
  setup(props, context) {
    console.log({ ...props });
    // console.log({ ...context.attrs });
    // const {size,onClick,onMouseOver} = context.attrs
    const { ...rest } = context.attrs; //分离属性
    //props V.S. attgs
    // 区别如下
    // props要先声明才能取值，attrs 不用先声明
    // props不包含事件，attrs 包含
    // props没有声明的属性，会跑到attrs里
    // props支持string以外的类型，attrs只有string类型
    return { rest };
  },
};
</script>

<style lang='scss' scoped>
div {
  border: 1px;
}
</style>