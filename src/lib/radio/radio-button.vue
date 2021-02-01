<template>
  <label
    class="nan-radio-button"
    :class="[
      `nan-radio-${theme}`,
      { 'is-checked': model === label, 'is-disabled': isDisabled },
    ]"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
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
  name: "NanRadioButton",
};
</script>