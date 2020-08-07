<template>
  <div>
    <Switch :value="y" @input="y = $event" />
  </div>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";

export default {
  components: {
    Switch,
  },
  setup() {
    let y = ref(false);
    console.log(y);

    return { y };
  },
};
</script>

<style>
</style>