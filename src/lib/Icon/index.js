import ElIcon from './src/Icon.vue';

/* istanbul ignore next */
ElIcon.install = function (Vue) {
  Vue.component(ElIcon.name, ElIcon);
};

export default ElIcon;
