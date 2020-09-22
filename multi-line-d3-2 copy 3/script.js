(function($) {
  var width, height, hwidth, hheight, margin, columns, svg, hsvg, x, y, size, commaFormat;



  d3.csv("data.csv").then(d => chart(d))

  function chart(data) {

        // window.addEventListener('resize', resize, false);
    var keys = data.columns.slice(1);

    var parseTime = d3.timeParse("%Y%m%d"),
      formatDate = d3.timeFormat("%Y-%m-%d"),
      bisectDate = d3.bisector(d => d.date).left,
      formatValue = d3.format(",.0f");

    data.forEach(function(d) {
      d.date = parseTime(d.date);
      return d;
    })

    var svg = d3.select("#chart"),
      margin = {
        top: 15,
        right: 25,
        bottom: 25,
        left: 25
      },

      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

    $("#chart").height($("#chart").width() * 0.8);
    width = $("#chart").width();
    height = $("#chart").height();

    var w = window.innerWidth;
    console.log(w);


    console.log(width);
    console.log(height);

    var x = d3.scaleTime()
      .rangeRound([margin.left, width - margin.right])
      .domain(d3.extent(data, d => d.date))

    var y = d3.scaleLinear()
      .rangeRound([height - margin.bottom, margin.top]);

    var z = d3.scaleOrdinal(d3.schemeCategory10);

    var line = d3.line()
      .curve(d3.curveCardinal)
      .x(d => x(d.date))
      .y(d => y(d.degrees));

    svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + (height - margin.bottom) + ")")
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b")));

    svg.append("g")
      .attr("class", "y-axis")
      .attr("transform", "translate(" + margin.left + ",0)");

    var focus = svg.append("g")
      .attr("class", "focus")
    // .style("display", "none");

    focus.append("line").attr("class", "lineHover")
      .style("stroke", "#999")
      .attr("stroke-width", 1)
      .style("shape-rendering", "crispEdges")
      .style("opacity", 1)
      .attr("y1", -height)
      .attr("y2", 0);


    var overlay = svg.append("rect")
      .attr("class", "overlay")
      .attr("x", margin.left)
      .attr("width", width - margin.right - margin.left)
      .attr("height", height)

    focus.append("text").attr("class", "lineHoverDate")
      // .attr("text-anchor", "middle")
      .attr("font-size", 12)
      .attr('font-weight', '700')
      .attr('z-index', "9999999");

    update(d3.select('#selectbox').property('value'), 0);

    function update(input, speed) {

      var copy = keys.filter(f => f.includes(input))

      var cities = copy.map(function(id) {
        return {
          id: id,
          values: data.map(d => {
            return {
              date: d.date,
              degrees: +d[id]
            }
          })
        };
      });

      y.domain([
        d3.min(cities, d => d3.min(d.values, c => c.degrees)),
        d3.max(cities, d => d3.max(d.values, c => c.degrees))
      ]).nice();

      svg.selectAll(".y-axis").transition()
        .duration(speed)
        .call(d3.axisLeft(y).tickSize(-width + margin.right + margin.left))

      var city = svg.selectAll(".cities")
        .data(cities);

      city.exit().remove();

      city.enter().insert("g", ".focus").append("path")
        .attr("class", "line cities")
        // .attr("class", d => d.id + "-line")
        .style('fill', "none")
        .style("stroke", d => z(d.id))
        .merge(city)
        .transition().duration(speed)
        .attr("d", d => line(d.values))

      tooltip(copy);


 window.addEventListener('resize', resize, false);

function resize(){
  $("#chart").height($("#chart").width() * 1.5);
       width = $("#chart").width();
       height = $("#chart").height();




}
      // draw legend
      // draw legend
      // draw legend
      // draw legend
      // draw legend
      // var legend = svg.selectAll('g')
      //      .data(cities)
      //      .enter()
      //      .append('g')
      //      .attr('class', 'legend')
      // 		  .attr('class', d =>d.id+"-legend");
      //
      //    legend.append('rect')
      //      .attr('x', width - 20)
      //      .attr('y', function(d, i) {
      //        return i * 20;
      //      })
      //      .attr('width', 10)
      //      .attr('height', 10)
      //      .style('fill', function(d) {
      //        return color(d.id);
      //      });
      //
      //    legend.append('text')
      //      .attr('x', width - 8)
      //      .attr('y', function(d, i) {
      //        return (i * 20) + 9;
      //      })
      //      .text(function(d) {
      //        return d.id;
      //      });

    }



    function tooltip(copy) {

      var rectbkg = focus.append('rect')
        .attr("x", 0)
        .attr("y", 10)
        .attr("width", 140)
        .attr("height", 180)
        .attr('class', 'rectbkg')
        .attr('fill', "rgba(0,0,0,0.3)")
        .attr('display', 'none')
        .attr('z-index', -1);


      var labels = focus.selectAll(".lineHoverText")
        .data(copy)

      labels.enter().append("text")
        .attr("class", "lineHoverText")
        // .style("fill", d => z(d))
        // .style("background-color", "black")
        .attr("text-anchor", "start")
        .attr("font-size", 12)
        .attr("dy", (_, i) => 1 + i * 2 + "em")

        .merge(labels);

      var circles = focus.selectAll(".hoverCircle")
        .data(copy)

      circles.enter().append("circle")
        .attr("class", "hoverCircle")
        .style("fill", d => z(d))
        .attr("r", 3.5)
        .attr("cy", (_, i) => 1 + i * 2.39 + "em")
        .attr("cx", 7)
        .merge(circles)
        .attr('display', 'none');


      svg.selectAll(".overlay")
        .on("mouseover", function() {
          focus.style("display", null);
        })
        .on("mouseout", function() {
          focus.style("display", "none");
        })
        .on("mousemove", mousemove);

      function mousemove() {

        var x0 = x.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.date > d1.date - x0 ? d1 : d0;

        focus.select(".lineHover")
          .attr("transform", "translate(" + x(d.date) + "," + height + ")");

        focus.select(".lineHoverDate")
          .attr("transform",
            "translate(" + x(d.date) + "," + (height / 3.2) + ")")
          .text(formatDate(d.date))
          .attr("text-anchor", "start")
          .raise();
        // .attr('z-index',99999);

        focus.selectAll(".hoverCircle")
          .attr("transform",
            "translate(" + (x(d.date)) + "," + height / 3 + ")")
          .attr('display', 'block')
        // .attr("cy", e => y(d[e]))
        // .attr("cx", x(d.date)/20);

        focus.selectAll(".rectbkg")
          .attr("transform",
            "translate(" + (x(d.date)) + "," + height / 5 + ")")
          .attr('display', 'block')

        focus.selectAll(".lineHoverText")
          .attr("transform",
            "translate(" + (x(d.date) + 10) + "," + height / 3 + ")")
          .text(e => e + " " + "º" + formatValue(d[e]));

        x(d.date) > (width - width / 3) ?
          focus.selectAll("text.lineHoverText")
          .attr("text-anchor", "end")
          .attr("dx", -30) :
          focus.selectAll("text.lineHoverText")
          .attr("text-anchor", "start")
          .attr("dx", 10);

        x(d.date) > (width - width / 3) ?
          focus.selectAll(".lineHoverDate")
          .attr("text-anchor", "end") :
          focus.selectAll(".lineHoverDate")
          .attr("text-anchor", "start");


        x(d.date) > (width - width / 3) ?
          focus.selectAll(".hoverCircle")
          .attr("transform",
            "translate(" + (x(d.date) - 15) + "," + height / 3 + ")") :
          focus.selectAll(".hoverCircle")
          .attr("transform",
            "translate(" + (x(d.date)) + "," + height / 3 + ")");

        x(d.date) > (width - width / 3) ?
          focus.selectAll(".rectbkg")
          .attr("transform",
            "translate(" + (x(d.date) - 140) + "," + height / 5 + ")") :
          focus.selectAll(".rectbkg")
          .attr("transform",
            "translate(" + (x(d.date)) + "," + height / 5 + ")");


      }

      window.addEventListener('resize', resize, false);
      function resize(){
        $("#chart").height($("#chart").width() * 1.5);
                  width = $("#chart").width();
                  height = $("#chart").height();
                  console.log(width);





    }

//end of tooltip
    }


  }
//end of charset//end of charset//end of charset//end of charset
//end of charset//end of charset//end of charset//end of charset
//end of charset//end of charset//end of charset//end of charset








  // jQuery // jQuery // jQuery // jQuery // jQuery
  // jQuery // jQuery // jQuery // jQuery // jQuery
  // jQuery // jQuery // jQuery // jQuery // jQuery
})(jQuery);
