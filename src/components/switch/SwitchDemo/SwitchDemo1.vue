<template>
  <div>
    <Switch v-model:value="bool" disabled>
      <template #open> 开 </template>
      <template #close> 关 </template>
    </Switch>
  </div>
</template>

<script lang="ts">
import Switch from "../../../lib/Switch.vue";
import { ref } from "vue";

export default {
  components: {
    Switch,
  },
  setup() {
    let bool = ref(false);
    return { bool };
  },
};
</script>

<style>
</style>