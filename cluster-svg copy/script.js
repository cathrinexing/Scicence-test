// var path = d3.geoPath();
// // var projection = d3.geoAlbersUsa().scale(1280).translate([480, 300]); // use this if you have lon,lat

// var color = d3.scaleOrdinal(d3.schemeSet3);
// var us;
// d3.json("https://cdn.jsdelivr.net/npm/us-atlas@2/us/10m.json")
//   .then(function(data) {
//     us = data;
//     map.append('path').attr('id', 'step-all')
//       .attr('vector-effect', 'non-scaling-stroke')
//       .attr('d', path(topojson.feature(us, us.objects.nation)));
//     var states_filter = function(a, b) {
//       return (a !== b);
//     }
//
//
//     map.append('path').attr('id', 'step-0').attr('opacity', 0)
//       .attr('stroke-width', 0.5).attr('vector-effect', 'non-scaling-stroke')
//       .attr('d', path(topojson.mesh(us, us.objects.states, states_filter)));
//     // for `topojson.mesh` see also https://github.com/topojson/topojson-client/blob/master/README.md#mesh
//     var counties_filter = function(a, b) {
//       return (a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0));
//     };
//
//
//     map.append('path').attr('id', 'step-1')
//       .attr('stroke', '#aaa').attr('opacity', 0)
//       .attr('stroke-width', 0.5).attr('vector-effect', 'non-scaling-stroke')
//       .attr('d', path(topojson.mesh(us, us.objects.counties, counties_filter)));
//     // see also https://observablehq.com/@d3/choropleth
//
//     map.append("g").attr('id', 'step-2').attr('opacity', 0)
//       .selectAll("path")
//       .data(topojson.feature(us, us.objects.counties).features)
//       .join("path")
//       .attr("fill", function(d, i) {
//         return color(i);
//       })
//       .attr("d", path);
//
//       map.append("g").attr('id', 'step-3').attr('opacity', 0.5)
//       	.selectAll("path")
//       	.data(topojson.feature(us, us.objects.counties).features)
//       	.join("path")
//       	.attr("fill", function(d, i) {
//       		return color(i);
//       	})
//       	.attr("d", path);
//   });


var graphics = d3.select('#sticky');

graphics.append('img').attr('class', 'step-0').attr('opacity', 0)  .attr("src", "img/" + "step-0" + ".png")


graphics.append('img').attr('class', 'step-1').attr('opacity', 0)
  .attr("src", "img/" + "step-1" + ".jpg")


graphics.append('img').attr('class', 'step-2').attr('opacity', 0)
  .attr("src", "img/" + "step-2" + ".png")


graphics.append('img').attr('class', 'step-3').attr('opacity', 0)
  .attr("src", "img/" + "step-3" + ".png")


graphics.append('img').attr('class', 'step-4').attr('opacity', 0)
  .attr("src", "img/" + "step-4" + ".png")

graphics.append('img').attr('class', 'step-5').attr('opacity', 0)
  .attr("src", "img/" + "step-5" + ".png")

