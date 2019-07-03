Vue.component("boton", {
  props: ['team1', 'team2', 'date', 'month', 'location', 'time', 'url', 'id'],
  template: `
              <div class="content">
                <button class="btn btn-success" type="button" data-toggle="collapse" :data-target="'#match'+month+id"
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
})

function showLandscapeMap(url, index) {
  //alert(url);
  mapa = "<iframe src='" + url + "' allowfullscreen></iframe>";
  // $(".btn-estadio-class").removeClass("unaClase");
  // $("#btn-estadio" + index).addClass("unaClase");
}


Vue.component('collapse', {
  props: ['location', 'time', 'url', 'month', 'id'],
  template: `<div class="collapse" :id="'match'+month+id">
              <div class="card card-body">
                <div class="row">
                  <b class="text-left col">{{ location }} school</b>
                  <b class="text-right col">{{ time }}</b>
                </div>
                <br />
                <iframe :src="url" allowfullscreen></iframe>
              </div>
            </div>
  `
})

Vue.component('mapa', {
  template: `<div class="sticky-top" id="mapa">
        <h3>Select match to show map</h3>
      </div>`
})



var app = new Vue({
  el: "#app",
  data() {
    return {
      matches
    };

  },
  methods: {

  },
});