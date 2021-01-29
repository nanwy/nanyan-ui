<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="toggleCode" v-else>查看代码</Button>
    </div>

    <div :class="'demo-code' + [codeVisible ? ' code-show ' : ' code-hidden ']">
      <Button
        class="copy"
        @click="copy"
        :id="component.__hmrId"
        data-clipboard-action="copy"
        :data-clipboard-text="component.__sourceCode"
        theme="dark"
        size="small"
        ref="copyBtn"
        :disabled="disabled"
        >复制</Button
      >
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button/Button.vue";
import "prismjs";
import "../style/css/prism-dark.css";
import ClipboardJS from "clipboard";
// 原创\nanyan-ui-3\node_modules\prismjs\themes\prism.css
import { computed, nextTick, onMounted, ref } from "vue";
const Prism = (window as any).Prism;
export default {
  components: {
    Button,
  },
  props: {
    component: Object,
  },
  setup(props) {
    // console.log("props", props);
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const copyBtn = ref(null);
    // function copyBtn(el) {
    //   console.log("el: ", el);
    //   nextTick();
    // }
    let copyHandle;
    onMounted(() => {
      copyHandle = new ClipboardJS(copyBtn.value.$el);
    });
    const disabled = ref(false);
    console.log(ClipboardJS);
    const toggleCode = () => (codeVisible.value = !codeVisible.value);
    // const el = ;
    const copy = () => {
      // console.log("dianji");

      // console.log("ClipboardJSObj: ", ClipboardJSObj);
      // ClipboardJSObj.on("success", function (e) {
      //   console.log("成功");
      //   alert("复制成功");
      //   e.clearSelection();
      // });
      copyHandle.on("success", function (val) {
        disabled.value = true;
        // console.log("成功");
        alert("复制成功");
        setTimeout(() => {
          // _this.disabled = false
          disabled.value = false;
          // 销毁实例防止多次触发
          copyHandle.destroy();
        }, 3000);
      });
      copyHandle.on("error", function () {
        // _this.$message.error('复制失败，请手动复制')
      });
    };
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
      toggleCode,
      copy,
      disabled,
      copyBtn,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #333;
.demo {
  border: 1px solid $border-color;
  border-radius: 5px;
  // margin: 16px 0 32px;
  // max-width: 600px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 20px 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px solid $border-color;
    > :first-child {
      animation: none;
    }
  }
  &-code {
    // padding: 8px 16px;
    border-top: 1px dashed $border-color;
    overflow: auto;
    position: relative;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      padding: 24px;
    }
    .copy {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
  .code-hidden {
    transition: all 0.4s cubic-bezier(0.39, 0.7, 0.18, 0.9);
    max-height: 0;
    border: none;
  }
  .code-show {
    max-height: 800px;
    transition: all 1s cubic-bezier(0.39, 0.7, 0.18, 0.9);
  }
}
</style>