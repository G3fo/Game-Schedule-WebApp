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

Vue.component('mes', {
  props: ['mes'],
  template: '<h2>{{mes}}</h2>'
})

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


// Listen for orientation changes
window.addEventListener("orientationchange", function () {
  // Announce the new orientation number
  alert(window.orientation);
}, false);

// Listen for resize changes
window.addEventListener("resize", function () {
  // Get screen size (inner/outerWidth, inner/outerHeight)

}, false);

// Find matches
var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
if (mql.matches) {
  // Portrait orientation
} else {
  // Landscape orientation
}

// Add a media query change listener
mql.addListener(function (m) {
  if (m.matches) {
    // Changed to portrait
  } else {
    // Changed to landscape
  }
});



var app = new Vue({
  el: "#app",
  data() {
    return {
      matches
    };
  }
});