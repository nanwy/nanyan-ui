<template>
  <label
    class="nan-radio"
    :class="[
      `nan-radio-${theme}`,
      {
        'is-checked': model === label,
        'is-disabled': isDisabled,
        'nan-radio-border': button || border,
        'nan-radio-active': button && model === label,
      },
    ]"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
  >
    <span
      v-if="!button"
      class="nan-radio-checked"
      :class="{
        'is-checked': model === label,
      }"
    >
    </span>
    <input
      class="nan-radio-input"
      v-model="model"
      ref="radioRef"
      :value="label"
      type="radio"
      @change="handleChange"
      :disabled="isDisabled"
    />
    <span class="nan-radio-label">
      <slot>
        {{ model === label }}
      </slot>
    </span>
  </label>
</template>

<script>
import { computed, ref, nextTick, getCurrentInstance } from "vue";
export default {
  name: "NanRadio",
  props: {
    label: {
      type: [Boolean, String, Number],
      default: "",
    },
    theme: { type: String, default: "primary" },
    modelValue: [Boolean, String, Number],
    disabled: Boolean,
  },
  setup(props, ctx) {
    const radioRef = ref(null);
    // console.log("radioRef: ", props);
    const model = computed({
      get() {
        return isGroup ? groupRef.proxy.modelValue : props.modelValue;
      },
      set(val) {
        // ctx.emit("update:modelValue", val);
        changeHandler(val);
      },
    });
    function handleChange() {
      nextTick(() => {
        ctx.emit("change", model.value);
        // ctx.emit("update:modelValue", props.modelValue);
      });
    }

    const changeHandler = (value) => {
      // console.log('valu',value);
      ctx.emit("update:modelValue", value);
      isGroup && groupRef.emit("update:modelValue", value);
    };
    const isDisabled = computed(() => {
      return props.disabled;
    });
    const { isGroup, groupRef } = checkGroup();
    const button = groupRef.proxy?.button;
    const border = groupRef.proxy?.border;
    console.log("button: ", button);
    return {
      model,
      handleChange,
      radioRef,
      isDisabled,
      button,
      border,
    };
  },
};

const checkGroup = () => {
  const { parent } = getCurrentInstance();
  console.log("parent: ", parent);
  const isGroup = parent.type.name === "NanRadioGroup";
  const groupRef = parent;
  return { isGroup, groupRef };
};
</script>