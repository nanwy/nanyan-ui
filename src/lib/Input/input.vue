<template>
  <div :class="classes">
    <div v-if="$slots.prepend" class="nan-input-group__prepend">
      <slot name="header"></slot>
    </div>
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
      class="nan-input-inner"
      v-model="modelValue"
      ref="inputRef"
      :type="showPassword ? (passwordClick ? 'text' : 'password') : type"
      :disabled="disabled"
      :placeholder="placeholder"
      autocomplete="off"
      :maxlength="maxlength"
      @focus="handleFocus"
    />
    <span class="nan-input-suffix">
      <span class="nan-input-suffix-inner">
        <i class="nan-input-icon" :class="sufficon" v-if="sufficon"></i>
        <!-- <template> -->
        <i
          v-if="showClear"
          class="nan-input-icon nan-icon-circle-close nan-input-clear"
          @click="methods.clear"
        ></i>
        <!-- </template> -->
        <i
          v-if="passwordVisible"
          class="nan-input-icon nan-icon-view nan-input-clear"
          @mousedown.prevent
          @click="methods.showPwdClick"
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
    type: {
      type: String,
    },
    preicon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    placeholder: {
      type: String,
      default: "",
    },
    maxlength: Number,
    showPassword: Boolean,
  },
  setup(props) {
    // console.log("加载了 Input 组件");
    const modelValue = ref("");
    const inputRef = ref(null as null | HTMLInputElement);
    console.log("inputRef: ", inputRef);
    const classes = computed(() => [
      "nan-input",
      `nan-input-status-${props.status}`,
      {
        "nan-prefix": props.preicon,
        "is-disabled": props.disabled,
      },
    ]);
    // console.log(props.clearable);
    const showClear = computed(() => {
      return props.clearable && !!modelValue.value;
    });
    const passwordVisible = computed(() => {
      return props.showPassword && !!modelValue.value;
    });
    // console.log(showClear);
    const passwordClick = ref(false);
    const focus = () => {
      // console.log("触发");
      inputRef.value!.focus();
    };
    const blur = () => {
      // console.log("触发");
      inputRef.value!.blur();
    };
    const methods = {
      clear: () => {
        modelValue.value = "";
      },
      showPwdClick: () => {
        passwordClick.value = !passwordClick.value;
        blur();
      },
    };
    const handleFocus = () => {
      focus();
    };
    return {
      methods,
      classes,
      modelValue,
      inputRef,
      showClear,
      passwordVisible,
      passwordClick,
      handleFocus,
    };
  },
};
</script>
