<template>
  <div :class="classes">
    <span class="nan-input-prefix" v-if="preicon">
      <span class="nan-input-prefix-inner">
        <i
          class="nan-input-icon"
          :class="preicon"
          v-if="preicon && !loading"
        ></i>
      </span>
    </span>
    <input
      type="text"
      class="nan-input-inner"
      v-model="modelValue"
      ref="inputRef"
    />
    <span class="nan-input-suffix">
      <span class="nan-input-suffix-inner">
        <i class="nan-input-icon" :class="sufficon" v-if="sufficon"></i>
        <i
          v-if="showClear"
          class="nan-input-icon nan-icon-circle-close nan-input-clear"
          @mousedown.prevent
          @click="methods.clear"
        ></i>
      </span>
    </span>
    <!-- <nan-button @click="methods.clear" size="small">清空</nan-button>
    <nan-button @click="methods.focus" size="small">选中</nan-button> -->
  </div>
</template>
<script lang='ts'>
import { ref, computed } from "vue";
export default {
  name: "nan-input",
  props: {
    status: {
      type: String,
      default: "primary",
    },
    sufficon: {
      type: String,
      default: "",
    },
    preicon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    clearable: Boolean,
  },
  setup(props) {
    console.log("加载了 Input 组件");
    const modelValue = ref("");
    const inputRef = ref(null as null | HTMLInputElement);
    console.log("inputRef: ", inputRef);
    const classes = computed(() => [
      "nan-input",
      `nan-input-status-${props.status}`,
      {
        "nan-prefix": props.preicon,
      },
    ]);
    // console.log(props.clearable);
    const showClear = computed(() => {
      return props.clearable && modelValue.value;
    });
    console.log(showClear);
    const methods = {
      focus: () => {
        inputRef.value!.focus();
      },
      clear: () => {
        modelValue.value = "";
      },
    };
    return {
      methods,
      classes,
      modelValue,
      inputRef,
      showClear,
    };
  },
};
</script>
