var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");

// initialize the scrollama
var scroller = scrollama();


figure.append('img').attr('class', 'step-0').attr('opacity', 0).attr("src", "img/" + "step-0" + ".png")


figure.append('img').attr('class', 'step-1').attr('opacity', 0)
  .attr("src", "img/" + "step-1" + ".png")


figure.append('img').attr('class', 'step-2').attr('opacity', 0)
  .attr("src", "img/" + "step-2" + ".png")


figure.append('img').attr('class', 'step-3').attr('opacity', 0)
  .attr("src", "img/" + "step-3" + ".jpg")


figure.append('img').attr('class', 'step-4').attr('opacity', 0)
  .attr("src", "img/" + "step-4" + ".png")

figure.append('img').attr('class', 'step-5').attr('opacity', 0)
  .attr("src", "img/" + "step-5" + ".png")

figure.append('img').attr('class', 'step-6').attr('opacity', 0)
  .attr("src", "img/" + "step-6" + ".png")

figure.append('img').attr('class', 'step-7').attr('opacity', 0).attr("src", "img/" + "step-7" + ".png")

figure.append('img').attr('class', 'step-8').attr('opacity', 0).attr("src", "img/" + "step-8" + ".png")

figure.append('img').attr('class', 'step-9').attr('opacity', 0).attr("src", "img/" + "step-9" + ".gif")
figure.append('img').attr('class', 'step-10').attr('opacity', 0).attr("src", "img/" + "step-10" + ".jpg")
figure.append('img').attr('class', 'step-11').attr('opacity', 0).attr("src", "img/" + "step-11" + ".gif")

figure.append('img').attr('class', 'step-12').attr('opacity', 0).attr("src", "img/" + "step-12" + ".png")

figure.append('img').attr('class', 'step-13').attr('opacity', 0).attr("src", "img/" + "step-13" + ".png")

figure.append('img').attr('class', 'step-14').attr('opacity', 0).attr("src", "img/" + "step-14" + ".png")

figure.append('img').attr('class', 'step-15').attr('opacity', 0).attr("src", "img/" + "step-15" + ".png")

figure.append('img').attr('class', 'step-16').attr('opacity', 0).attr("src", "img/" + "step-16" + ".png")
figure.append('img').attr('class', 'step-17').attr('opacity', 0).attr("src", "img/" + "step-17" + ".png")

figure.append('img').attr('class', 'step-18').attr('opacity', 0).attr("src", "img/" + "step-18" + ".png")

figure.append('img').attr('class', 'step-19').attr('opacity', 0).attr("src", "img/" + "step-19" + ".png")
figure.append('img').attr('class', 'step-20').attr('opacity', 0).attr("src", "img/" + "step-20" + ".png")

figure.append('img').attr('class', 'step-21').attr('opacity', 0).attr("src", "img/" + "step-21" + ".jpg")

figure.append('img').attr('class', 'step-22').attr('opacity', 0).attr("src", "img/" + "step-22" + ".jpg")

figure.append('img').attr('class', 'step-23').attr('opacity', 0).attr("src", "img/" + "step-23" + ".png")

figure.append('img').attr('class', 'step-24').attr('opacity', 0).attr("src", "img/" + "step-24" + ".png")

figure.append('img').attr('class', 'step-25').attr('opacity', 0).attr("src", "img/" + "step-25" + ".png")

figure.append('img').attr('class', 'step-26').attr('opacity', 0).attr("src", "img/" + "step-26" + ".jpg")
figure.append('img').attr('class', 'step-27').attr('opacity', 0).attr("src", "img/" + "step-27" + ".png")

figure.append('img').attr('class', 'step-28').attr('opacity', 0).attr("src", "img/" + "step-28" + ".png")

figure.append('img').attr('class', 'step-29').attr('opacity', 0).attr("src", "img/" + "step-29" + ".png")
figure.append('img').attr('class', 'step-30').attr('opacity', 0).attr("src", "img/" + "step-30" + ".png")
figure.append('img').attr('class', 'step-31').attr('opacity', 0).attr("src", "img/" + "step-31" + ".png")









// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  step.style("height", stepH + "px");

  var figureHeight = window.innerHeight;
  // var figureMarginTop = (window.innerHeight - figureHeight) / 2;
  var figureMarginTop = 0;


  figure
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop + "px");

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
  console.log(response);
  console.log(response.index, '-------- enter', response.direction);
  // response = { element, direction, index }
  response.element.classList.add('is-active');

  // add color to current step only
  // step.classed("is-active", function(d, i) {
  //   return i === response.index;
  // });

  // update graphic based on step
  // figure.select("p").text(response.index + 1).attr('color',"green");

  if (response.direction == 'down') figure.select('.step-' + response.index).style('opacity', 0).transition().duration(1000).ease(d3.easeLinear).style("opacity", 1);


}

function handleStepExit(response) {
  // response = { element, direction, index }
  console.log(response.index, '-------- exit', response.direction);
  // remove color from current step
  response.element.classList.remove('is-active');
  // hide corresponding map step if scrolling up
  if (response.direction == 'up')
    figure.select('.step-' + (response.index)).style('opacity', 1).transition().duration(1000).ease(d3.easeLinear).style('opacity', 0);


  //   if (response.index === 0) {
  //  graphics.select('.baseimg').style('opacity', 1);
  //   graphics.select('.step-0').style('opacity', 0).transition().duration(500).ease(d3.easeLinear).style("opacity", 1);
  // }



}

function handleStepProgress(response) {
  // response = { element, progress, index }
  console.log(response.index, '-------- progress -', response.progress);


}




// setTimeout(function() {
//     setInterval(function() {
//         $('img').attr('src',$('img').attr('src'))
//     },1)
// }, 2000)


function setupStickyfill() {
  d3.selectAll(".sticky").each(function() {
    Stickyfill.add(this);
  });
}

function init() {
  setupStickyfill();

  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)


  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.8,
      debug: true
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit)
    .onStepProgress(handleStepProgress);

  // setup resize event
  window.addEventListener("resize", handleResize);
}

// kick things off
init();
