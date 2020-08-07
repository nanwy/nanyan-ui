<template>
  <div>
    <Switch v-model:value="bool" />
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
    let bool = ref(false);
    console.log(bool);

    return { bool };
  },
};
</script>

<style>
</style>