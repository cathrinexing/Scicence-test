var path = d3.geoPath();
// var projection = d3.geoAlbersUsa().scale(1280).translate([480, 300]); // use this if you have lon,lat
var map = d3.select('#usa');
var color = d3.scaleOrdinal(d3.schemeSet3);
var us;
d3.json("https://cdn.jsdelivr.net/npm/us-atlas@2/us/10m.json")
  .then(function(data) {
    us = data;
    map.append('path').attr('id', 'step-all')
      .attr('vector-effect', 'non-scaling-stroke')
      .attr('d', path(topojson.feature(us, us.objects.nation)));
    var states_filter = function(a, b) {
      return (a !== b);
    }


    map.append('path').attr('id', 'step-0').attr('opacity', 0)
      .attr('stroke-width', 0.5).attr('vector-effect', 'non-scaling-stroke')
      .attr('d', path(topojson.mesh(us, us.objects.states, states_filter)));
    // for `topojson.mesh` see also https://github.com/topojson/topojson-client/blob/master/README.md#mesh
    var counties_filter = function(a, b) {
      return (a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0));
    };


    map.append('path').attr('id', 'step-1')
      .attr('stroke', '#aaa').attr('opacity', 0)
      .attr('stroke-width', 0.5).attr('vector-effect', 'non-scaling-stroke')
      .attr('d', path(topojson.mesh(us, us.objects.counties, counties_filter)));
    // see also https://observablehq.com/@d3/choropleth

    map.append("g").attr('id', 'step-2').attr('opacity', 0)
      .selectAll("path")
      .data(topojson.feature(us, us.objects.counties).features)
      .join("path")
      .attr("fill", function(d, i) {
        return color(i);
      })
      .attr("d", path);

      // map.append("g").attr('id', 'step-3').attr('opacity', 0.5)
      // 	.selectAll("path")
      // 	.data(topojson.feature(us, us.objects.counties).features)
      // 	.join("path")
      // 	.attr("fill", function(d, i) {
      // 		return color(i);
      // 	})
      // 	.attr("d", path);
  });



// scrollama basic
var container = document.querySelector('#scroll');
var text = container.querySelector('.scroll__text');
var steps = text.querySelectorAll('.step');

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  console.log(response.index, '-------- enter', response.direction);
  // add to color to current step
  response.element.classList.add('is-active');
  // show corresponding map step if scrolling down
  if (response.direction == 'down') map.select('#step-' + response.index).attr('opacity', 1);

}

function handleStepExit(response) {
  // response = { element, direction, index }
  console.log(response.index, '-------- exit', response.direction);
  // remove color from current step
  response.element.classList.remove('is-active');
  // hide corresponding map step if scrolling up
  if (response.direction == 'up') map.select('#step-' + response.index).attr('opacity', 0);
}

function handleStepProgress(response) {
  // response = { element, progress, index }
  console.log(response.index, '-------- progress -', response.progress);
}

function init() {
  // set random padding for different step heights (not required)
  steps.forEach(function(step) {
    var v = 100 + Math.floor(Math.random() * window.innerHeight / 4);
    // step.style.padding = v + 'px 0px';
    step.style.height = '300px';
  });

  // 1. setup the scroller with the bare-bones options
  // this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller.setup({
      step: '.scroll__text .step',
      debug: true,
      offset: 0.2,
      // progress: true,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit)
  // .onStepProgress(handleStepProgress)

  // setup resize event
  window.addEventListener('resize', scroller.resize);
}

// kick things off
init();
