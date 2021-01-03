import { createApp, h } from 'vue';
import Dialog from './dialog.vue'

export const openDialog = (options) => {
  const { title, content } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true, title, 'onUpdate:visible': (newVisible) => {
          if (!newVisible) {
            app.unmount(div)
            div.remove()
          }
        }
      }, {
        content
      })
    }
  })
  app.mount(div)
}