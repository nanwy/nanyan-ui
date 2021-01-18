// declare module "*.vue" {
//   import { defineComponent } from "vue";
//   const Component: ReturnType<typeof defineComponent>;
//   export default Component;
// }
declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}