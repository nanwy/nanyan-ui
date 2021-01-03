<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="nan-dialog-overlay" @click="onClickOverlay"></div>
      <div class="nan-dialog-wrapper">
        <div class="nan-dialog">
          <div class="nan-dialog-header">
            <span class="nan-dialog-title">
              {{ title }}
            </span>
            <button class="nan-dialog-close" @click="closeClick">
              <i class="nan-icon-close"></i>
            </button>
          </div>
          <div class="nan-dialog-body">
            <slot></slot>
          </div>
          <div v-if="$slots.footer" class="nan-dialog-footer">
            <slot name="footer"></slot>
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
      default: false,
    },
    cancelOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "提示",
    },
  },
  components: {
    NanButton,
  },
  setup(props, context) {
    const closeClick = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (!props.cancelOnClickOverlay) {
        closeClick();
      }
    };
    return {
      closeClick,
      onClickOverlay,
    };
  },
});
</script>

<style>
</style>