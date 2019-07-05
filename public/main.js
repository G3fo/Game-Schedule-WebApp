var mapa = document.getElementById("mapa");

Vue.component("mapa", {
  props: ["url"],
  template: `<h3>Select match to show map</h3>
  <iframe :src="url" frameborder=" 0"></iframe> `
})

Vue.component("boton", {
  props: ["team1", "team2", "date", "month", "location", "time", "url", "id"],
  methods: {
    showLandscapeMap(url) {
      //$("#mapa").attr("src", url);
      // mapa.innerHTML = "<iframe src='" + url + "' allowfullscreen></iframe>";

      app.urlSeleccionada = url;
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
  template: `<div class="collapse" :id="'match'+month+id">
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
    matches: matches,
    urlSeleccionada: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246110987!2d-87.6312390845582!3d41.90029237922041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1552913537479"
  },
  methods: {

  }

});