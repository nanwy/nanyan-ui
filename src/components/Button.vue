<template>
  <div class="btn-demo">
    <div>
      <NanButton
        @click="onClick"
        @focus="onClick"
        @mouseover="onClick"
        theme="warning"
        size="danger"
        circle
        icon="nan-icon-arrow-left"
      >
        <!-- <i class="nan-icon-download"></i>-->
      </NanButton>
      <NanButton
        @click="onClick"
        @focus="onClick"
        @mouseover="onClick"
        :outline="true"
        theme="danger"
        disabled
        >你好</NanButton
      >
      <NanButton
        @click="onClick"
        @focus="onClick"
        @mouseover="onClick"
        theme="warning"
        :click="false"
        loading
        >你好</NanButton
      >
      <NanButton @click="onClick" @focus="onClick" @mouseover="onClick"
        ><i class="nan-icon-download"></i>亮度你好</NanButton
      >
      <NanButton :outline="true" theme="dark" size="large" round
        >暗黑</NanButton
      >
    </div>
    <div>
      <nan-button-group>
        <nan-button icon="nan-icon-arrow-left" theme="secondary" :click="false"
          >上一页</nan-button
        >
        <nan-button theme="secondary" :click="false">
          下一页
          <i class="nan-icon-arrow-right nan-icon--right"></i>
        </nan-button>
      </nan-button-group>
      <nan-button-group>
        <nan-button theme="secondary" :click="false">1</nan-button>
        <nan-button theme="secondary" :click="false">2</nan-button>
        <nan-button theme="secondary" :click="false">3</nan-button>
        <nan-button theme="secondary" :click="false">4</nan-button>
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
      console.log("dianji ");
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