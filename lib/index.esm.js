import { openBlock, createBlock, renderSlot, createVNode, defineComponent, computed, createCommentVNode, Fragment, toDisplayString, ref, inject, reactive, withDirectives, vShow, getCurrentInstance, onMounted, nextTick, provide, renderList, createTextVNode, watch, Teleport, Transition, withCtx, withModifiers, vModelText } from 'vue';

var script = {
  props: {
    value: Boolean,
    disabled: { type: Boolean, default: false },
  },
  setup(props, context) {
    console.log("props: ", props.disabled);
    const toggle = () => {
      if (props.disabled)
        return;
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};

const _hoisted_1 = /*#__PURE__*/createVNode("span", null, null, -1 /* HOISTED */);
const _hoisted_2 = {
  key: 0,
  class: "nan-switch-open"
};
const _hoisted_3 = {
  key: 1,
  class: "nan-switch-close"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    class: ["nan-switch", { 'nan-switch-checked': $props.value }],
    onClick: _cache[1] || (_cache[1] = (...args) => ($setup.toggle && $setup.toggle(...args))),
    disabled: $props.disabled
  }, [
    _hoisted_1,
    ($props.value)
      ? (openBlock(), createBlock("div", _hoisted_2, [
        renderSlot(_ctx.$slots, "open")
      ]))
      : (openBlock(), createBlock("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "close")
      ]))
  ], 10 /* CLASS, PROPS */, ["disabled"]))
}

script.render = render;
script.__file = "src/lib/Switch.vue";

var script$1 = defineComponent({
  name: "NanButton",
  // inheritAttrs: false, //继承属性
  props: {
    icon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    autofocus: Boolean,
    theme: {
      type: String,
      default: "primary",
      validator(val) {
        return ([
          "dark",
          "secondary",
          "light",
          "primary",
          "success",
          "danger",
          "warning",
          "info",
          "cyberpunk",
        ].indexOf(val) !== -1);
      },
    },
    disabled: Boolean,
    size: {
      type: String,
      defult: "small",
      validator: (val) => ["large", "medium", "small"].includes(val),
    },
    outline: { type: Boolean },
    round: Boolean,
    circle: Boolean,
    unclick: {
      type: Boolean,
      default: false,
    },
    cyberpunkText: String,
  },
  setup(props, context) {
    // console.log({ ...props });
    // console.log({ ...context.attrs });
    // const {size,onClick,onMouseOver} = context.attrs
    // const { ...rest } = context.attrs; //分离属性
    // props.theme;
    // 创建响应式对象
    const outlineClass = computed(() => (props.outline ? "outline" : ""));
    const btnSize = computed(() => props.size);
    const buttonDisabled = computed(() => props.disabled);
    //props V.S. attgs
    // 区别如下
    // props要先声明才能取值，attrs 不用先声明
    // props不包含事件，attrs 包含
    // props没有声明的属性，会跑到attrs里
    // props支持string以外的类型，attrs只有string类型
    return { outlineClass, btnSize, buttonDisabled };
  },
});

