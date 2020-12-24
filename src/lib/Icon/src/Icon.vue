<template>
  <i :class="`nan-icon-${name}`"></i>
</template>

<script>
import Icon from "@/icon";
export default {
  name: "NanIcon",
  props: {
    name: String,
  },
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  /* vertical-align: middle; */
}
</style>