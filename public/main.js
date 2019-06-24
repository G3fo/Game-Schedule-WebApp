Vue.component("matches", {
  props: ["locationURL"],
  template: ``
});

Vue.component("months", {
  template: "<div></div>"
});

var app = new Vue({
  el: "#app",
  data() {
    return {
      matches
    };
  }
});
