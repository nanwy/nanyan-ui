<template>
  <button :class="{checked:value}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("input", !props.value);

      console.log("点击", !props.value);
    };
    return { toggle };
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
button:focus {
  outline: none;
}
</style>