import { computed, defineComponent, ref } from "vue";

export default {
  name: "nan-input",
  props: {
    status: {
      type: String,
      default: "primary",
    },
  },
  setup(props) {
    console.log("加载了 Input 组件");
    const modelValue = ref("");
    const inputRef = ref(null as null | HTMLInputElement);
    const classes = computed(() => [
      "nan-input",
      `nan-input-status-${props.status}`,
    ]);
    return () => {
      return (
        <div class={classes.value}>
        <input class="pl-input-inner" type="text" v-model={modelValue.value} ref={inputRef}/>
        {/* <button onClick={methods.clear}>clear</button> */}
        {/* <button onClick={() => methods.focus(true)}>focus</button> */}
    </div>
      );
    }
  }
  // render() {
  //   return (
  //     <div>
  //         <input class="pl-input-inner" type="text"/>
  //         {/* <button onClick={methods.clear}>clear</button> */}
  //         {/* <button onClick={() => methods.focus(true)}>focus</button> */}
  //     </div>
  // )
  // },
}
