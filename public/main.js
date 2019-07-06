var mapa = document.getElementById("mapa");

Vue.component("boton", {
  props: ["team1", "team2", "date", "month", "location", "time", "url", "id"],
  methods: {
    showLandscapeMap(url) {
      mapa.innerHTML = "<iframe src='" + url + "' allowfullscreen></iframe>";
    }
  },
  template: `
              <div class="content">
                <button v-on:click="showLandscapeMap(url)"
                  class="btn btn-success" type="button" data-toggle="collapse" :data-target="'#match'+month+id"
                  aria-expanded="false" :aria-controls="'#match'+month+id">
                  <div class="row">
                    <b class="text-left col">
                      {{ team1 }} vs {{ team2 }}
                    </b>
                    <b class="text-right col">{{ date }}</b>
                  </div>
                </button>
                </div>
  `
});

Vue.component("collapse", {
  props: ["location", "time", "url", "month", "id"],
  template: `
              <div class="collapse" :id="'match'+month+id">
                <div class="card card-body">
                  <div class="row">
                    <b class="text-left col">{{ location }} school</b>
                    <b class="text-right col">{{ time }}</b>
                  </div>
                  <br />
                  <iframe id="mapa" :src="url" allowfullscreen></iframe>
                </div>
              </div>
  `
});

var app = new Vue({
  el: "#app",
  data: {
    matches: matches
  },
  methods: {}
});