const _hoisted_1$1 = {
  key: 0,
  class: "nan-icon-loading"
};
const _hoisted_2$1 = /*#__PURE__*/createVNode("div", { class: "glitch" }, null, -1 /* HOISTED */);
const _hoisted_3$1 = /*#__PURE__*/createVNode("span", { class: "platform" }, "R25", -1 /* HOISTED */);
const _hoisted_4 = { key: 3 };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    class: ["nan-btn", [
      _ctx.size ? `nan-btn-${_ctx.size}` : '',
      _ctx.outlineClass ? `nan-btn-${_ctx.outlineClass}-${_ctx.theme}` : `nan-btn-${_ctx.theme}`,
      {
        'is-round': _ctx.round,
        'is-circle': _ctx.circle,
        'is-click': !_ctx.buttonDisabled && !_ctx.loading && !_ctx.unclick,
      },
    ]],
    autofocus: _ctx.autofocus,
    disabled: _ctx.buttonDisabled || _ctx.loading
  }, [
    (_ctx.loading)
      ? (openBlock(), createBlock("i", _hoisted_1$1))
      : createCommentVNode("v-if", true),
    (_ctx.icon && !_ctx.loading)
      ? (openBlock(), createBlock("i", {
        key: 1,
        class: _ctx.icon
      }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.theme === 'cyberpunk')
      ? (openBlock(), createBlock(Fragment, { key: 2 }, [
        _hoisted_2$1,
        createVNode("div", {
          class: "text",
          "data-text": _ctx.cyberpunkText
        }, toDisplayString(_ctx.cyberpunkText), 9 /* TEXT, PROPS */, ["data-text"]),
        _hoisted_3$1
      ], 64 /* STABLE_FRAGMENT */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default && _ctx.theme != 'cyberpunk')
      ? (openBlock(), createBlock("span", _hoisted_4, [
        renderSlot(_ctx.$slots, "default")
      ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, ["autofocus", "disabled"]))
}

script$1.render = render$1;
script$1.__file = "src/lib/Button/button.vue";

var script$2 = {
  name: "NANButtonGroup",
};

const _hoisted_1$2 = { class: "nan-button-group" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script$2.render = render$2;
script$2.__file = "src/lib/Button/buttonGroup.vue";

var script$3 = defineComponent({
  name: "NANTab",
  props: {
    title: {
      type: String,
    },
    tabName: {
      type: Number,
    },
    active: {
      type: Number,
    },
    name: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    lazy: Boolean,
  },
  setup(props, context) {
    // let tabName = inject("tabName");
    // tabName++;
    const index = ref(null);
    const rootTabs = inject("rootTabs");
    const loaded = ref(false);
    const tab = reactive({
      title: props.title,
      name: props.name,
      disabled: props.disabled,
    });

    // console.log(rootTabs.currentName.value, props.name || index.value);
    const name = props.tabName;
    index.value = rootTabs.tabList.length;
    const active = computed(() => {
      const active = rootTabs.currentName.value === (props.name || index.value);
      // console.log(index);
      if (active) {
        loaded.value = true;
      }
      console.log(index, active);
      return active;
    });
    const shouldBeRender = computed(() => {
      return !props.lazy || loaded.value || active.value;
    });
    console.log("shouldBeRender: ", shouldBeRender);
    rootTabs.tabList[index.value] = tab;
    // console.log("elTababList: ", { ...rootTabs.tabList }, index.value);

    // console.log(props, { ...context.attrs });
    return {
      rootTabs,
      name,
      active,
      index,
      tab,
      shouldBeRender,
    };
  },
});

const _hoisted_1$3 = { key: 0 };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.shouldBeRender)
    ? withDirectives((openBlock(), createBlock("div", _hoisted_1$3, [
      renderSlot(_ctx.$slots, "default")
    ], 512 /* NEED_PATCH */)), [
      [vShow, _ctx.active]
    ])
    : createCommentVNode("v-if", true)
}

script$3.render = render$3;
script$3.__file = "src/lib/tabs/tab.vue";

// console.log('Tab: ', script$3);
var script$4 = {
  name: "NANTabs",
  props: {
    // disabled: Boolean,
    modelValue: String,
  },
  setup(props, context) {
    const instance = getCurrentInstance();
    // console.log("instance: ", instance);
    // provide("tabName", 1);
    const currentName = ref(props.modelValue || props.activeName || 0);
    // console.log("currentName: ", currentName);
    const tabList = reactive([]);
    let tabElList = reactive([]);
    onMounted(async () => {
      await nextTick();
      tabElList.forEach((el, index) => {
        // console.log("el: ", el.getBoundingClientRect());
        const style = window.getComputedStyle(el);
        tabList[index].width =
          parseFloat(style.width) -
          (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight));
        tabList[index].offsetLeft =
          parseFloat(style.paddingLeft) + parseFloat(el.offsetLeft);
        // console.log("style: ", style);
      });
      console.log("tabElList: ", tabElList);
    });
    const style = computed(() => {
      console.log("tabList[currentName]", tabList[0]);
      return [
        `width: ${tabList[currentName.value]?.width}px `,
        `transform:translateX(${tabList[currentName.value]?.offsetLeft}px)`,
      ];
    });
    console.log("style: ", style);
    provide("rootTabs", {
      props,
      tabList,
      currentName,
    });
    // console.log(".....", { ...context.slots.default() });
    const defaults = context.slots.default();
    // console.log("defaults: ", defaults);
    // console.log(defaults[0].type === Tab);
    let active = ref(0);
    const tabClick = (item, index) => {
      console.log(index);
      if (item.disabled)
        return;
      currentName.value = index;
    };
    console.log("asfasf", tabList);
    defaults.forEach((type) => {
      if (type.type !== script$3);
    });
    const titles = defaults.map((i) => i.props?.title);
    // console.log("titles: ", titles);
    return {
      defaults,
      titles,
      tabClick,
      currentName,
      tabList,
      tabElList,
      style,
    };
  },
};

const _hoisted_1$4 = { class: "nan-tabs" };
const _hoisted_2$2 = /*#__PURE__*/createTextVNode(" Tabs组件 ");
const _hoisted_3$2 = { class: "nan-tabs-nav" };
const _hoisted_4$1 = { class: "nan-tabs-content" };

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$4, [
    _hoisted_2$2,
    createVNode("div", _hoisted_3$2, [
      createVNode("div", {
        class: "nan-tabs-bar",
        style: $setup.style
      }, null, 4 /* STYLE */),
      (openBlock(true), createBlock(Fragment, null, renderList($setup.tabList, (item, index) => {
        return (openBlock(), createBlock("div", {
          class: ["nan-tabs-nav-item", {
            'is-active': $setup.currentName === index,
            'is-disabled': item.disabled,
          }],
          id: `nan-tabs-${index}`,
          onClick: $event => ($setup.tabClick(item, index)),
          key: index,
          ref:
            (el) => {
              if (el) $setup.tabElList[index] = el;
            }

        }, toDisplayString(item.title), 11 /* TEXT, CLASS, PROPS */, ["id", "onClick"]))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    createVNode("div", _hoisted_4$1, [
      createCommentVNode(" <component\r\n        class=\"nan-tabs-content-item\"\r\n        v-for=\"(c, index) in defaults\"\r\n        :key=\"index\"\r\n        :tabName=\"index\"\r\n        :is=\"c\"\r\n      /> "),
      renderSlot(_ctx.$slots, "default")
    ])
  ]))
}

script$4.render = render$4;
script$4.__file = "src/lib/tabs/tabs.vue";

var script$5 = defineComponent({
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
    NanButton: script$1,
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
    watch(() => props.modelValue, (val) => {
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
      }
      else {
        // this.$el.removeEventListener('scroll', this.updatePopper
        if (visible.value) {
          doClose();
        }
      }
    });
    const afterEnter = () => { };
    const beforeLeave = () => { };
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

const _hoisted_1$5 = { class: "nan-dialog-header" };
const _hoisted_2$3 = { class: "nan-dialog-title" };
const _hoisted_3$3 = /*#__PURE__*/createVNode("i", { class: "nan-icon-close" }, null, -1 /* HOISTED */);
const _hoisted_4$2 = { class: "nan-dialog-body" };
const _hoisted_5 = {
  key: 0,
  class: "nan-dialog-footer"
};

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Teleport, { to: "body" }, [
    createVNode(Transition, {
      name: "dialog-fade",
      onAfterEnter: _ctx.afterEnter,
      onAfterLeave: _ctx.afterLeave,
      onBeforeLeave: _ctx.beforeLeave
    }, {
      default: withCtx(() => [
        (_ctx.visible)
          ? (openBlock(), createBlock("div", {
            key: 0,
            class: "nan-dialog-overlay",
            onClick: _cache[2] || (_cache[2] = withModifiers((...args) => (_ctx.onClickOverlay && _ctx.onClickOverlay(...args)), ["self"]))
          }, [
            createVNode("div", {
              class: "nan-dialog",
              style: [`margin-top:${_ctx.top}vh`, `width:${_ctx.width}%`]
            }, [
              createVNode("div", _hoisted_1$5, [
                createVNode("span", _hoisted_2$3, toDisplayString(_ctx.title), 1 /* TEXT */),
                (_ctx.closeBtn)
                  ? (openBlock(), createBlock("button", {
                    key: 0,
                    class: "nan-dialog-close",
                    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.closeClick && _ctx.closeClick(...args)))
                  }, [
                    _hoisted_3$3
                  ]))
                  : createCommentVNode("v-if", true)
              ]),
              createVNode("div", _hoisted_4$2, [
                renderSlot(_ctx.$slots, "default")
              ]),
              (_ctx.$slots.footer)
                ? (openBlock(), createBlock("div", _hoisted_5, [
                  renderSlot(_ctx.$slots, "footer")
                ]))
                : createCommentVNode("v-if", true)
            ], 4 /* STYLE */)
          ]))
          : createCommentVNode("v-if", true)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
  ]))
}

script$5.render = render$5;
script$5.__file = "src/lib/dialog/dialog.vue";

var script$6 = {
  name: "nan-input",
  props: {
    status: {
      type: String,
      default: "primary",
    },
    sufficon: {
      type: String,
      default: "",
    },
    preicon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    clearable: Boolean,
  },
  setup(props) {
    console.log("加载了 Input 组件");
    const modelValue = ref("");
    const inputRef = ref(null);
    console.log("inputRef: ", inputRef);
    const classes = computed(() => [
      "nan-input",
      `nan-input-status-${props.status}`,
      {
        "nan-prefix": props.preicon,
      },
    ]);
    // console.log(props.clearable);
    const showClear = computed(() => {
      return props.clearable && modelValue.value;
    });
    console.log(showClear);
    const methods = {
      focus: () => {
        inputRef.value.focus();
      },
      clear: () => {
        modelValue.value = "";
      },
    };
    return {
      methods,
      classes,
      modelValue,
      inputRef,
      showClear,
    };
  },
};

const _hoisted_1$6 = {
  key: 0,
  class: "nan-input-prefix"
};
const _hoisted_2$4 = { class: "nan-input-prefix-inner" };
const _hoisted_3$4 = { class: "nan-input-suffix" };
const _hoisted_4$3 = { class: "nan-input-suffix-inner" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", { class: $setup.classes }, [
    ($props.preicon)
      ? (openBlock(), createBlock("span", _hoisted_1$6, [
        createVNode("span", _hoisted_2$4, [
          ($props.preicon && !$props.loading)
            ? (openBlock(), createBlock("i", {
              key: 0,
              class: ["nan-input-icon", $props.preicon]
            }, null, 2 /* CLASS */))
            : createCommentVNode("v-if", true)
        ])
      ]))
      : createCommentVNode("v-if", true),
    withDirectives(createVNode("input", {
      type: "text",
      class: "nan-input-inner",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($setup.modelValue = $event)),
      ref: "inputRef"
    }, null, 512 /* NEED_PATCH */), [
      [vModelText, $setup.modelValue]
    ]),
    createVNode("span", _hoisted_3$4, [
      createVNode("span", _hoisted_4$3, [
        ($props.sufficon)
          ? (openBlock(), createBlock("i", {
            key: 0,
            class: ["nan-input-icon", $props.sufficon]
          }, null, 2 /* CLASS */))
          : createCommentVNode("v-if", true),
        ($setup.showClear)
          ? (openBlock(), createBlock("i", {
            key: 1,
            class: "nan-input-icon nan-icon-circle-close nan-input-clear",
            onMousedown: _cache[2] || (_cache[2] = withModifiers(() => { }, ["prevent"])),
            onClick: _cache[3] || (_cache[3] = (...args) => ($setup.methods.clear && $setup.methods.clear(...args)))
          }, null, 32 /* HYDRATE_EVENTS */))
          : createCommentVNode("v-if", true)
      ])
    ]),
    createCommentVNode(" <nan-button @click=\"methods.clear\" size=\"small\">清空</nan-button>\r\n    <nan-button @click=\"methods.focus\" size=\"small\">选中</nan-button> ")
  ], 2 /* CLASS */))
}

script$6.render = render$6;
script$6.__file = "src/lib/Input/input.vue";

// export { } from '../style/scss/index.scss'
const components = [
  script$1,
  script$2,
  script$5,
  script,
  script$4,
  script$3,
  script$6
];
// console.log(components[0].name);
const install = (app) => {
  // const option = Object.assign(defaultInstallOpt, opt)
  // locale(option.locale)
  // app.config.globalProperties.$ELEMENT = option
  // setConfig(option)
  components.forEach(component => {
    app.component(component.name, component);
  });
};
const version = '0.0.5';
var index = {
  version,
  install,
};

export default index;
export { script$1 as NANButton, script$2 as NANButtonGroup, script$5 as NANDialog, script as NANSwitch, script$3 as NANTab, script$4 as NANTabs, script$6 as NanInput, install, version };
