import { App } from 'vue';
import Input from '../lib/Input'
console.log('Input: ', Input);
const plugins = [
  Input,
  // Button,
]

function install(app: App) {
  plugins.forEach(app.use)
}

export default {
  install,
}

export {
  Input,
  // Button,

  install,
}