<template>
  <button
    class="nan-btn"
    :class="[
      size ? `nan-btn-${size}` : '',
      outlineClass ? `nan-btn-${outlineClass}-${theme}` : `nan-btn-${theme}`,
      {
        'is-round': round,
        'is-circle': circle,
        'is-click': !buttonDisabled && !loading && !unclick,
      },
    ]"
    :autofocus="autofocus"
    :disabled="buttonDisabled || loading"
  >
    <i class="nan-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <template v-if="theme === 'cyberpunk'">
      <div class="glitch"></div>
      <div class="text" :data-text="cyberpunkText">{{ cyberpunkText }}</div>
      <span class="platform">R25</span>
    </template>
    <span v-if="$slots.default && theme != 'cyberpunk'">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

type IButtonType = PropType<
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "cyberpunk"
  | "light"
  | "secondary"
  | "dark"
>;
export default defineComponent({
  name: "NanButton",
  // inheritAttrs: false, //继承属性
  props: {
    icon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    autofocus: Boolean,
    theme: {
      type: String as IButtonType,
      default: "primary",
      validator(val: string) {
        return (
          [
            "dark",
            "secondary",
            "light",
            "primary",
            "success",
            "danger",
            "warning",
            "cyberpunk",
          ].indexOf(val) !== -1
        );
      },
    },
    disabled: Boolean,
    size: {
      type: String,
      defult: "small",
      validator: (val: string) => ["large", "medium", "small"].includes(val),
    },
    outline: { type: Boolean },
    round: Boolean,
    circle: Boolean,
    unclick: {
      type: Boolean,
      default: false,
    },
    cyberpunkText: String,
  },
  setup(props: any, context) {
    // console.log({ ...props });
    // console.log({ ...context.attrs });
    // const {size,onClick,onMouseOver} = context.attrs
    // const { ...rest } = context.attrs; //分离属性
    // props.theme;
    // 创建响应式对象
    const outlineClass = computed(() => (props.outline ? "outline" : ""));
    const btnSize = computed(() => props.size);
    const buttonDisabled = computed(() => props.disabled);

    //props V.S. attgs
    // 区别如下
    // props要先声明才能取值，attrs 不用先声明
    // props不包含事件，attrs 包含
    // props没有声明的属性，会跑到attrs里
    // props支持string以外的类型，attrs只有string类型
    return { outlineClass, btnSize, buttonDisabled };
  },
});
</script>

<style lang='scss'>
// @import "../../assets/scss/button.scss";
</style>