
  <template>
  <teleport to="body">
    <transition
      name="dialog-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <div
        class="nan-dialog-overlay"
        v-if="visible"
        @click.self="onClickOverlay"
      >
        <div
          class="nan-dialog"
          :style="[`margin-top:${top}vh`, `width:${width}%`]"
        >
          <div class="nan-dialog-header">
            <span class="nan-dialog-title">
              {{ title }}
            </span>
            <button
              class="nan-dialog-close"
              v-if="closeBtn"
              @click="closeClick"
            >
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
    </transition>
  </teleport>
</template>


<script lang='ts'>
import { defineComponent, watch, ref, isRef, onMounted } from "vue";
// import type { Ref } from 'vue';
import NanButton from "../Button/button.vue";

const CLOSE_EVENT = "close";
export default defineComponent({
  name: "nan-dialog",
  props: {
    visible1: {
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
    closeBtn: {
      type: Boolean,
      default: true,
    },
    top: {
      type: Number,
      default: 15,
    },
    width: {
      type: Number,
      default: 30,
    },
    closed: {},
  },
  components: {
    NanButton,
  },
  emits: ["opend", "update:modelValue", "closed"],

  setup(props, context) {
    const visible = ref(false);
    function open() {
      visible.value = true;
      // console.log("visible.value: ", visible);
    }
    function doClose() {
      visible.value = false;
    }

    const closeClick = () => {
      // context.emit("update:visible", false);
      doClose();
      // console.log("visible: ", visible);
    };
    const onClickOverlay = (e) => {
      // console.log("点击了", e);
      if (!props.cancelOnClickOverlay) {
        closeClick();
      }
    };
    onMounted(() => {
      // console.log(props.modelValue, "true");
      if (props.modelValue) {
        visible.value = true;
        open();
      }
    });
    function afterLeave() {
      // console.log("触发");
      context.emit("update:modelValue", false);
      context.emit("closed");
    }
    //   function useRestoreActive (toggle: Ref<boolean>, initialFocus?: Ref<HTMLElement>) => {
    // let previousActive: HTMLElement
    // watch(() => toggle.value, val => {
    //   if (val) {
    //     previousActive = document.activeElement as HTMLElement
    //     if (isRef(initialFocus)) {
    //       initialFocus.value.focus?.()
    //     }
    //   } else {
    //     if (process.env.NODE_ENV === 'testing') {
    //       previousActive.focus.call(previousActive)
    //     } else {
    //       previousActive.focus()
    //     }
    //   }
    // })
    watch(
      () => props.modelValue,
      (val) => {
        // console.log("wacth");
        if (val) {
          // closed.value = false
          open();
          context.emit("opend");
          // rendered.value = true // enables lazy rendering
          // ctx.emit(OPEN_EVENT)
          // zIndex.value = props.zIndex ? zIndex.value++ : PopupManager.nextZIndex()
          // // this.$el.addEventListener('scroll', this.updatePopper)
          // nextTick(() => {
          //   if (targetRef.value) {
          //     targetRef.value.scrollTop = 0
          //   }
          // })
        } else {
          // this.$el.removeEventListener('scroll', this.updatePopper
          if (visible.value) {
            doClose();
          }
        }
      }
    );
    const afterEnter = () => {};
    const beforeLeave = () => {};
    return {
      closeClick,
      onClickOverlay,
      visible,
      afterLeave,
      beforeLeave,
      afterEnter,
    };
  },
});
</script>