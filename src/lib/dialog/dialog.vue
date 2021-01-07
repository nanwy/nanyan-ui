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
import { defineComponent, watch, ref, onMounted } from "vue";
import NanButton from "../Button/button.vue";
function close() {
  // if (this.willClose && !this.willClose()) return;
  console.log("点击了");
}

const CLOSE_EVENT = "close";
export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
    cancelOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "提示",
    },
    closed: {},
  },
  components: {
    NanButton,
  },
  emits: [CLOSE_EVENT],

  setup(props, context) {
    const visible = ref(false);
    function open() {
      visible.value = true;
    }
    const closeClick = () => {
      // context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (!props.cancelOnClickOverlay) {
        closeClick();
      }
    };
    onMounted(() => {
      console.log(props.modelValue);
      if (props.modelValue) {
        visible.value = true;
      }
    });
    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          console.log(val);
          //   closed.value = false
          //   rendered.value = true // enables lazy rendering
          open();
          //   ctx.emit(OPEN_EVENT)
          //   zIndex.value = props.zIndex ? zIndex.value++ : PopupManager.nextZIndex()
          //   // this.$el.addEventListener('scroll', this.updatePopper)
          //   nextTick(() => {
          //     if (targetRef.value) {
          //       targetRef.value.scrollTop = 0
          //     }
          //   })
          // } else {
          // this.$el.removeEventListener('scroll', this.updatePopper
          if (visible.value) {
            close();
          }
        }
      }
    );

    return {
      closeClick,
      onClickOverlay,
      visible,
    };
  },
});
</script>

<style>
</style>