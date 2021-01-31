<template>
  <label
    class="nan-radio"
    :class="[`nan-radio-${theme}`, { 'is-checked': model === label }]"
    :aria-checked="model === label"
  >
    <span
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
    />
    <slot>
      {{ model === label }}
    </slot>
  </label>
</template>

<script>
import { computed, ref, nextTick } from "vue";
export default {
  name: "NanRadio",
  props: {
    label: {
      type: [Boolean, String, Number],
      default: "",
    },
    theme: { type: String, default: "primary" },
    modelValue: [Boolean, String, Number],
  },
  setup(props, ctx) {
    const radioRef = ref(null);
    console.log("radioRef: ", props);
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        ctx.emit("update:modelValue", val);
      },
    });
    function handleChange() {
      nextTick(() => {
        ctx.emit("change", model.value);
        // ctx.emit("update:modelValue", props.modelValue);
      });
    }
    return {
      model,
      handleChange,
      radioRef,
    };
  },
};
</script>