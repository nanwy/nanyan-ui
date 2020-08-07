<template>
  <button :class="{checked}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return { checked, toggle };
  },
};
</script>

<style lang="scss" scoped>
$height: 22px;
$height2: $height - 4px;
button {
  height: $height;
  width: $height * 2;
  border: none;
  background: #eee;
  border-radius: $height/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $height2;
  width: $height2;
  background: white;
  border-radius: $height2/2;
  transition: all 0.2s;
}
button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$height2} - 2px);
}
</style>