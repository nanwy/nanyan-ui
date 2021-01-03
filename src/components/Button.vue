<template>
  <div class="btn-demo">
    <div>
      <NanButton
        @click="onClick"
        theme="warning"
        size="medium"
        circle
        icon="nan-icon-arrow-left"
      >
      </NanButton>
      <NanButton
        @click="onClick"
        :outline="true"
        theme="danger"
        size="small"
        disabled
        >你好</NanButton
      >
      <NanButton @click="onClick" theme="danger" unclick size="medium" loading
        >你好</NanButton
      >
      <NanButton @click="onClick" size="large" unclick
        ><i class="nan-icon-download"></i>亮度你好</NanButton
      >
      <NanButton :outline="true" theme="dark" size="medium" round
        >暗黑</NanButton
      >
      <NanButton
        theme="cyberpunk"
        size="small"
        round
        cyberpunkText="开始你的表演"
      ></NanButton>
    </div>
    <div>
      <nan-button-group>
        <nan-button
          icon="nan-icon-arrow-left"
          theme="secondary"
          unclick
          @click="prevClick"
          >上一页</nan-button
        >
        <nan-button theme="secondary" unclick>
          下一页
          <i class="nan-icon-arrow-right nan-icon--right"></i>
        </nan-button>
      </nan-button-group>
      <nan-button-group>
        <nan-button theme="secondary" unclick>1</nan-button>
        <nan-button theme="secondary" unclick>2</nan-button>
        <nan-button theme="secondary" unclick>3</nan-button>
        <nan-button theme="secondary" unclick>4</nan-button>
      </nan-button-group>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

import NanButtonGroup from "/@/lib/Button/buttonGroup.vue";
import NanButton from "/@/lib/Button/button.vue";
export default defineComponent({
  components: {
    NanButton,
    NanButtonGroup,
  },
  setup() {
    const onClick = () => {
      console.log("dianji55 ");
    };
    const prevClick = () => {
      console.log("dianji");
    };
    return { onClick, prevClick };
  },
});
</script>

<style lang='scss'>
.nan-button-group {
  display: inline-flex;
  vertical-align: middle;
  & + & {
    margin-left: 10px;
  }
  & > .nan-btn {
    float: left;
    position: relative;

    & + .nan-btn {
      margin-left: 0;
    }
  }
}
</style>