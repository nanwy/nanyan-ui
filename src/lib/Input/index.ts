import { App } from 'vue';
import Input from "./input"
// console.log('Input: ', Input);
export default {
  ...Input,
  install(app: App) {
    app.component(Input.name, Input)
  },
}  