graphics.append('img').attr('class', 'step-6').attr('opacity', 0)
  .attr("src", "img/" + "step-6" + ".png")

  graphics.append('img').attr('class', 'step-7').attr('opacity', 0).attr("src", "img/" + "step-7" + ".png")

  graphics.append('img').attr('class', 'step-8').attr('opacity', 0).attr("src", "img/" + "step-8" + ".jpg")

    graphics.append('img').attr('class', 'step-9').attr('opacity', 0).attr("src", "img/" + "step-9" + ".png")
        graphics.append('img').attr('class', 'step-10').attr('opacity', 0).attr("src", "img/" + "step-10" + ".png")
    graphics.append('img').attr('class', 'step-11').attr('opacity', 0).attr("src", "img/" + "step-11" + ".png")

    graphics.append('img').attr('class', 'step-12').attr('opacity', 0).attr("src", "img/" + "step-12" + ".png")

    graphics.append('img').attr('class', 'step-13').attr('opacity', 0).attr("src", "img/" + "step-13" + ".png")

    graphics.append('img').attr('class', 'step-14').attr('opacity', 0).attr("src", "img/" + "step-14" + ".png")

    graphics.append('img').attr('class', 'step-15').attr('opacity', 0).attr("src", "img/" + "step-15" + ".png")

    graphics.append('img').attr('class', 'step-16').attr('opacity', 0).attr("src", "img/" + "step-16" + ".png")
    graphics.append('img').attr('class', 'step-17').attr('opacity', 0).attr("src", "img/" + "step-17" + ".png")

    graphics.append('img').attr('class', 'step-18').attr('opacity', 0).attr("src", "img/" + "step-18" + ".png")

    graphics.append('img').attr('class', 'step-19').attr('opacity', 0).attr("src", "img/" + "step-19" + ".png")
    graphics.append('img').attr('class', 'step-20').attr('opacity', 0).attr("src", "img/" + "step-20" + ".png")

    graphics.append('img').attr('class', 'step-21').attr('opacity', 0).attr("src", "img/" + "step-21" + ".jpg")

    graphics.append('img').attr('class', 'step-22').attr('opacity', 0).attr("src", "img/" + "step-22" + ".jpg")

    graphics.append('img').attr('class', 'step-23').attr('opacity', 0).attr("src", "img/" + "step-23" + ".png")

    graphics.append('img').attr('class', 'step-24').attr('opacity', 0).attr("src", "img/" + "step-24" + ".png")

    graphics.append('img').attr('class', 'step-25').attr('opacity', 0).attr("src", "img/" + "step-25" + ".png")

    graphics.append('img').attr('class', 'step-26').attr('opacity', 0).attr("src", "img/" + "step-26" + ".jpg")
    graphics.append('img').attr('class', 'step-27').attr('opacity', 0).attr("src", "img/" + "step-27" + ".png")

    graphics.append('img').attr('class', 'step-28').attr('opacity', 0).attr("src", "img/" + "step-28" + ".png")

    graphics.append('img').attr('class', 'step-29').attr('opacity', 0).attr("src", "img/" + "step-29" + ".png")
    graphics.append('img').attr('class', 'step-30').attr('opacity', 0).attr("src", "img/" + "step-30" + ".png")
 graphics.append('img').attr('class', 'step-31').attr('opacity', 0).attr("src", "img/" + "step-31" + ".png")
// scrollama basic // scrollama basic // scrollama basic
// scrollama basic // scrollama basic // scrollama basic
// scrollama basic // scrollama basic // scrollama basic

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
  if (response.direction == 'down') graphics.select('.step-' + response.index).style('opacity', 0).transition().duration(1000).ease(d3.easeLinear).style("opacity", 1);





}

function handleStepExit(response) {
  // response = { element, direction, index }
  console.log(response.index, '-------- exit', response.direction);
  // remove color from current step
  response.element.classList.remove('is-active');
  // hide corresponding map step if scrolling up
  if (response.direction == 'up')
    graphics.select('.step-' + (response.index)).style('opacity', 1).transition().duration(1000).ease(d3.easeLinear).style('opacity', 0);


  //   if (response.index === 0) {
  //  graphics.select('.baseimg').style('opacity', 1);
  //   graphics.select('.step-0').style('opacity', 0).transition().duration(500).ease(d3.easeLinear).style("opacity", 1);
  // }



}

function handleStepProgress(response) {
  // response = { element, progress, index }
  console.log(response.index, '-------- progress -', response.progress);


}
function handleContainerEnter(response) {
	// response = { direction }

	// sticky the graphic
	    graphics.classed('is-fixed', true);
    graphics.classed('is-bottom', false);
}

function handleContainerExit(response) {
	// response = { direction }
console.log("i am out of sticky");

	// un-sticky the graphic, and pin to top/bottom of container
    graphics.classed('is-fixed', false);
    graphics.classed('is-bottom', response.direction === 'down');
}



function init() {
  // set random padding for different step heights (not required)
  steps.forEach(function(step) {
    var v = 100 + Math.floor(Math.random() * window.innerHeight / 4);
    // step.style.padding = v + 'px 0px';
    // step.style.height = '500px';
    if (window.innerWidth > 780) {
 step.style.height = '500px';
} else { step.style.height = '300px';
    }

    console.log(window.innerWidth);
  });

  // 1. setup the scroller with the bare-bones options
  // this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller.setup({
      step: '.scroll__text .step',
      debug: true,
      offset: 0.7,
      // progress: true,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit)
  // .onStepProgress(handleStepProgress)
  .onContainerEnter(handleContainerEnter)
  .onContainerExit(handleContainerExit);

  // setup resize event
  window.addEventListener('resize', scroller.resize);
}

// kick things off
init();
