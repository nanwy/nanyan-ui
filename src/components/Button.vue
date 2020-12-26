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
        <!-- <i class="nan-icon-download"></i>-->
      </NanButton>
      <NanButton
        @click="onClick"
        :outline="true"
        theme="danger"
        size="small"
        disabled
        >你好</NanButton
      >
      <NanButton @click="onClick" theme="warning" unclick size="medium" loading
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
        <nan-button icon="nan-icon-arrow-left" theme="secondary" unclick
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
// import Button from '../../../Woo-UI/src/Button/Button.vue';
import NanButtonGroup from "/@/lib/ButtonGroup.vue";
import NanButton from "/@/lib/Button.vue";
export default {
  components: {
    NanButton,
    NanButtonGroup,
  },
  setup() {
    const onClick = () => {
      // console.log("dianji55 ");
    };
    return { onClick };
  },
};
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