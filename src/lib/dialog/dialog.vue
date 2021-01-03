<template>
  <template v-if="visible">
    <teleport to="body" :disabled="!appendToBody">
      <div class="nan-dialog-overlay"></div>
      <div class="nan-dialog-wrapper">
        <div class="nan-dialog">
          <div class="nan-dialog-header">
            <span class="nan-dialog-title">标题</span>
            <button class="nan-dialog-close">
              <i class="nan-icon-close"></i>
            </button>
          </div>
          <div class="nan-dialog-body">
            <p>1</p>
            <p>2</p>
          </div>
          <div class="nan-dialog-footer">
            <nan-button>确定</nan-button>
            <nan-button theme="light">取消</nan-button>
          </div>
        </div>
      </div>
    </teleport>
  </template>
</template>


<script lang='ts'>
import { defineComponent } from "vue";
import NanButton from "../Button/button.vue";
export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    NanButton,
  },
});
</script>

<style>
</style>