// import type { App } from 'vue'
import NANSwitch from './Switch.vue'
import NANButton from './Button/button.vue'
import NANButtonGroup from './Button/buttonGroup.vue'
import NANTabs from './tabs/tabs.vue'
import NANDialog from './dialog/dialog.vue'
import NANTab from './tabs/tab.vue'
// export { } from '../style/scss/index.scss'
const components = [
  NANButton,
  NANButtonGroup,
  NANDialog,
  NANSwitch,
  NANTab,
  NANTabs
]
console.log(components[0].name);
// const install = (app: App): void => {
//   // const option = Object.assign(defaultInstallOpt, opt)
//   // locale(option.locale)
//   // app.config.globalProperties.$ELEMENT = option
//   // setConfig(option)

//   components.forEach(component => {
//     app.component(component.name, component)
//   })
// }
