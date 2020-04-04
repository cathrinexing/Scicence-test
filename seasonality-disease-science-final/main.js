(function($) {
  var width, height, hwidth, hheight, margin, columns, svg, hsvg, x, y, size, tip, tipX, commaFormat, cValue;

  setVis();

  d3.csv("https://raw.githubusercontent.com/cathrinexing/D3-Xing/master/seasonality-disease-4/data.csv", function(error, data) {

    draw(error, data);
  })

  window.addEventListener('resize', resize, false);


  // setup fill color
  // var cValue = function(d) { return d.disease;},
  //     color = d3.scale.category10();

  function setVis() {
    $("#interactive").height($("#interactive").width() * 1.3);
    width = $("#interactive").width();
    height = $("#interactive").height();
    // hwidth = $("#header").width();
    // hheight = $("#header").height();
    if (width < 500) {
      margin = {
        top: 30,
        left: 50,
        right: 10
      }
    } else {
      margin = {
        top: 30,
        left: 80,
        right: 10
      };
    }

    columns = ['Timeline', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];

    svg = d3.select("#interactive")
      .append("svg")
      .attr("class", "svg")
      .attr("width", width + "px")
      .attr("height", height + "px");

    hsvg = d3.select("#header")
      .append("svg")
      .attr("class", "svg")
      .attr("width", hwidth + "px")
      .attr("height", hheight + "px");


  }


  function draw(error, data) {
    setScales(data);
    drawViz(data);

  }


//




function resize() {
  $("#interactive").height($("#interactive").width() * 1.3);
  width = $("#interactive").width();
  height = $("#interactive").height();


  // update  x-domain and 图标

  // if (width < 415) {
  //   x.domain(
  //     ['Timeline', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
  //   );
  // } else

  if (width < 500) {
    margin = {
      top: 30,
      left: 50,
      right: 10
    }

    x.domain(['Timeline', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']);

  } else {
    margin = {
      top: 30,
      left: 80,
      right: 10
    }

    x.domain(columns);



  }

  svg
    .attr("width", width + "px")
    .attr("height", height + "px");

  hsvg
    .attr("width", hwidth + "px")
    .attr("height", hheight + "px");

  y.range([margin.top * 3, (height - margin.top)]);
  x.rangeRoundBands([margin.left, (width - margin.right)]);
  size.range([0, (width - margin.left) / 9]);


  //update loaction of X轴的labels

  svg.selectAll('.col-txt')
  .attr('transform', function(d) {
    if (width < 500) {
      return "translate(" + x(d.disease) + "," + (y(d.year) - 40) + ")";
    } else {
      return "translate(" + x(d.disease) + "," + (y(d.year) - 45) + ")";
    }
  });
    // .attr('transform', function(d) {
    //
    //   if (width < 500) {
    //     return "translate(" + x(d.disease) + "," + (y(d.year) - y(1) / 5) + ")";
    //
    //
    //   } else {
    //     return "translate(" + x(d.disease) + "," + (y(d.year) - y(1) / 2) + ")";
    //
    //
    //   }
    // });



  svg.selectAll('.col-txt2')

        .attr('transform', function(d) {
          if (width < 500) {
            return "translate(" + x(d.disease)* 0.5 + "," + (y(d.year) - 60)* 0.5 + ")";
          } else {
            return "translate(" + x(d.disease)* 0.5 + "," + (y(d.year) - 65)* 0.5 + ")";
          }
        })
    // .attr('transform', function(d) {
    //   if (width < 500) {
    //     return "translate(" + (x(d.disease) * 0.5) + "," + (y(d.year) - y(1)/1.45) + ")";
    //   } else {
    //     return "translate(" + (x(d.disease) * 0.5) + "," + (y(d.year)  - y(1)/1.1) + ")";
    //   }
    // });

  // vertial wide gray bar
  svg.selectAll('.guide2')
    .attr('x1', x('Jan'))
    .attr('x2', x('Jan'))
    .attr('y1', function(d) {
      if (width < 500) {
        return y(1)*0.38;
      } else {
        return y(1) * 0.33;
      }
    })
    .attr('y2', y(9.5))
    .style("stroke-width", (x('Feb') - x('Jan')) * 2.7);


  // console.log(x('Jan'));
  //             console.log(y(0.4));
  //
  // console.log();

  svg.selectAll('.guide3')
    .attr('x1', x('Jul'))
    .attr('x2', x('Jul'))
    .attr('y1', function(d) {
      if (width < 500) {
        return y(1)*0.38;
      } else {
        return y(1) * 0.33;
      }
    })
    .attr('y2', y(9.5))
    .style("stroke-width", (x('Feb') - x('Jan')) * 2.7);

svg.selectAll('.guides1')
.attr('x1', x('Jan'))
.attr('x2', x('Jan'))
.attr('y1', function(d) {
  if (width < 500) {
    return y(1) *0.36
  } else {
    return y(1)*0.3;
  }
})
.attr('y2', function(d) {
  if (width < 500) {
    return y(1)*0.38
  } else {
    return y(1) * 0.33;
  }
})
  .style("stroke-width", (x('Feb') - x('Jan')) * 2.7);

  svg.selectAll('.guides4')
  .attr('x1', x('Apr'))
  .attr('x2', x('Apr'))
  .attr('y1', function(d) {
    if (width < 500) {
      return y(1) *0.36
    } else {
      return y(1)*0.3;
    }
  })
  .attr('y2', function(d) {
    if (width < 500) {
      return y(1)*0.38
    } else {
      return y(1) * 0.33;
    }
  })
    .style("stroke-width", (x('Feb') - x('Jan')) * 2.7);


    svg.selectAll('.guides7')
    .attr('x1', x('Jul'))
    .attr('x2', x('Jul'))
    .attr('y1', function(d) {
      if (width < 500) {
        return y(1) *0.36
      } else {
        return y(1)*0.3;
      }
    })
    .attr('y2', function(d) {
      if (width < 500) {
        return y(1)*0.38
      } else {
        return y(1) * 0.33;
      }
    })
      .style("stroke-width", (x('Feb') - x('Jan')) * 2.7);

      svg.selectAll('.guides10')
      .attr('x1', x('Oct'))
      .attr('x2', x('Oct'))
      .attr('y1', function(d) {
        if (width < 500) {
          return y(1) *0.36
        } else {
          return y(1)*0.3;
        }
      })
      .attr('y2', function(d) {
        if (width < 500) {
          return y(1)*0.38
        } else {
          return y(1) * 0.33;
        }
      })
        .style("stroke-width", (x('Feb') - x('Jan')) * 2.7);

  //update the location of year label
  //update the location of year label
  //update the location of year label
  svg.selectAll('.yr-txt')
    // .attr('transform', function(d) {
    //   return (width < 500) ? "translate(" + 2 + "," + y(d.year) + ")" : "translate(" + (x('Timeline') - 30) + "," + (y(d.year) - 10) + ")";
    // })
    .attr('transform', function(d) {
      // return  "translate(" + 150 + "," + 300 + ")";
      return (width < 500) ? "translate(" + 2 + "," + y(d.year) + ")" : "translate(" + (x('Timeline') - 80) + "," + (y(d.year) - 15) + ")";
    })

  svg.selectAll('.yr-txt2')
    // .attr('transform', function(d) {
    //   return (width < 500) ? "translate(" + 2 + "," + (y(d.year) + 10) + ")" : "translate(" + (x('Timeline') - 30) + "," + (y(d.year) + 5) + ")";
    // })
    .attr('transform', function(d) {
      // return  "translate(" + 150 + "," + 300 + ")";
      return (width < 500) ? "translate(" + 2 + "," + (y(d.year) + 10) + ")" : "translate(" + (x('Timeline') - 80) + "," + (y(d.year) + 5) + ")";
    })

  svg.selectAll('.yr-txt3')

    .attr('transform', function(d) {
      return (width < 500) ? "translate(" + 2 + "," + (y(d.year) + 20) + ")" : "translate(" + (x('Timeline') - 80) + "," + (y(d.year) + 25) + ")";
    })

  svg.selectAll('.guide')
    .attr('x1', function() {
      return (width < 500) ? 50 : x('Timeline')
    })
    .attr('x2', width)
    .attr('y1', function(d) {
      return y(d);
    })
    .attr('y2', function(d) {
      return y(d);
    });

  // svg.selectAll('.guides')
  //   .attr('x1', x('Oct'))
  //   .attr('x2', x('Oct'))
  //   .attr('y1', y(0.4))
  //   .attr('y2', y(0.4))


  svg.selectAll('.addline')
    .attr('x1', (x('Aug') * 1.04))
    .attr('x2', (x('Aug') * 1.04))
    .attr('y1', y(3.55))
    .attr('y2', y(3.85))

  svg.selectAll('.addtext')
    .attr("x", (x('Aug') * 1.04))
    .attr("y", y(3.5));



  //update the location of year label
  // svg.select('.timeline')
  //   .attr('x1', x('Timeline'))
  //   .attr('x2', x('Timeline'))
  //   .attr('y1', y(1))
  //   .attr('y2', y(9));

  svg.selectAll(".timedot")
    .attr("cx", x("Timeline"))
    .attr("cy", function(d) {
      return y(d.year)
    });


  svg.selectAll('.guidev1')
    .attr('x1', x('Jan'))
    .attr('x2', x('Jan'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))


  svg.selectAll('.guidev2')
    .attr('x1', x('Feb'))
    .attr('x2', x('Feb'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))

  svg.selectAll('.guidev3')
    .attr('x1', x('Mar'))
    .attr('x2', x('Mar'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))

  svg.selectAll('.guidev4')
    .attr('x1', x('Apr'))
    .attr('x2', x('Apr'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))

  svg.selectAll('.guidev5')
    .attr('x1', x('May'))
    .attr('x2', x('May'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))

  svg.selectAll('.guidev6')
    .attr('x1', x('Jun'))
    .attr('x2', x('Jun'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))

  svg.selectAll('.guidev7')
    .attr('x1', x('Jul'))
    .attr('x2', x('Jul'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))

  svg.selectAll('.guidev8')
    .attr('x1', x('Aug'))
    .attr('x2', x('Aug'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))

  svg.selectAll('.guidev9')
    .attr('x1', x('Sep'))
    .attr('x2', x('Sep'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))

  svg.selectAll('.guidev10')
    .attr('x1', x('Oct'))
    .attr('x2', x('Oct'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))
    .attr('class', 'guidev10')

  svg.selectAll('.guidev11')
    .attr('x1', x('Nov'))
    .attr('x2', x('Nov'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))


  svg.selectAll('.guidev12')
    .attr('x1', x('Dec'))
    .attr('x2', x('Dec'))
    .attr('y1', y(0.7))
    .attr('y2', y(9.5))

  // update 蓝色circle 的 group
  svg.selectAll(".g-circle")
    .attr("transform", function(d) {
      return "translate(" + x(d.disease) + "," + y(d.year) + ")"
    });



  // update 蓝色circle
  svg.selectAll(".circle")
    .attr("r", function(d) {
      return size(d.cases);
    });


}



  function setScales(data) {
    y = d3.scale.linear()
      .domain([1, 9.2])
      .range([margin.top * 3, (height - margin.top)]);

    x = d3.scale.ordinal()
      .rangeRoundBands([margin.left, (width - margin.right)])
      .domain(columns);



    size = d3.scale.sqrt()
      .domain([0, 6000])
      .range([0, (width - margin.left) / 9]);

    tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-5, 0])

      .html(function(d) {


        return "<p>Month: <strong>" + d.diseasesm + "</strong></p> <p>Disease: <strong>" + d.names + "</strong></p>" +
          "<p>Percentage: <strong>" + d.percentage + "</strong></p>" + "<p>Location:<strong>" + d.place + "</strong></p>";

      })

    commaFormat = d3.format(',');


  }

  function drawViz(data) {

    svg.call(tip);

    var years = [];

    for (var i = 1; i <= 9; i++) {
      years.push(i);
    }

    var months = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];

    // for (var i = 1; i <= 12; i++) {
    //   months.push(i);
    // }


    console.log(years);
    console.log(months);
    console.log(x("Smallpox"));
    console.log(x('Timeline'));

    // draw dot horizontal years lines

    // var guides = svg.selectAll('.guide')
    //   .data(years)
    //   .enter()
    //   .append('line')
    //   .attr('class', 'guide')
    //   .attr('x1', function() {
    //     return (width < 500) ? 50 : x('Timeline')
    //   })
    //   .attr('x2', width)
    //   .attr('y1', function(d) {
    //     return y(d);
    //   })
    //   .attr('y2', function(d) {
    //     console.log(y(d));
    //     return y(d);
    //   });



    // draw dot vertical  years lines
    // var guides2 = svg.selectAll('.guide2')
    //   .data(years)
    //   .enter()
    //   .append('line')
    //   .attr('class', 'guide2')
    //   .attr('x1', function() {
    //      return x(d);
    //     // return (width < 500) ? 50 : x('Timeline')
    //   })
    //   .attr('x2', function() {
    //      return x(d);
    //     // return (width < 500) ? 50 : x('Timeline')
    //   })
    //   .attr('y1', function(d) {
    //     return y(1);
    //   })
    //   .attr('y2', function(d) {
    //     console.log(y(d));
    //     return y(2);
    //   });


    // draw key section
    hsvg.append('g')
      .attr('transform', ("translate(20," + 15 + ")"))
      .attr('class', 'g-vkey');


    // circles in 图标
    var scale = hsvg.selectAll('.scale')
      .data([10000, 1000, 10])
      .enter()
      .append('g')
      .attr('class', 'scale')
      .attr('transform', function(d, i) {
        return (width < 500) ? "translate(" + (size(50000) + 5) + ',' + (40 + size(50000) * 2 - size(d) + 20) + ")" : "translate(" + (size(50000) + 2) + ',' + (75 + size(50000) * 2 - size(d) + 20) + ")"
      });

    scale.append("circle")
      .attr("r", function(d) {
        return size(d);
      });

    scale.append("text")
      .attr('y', function(d) {
        return (d == 1000) ? -size(d) + 10 : -size(d) + 5;
      })
      .attr('x', (size(50000) + 10))
      .text(function(d) {
        return commaFormat(d);
      });

    scale.append("line")
      .attr('y1', function(d) {
        return -size(d);
      })
      .attr('y2', function(d) {
        return -size(d);
      })
      .attr('x1', 0)
      .attr('x2', (size(50000) + 10));




    // 时间轴上的数字
    var yrtxt = svg.selectAll('.yr-txt')
      // .data(data.filter(function(d) {
      //   return d.year
      // }))
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'yr-txt')
      .attr('transform', function(d) {
        // return  "translate(" + 150 + "," + 300 + ")";
        return (width < 500) ? "translate(" + 2 + "," + y(d.year) + ")" : "translate(" + (x('Timeline') - 80) + "," + (y(d.year) - 15) + ")";
      })
      .append('text')
      .text(function(d) {
        return d.names

      })



    var yrtxt2 = svg.selectAll('.yr-txt2')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'yr-txt2')
      .attr('transform', function(d) {
        // return  "translate(" + 150 + "," + 300 + ")";
        return (width < 500) ? "translate(" + 2 + "," + (y(d.year) + 10) + ")" : "translate(" + (x('Timeline') - 80) + "," + (y(d.year) + 5) + ")";
      })
      .append('text')
      .text(function(d) {
        return d.place
      })


    var yrtxt3 = svg.selectAll('.yr-txt3')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'yr-txt3')
      .attr('transform', function(d) {
        return (width < 500) ? "translate(" + 2 + "," + (y(d.year) + 20) + ")" : "translate(" + (x('Timeline') - 80) + "," + (y(d.year) + 25) + ")";
      })
      .append('text')
      .text(function(d) {
        return d.date
      })




    // var guides = svg.selectAll('.guide')
    //   .data(years)
    //   .enter()
    //   .append('line')
    //   .attr('class', 'guide')
    //   .attr('x1', function() {
    //     return (width < 500) ? 50 : x('Timeline')
    //   })
    //   .attr('x2', width)
    //   .attr('y1', function(d) {
    //     return y(d);
    //   })
    //   .attr('y2', function(d) {
    //     console.log(y(d));
    //     return y(d);
    //   });



    var line11 = svg.append('line')
      .attr('x1', x('Jan'))
      .attr('x2', x('Jan'))
      .attr('y1', function(d) {
        if (width < 500) {
          return y(1)*0.38;
        } else {
          return y(1) * 0.33;
        }
      })
      .attr('y2', y(9.5))
      .attr('class', 'guide2')
      .style("stroke-width", (x('Feb') - x('Jan')) * 3)


    // .style("stroke-width", "20px")

    var line44 = svg.append('line')
      .attr('x1', x('Jul'))
      .attr('x2', x('Jul'))
      // .attr('y1', y(0.4))
      .attr('y1', function(d) {
        if (width < 500) {
          return y(1)*0.38;
        } else {
          return y(1) * 0.33;
        }
      })
      .attr('y2', y(9.5))
      .attr('class', 'guide3')
      .style("stroke-width", (x('Feb') - x('Jan')) * 2.7)


    var vline1 = svg.append('line')
      .attr('x1', x('Jan'))
      .attr('x2', x('Jan'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev1')
    var vline2 = svg.append('line')
      .attr('x1', x('Feb'))
      .attr('x2', x('Feb'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev2')
    var vline3 = svg.append('line')
      .attr('x1', x('Mar'))
      .attr('x2', x('Mar'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev3')
    var vline4 = svg.append('line')
      .attr('x1', x('Apr'))
      .attr('x2', x('Apr'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev4')
    var vline5 = svg.append('line')
      .attr('x1', x('May'))
      .attr('x2', x('May'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev5')
    var vline6 = svg.append('line')
      .attr('x1', x('Jun'))
      .attr('x2', x('Jun'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev6')
    var vline7 = svg.append('line')
      .attr('x1', x('Jul'))
      .attr('x2', x('Jul'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev7')
    var vline8 = svg.append('line')
      .attr('x1', x('Aug'))
      .attr('x2', x('Aug'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev8')
    var vline9 = svg.append('line')
      .attr('x1', x('Sep'))
      .attr('x2', x('Sep'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev9')
    var vline10 = svg.append('line')
      .attr('x1', x('Oct'))
      .attr('x2', x('Oct'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev10')

    var vline11 = svg.append('line')
      .attr('x1', x('Nov'))
      .attr('x2', x('Nov'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev11');

    var vline12 = svg.append('line')
      .attr('x1', x('Dec'))
      .attr('x2', x('Dec'))
      .attr('y1', y(0.7))
      .attr('y2', y(9.5))
      .attr('class', 'guidev12')
    // 时间轴上的轴线
    var line = svg.append('line')
      .attr('x1', x('Timeline'))
      .attr('x2', x('Timeline'))
      .attr('y1', y(1))
      .attr('y2', y(9))
      .attr('class', 'timeline');
    // 时间轴上的圆圈
    var gdot = svg.selectAll(".timedot")
      .data(data.filter(function(d) {
        return d.event !== ""
      }))
      .enter()
      .append('circle')
      .attr("cx", x("Timeline"))
      .attr("cy", function(d) {
        return y(d.year)
      })
      // .attr("r", 5)
      .attr("class", "timedot");
    // .on('mouseover', tip.show)
    // .on('mouseout', tip.hide);

    //主图上的圆圈
    var gcircle = svg.selectAll(".g-circle")
      .data(data)
      .enter()
      .append('g')
      .attr("transform", function(d) {
        return "translate(" + x(d.disease) + "," + y(d.year) + ")"
      })
      .attr("class", function(d) {
        return "g-circle"

      })
      .on('mouseover', tip.show)



      .on('mouseout', tip.hide);

    gcircle.append("circle")
      .attr("class", function(d) {
        return "circle"

      })
      .attr("r", function(d) {
        return size(d.cases);
      })
      .style("fill", function(d) {
        return '#005E7F';
      })
      .style("fill-opacity", function(d) {

        if (d.cases == 1627 || d.cases == 1792 || d.cases == 1747 || d.cases == 1830 || d.cases == 1508 || d.cases == 1974 || d.cases == 2035 || d.cases == 1690 || d.cases == 2974) {
          return '0.8';
        } else {
          return '0.5';
        }
      })

    // .style("fill", function(d) { return color(cValue(d));})

    gcircle.append('circle')
      .attr("class", "hover")

    // gcircle.append("circle")
    //   .attr("class", "hover")
    //   .attr("r", function(d) {
    //     return
    //     if (d.cases < 2000) {
    //       return 20
    //     } else {
    //       return null
    //     }
    //   })

    // .attr("cy", function(d) {
    //   if (d.cases < 2000) {
    //     return 20
    //   } else {
    //     return null
    //   }
    // });




    // X轴 的 标签
    var coltxt = svg.selectAll('.col-txt')
      .data(data.filter(function(d) {
        return d.head == "TRUE"
      }))
      // .data(data)
      .enter()
      .append('g')
      .attr('class', function(d) {
        return "col-txt"
      })
      // .attr('transform', function(d) {
      //
      //   if (width < 500) {
      //     return "translate(" + x(d.disease) + "," + (y(d.year) - y(1) / 3) + ")";
      //
      //
      //   } else {
      //     return "translate(" + x(d.disease) + "," + (y(d.year) - y(1) / 2) + ")";
      //
      //
      //   }
      // })

      .attr('transform', function(d) {
        if (width < 500) {
          return "translate(" + x(d.disease) + "," + (y(d.year) - 40) + ")";
        } else {
          return "translate(" + x(d.disease) + "," + (y(d.year) - 45) + ")";
        }
      })
      .append('text')
      .text(function(d) {
        return d.diseasesm
      })




    var coltxt2 = svg.selectAll('.col-txt2')
      .data(data.filter(function(d) {
        return d.head2 == "TRUE"
      }))
      .enter()
      .append('g')
      .attr('class', function(d) {
        return "col-txt2"
      })
      // .append('div')
      // .attr('class', function(d) {
      //   return "underline"
      // })
      // .attr('transform', function(d) {
      //   if (width < 500) {
      //     return "translate(" + (x(d.disease) ) + "," + (y(d.year) - y(1)/2) + ")";
      //   } else {
      //     return "translate(" + (x(d.disease)) + "," + (y(d.year)  - y(1)/1.4) + ")";
      //   }
      // })


      .attr('transform', function(d) {
        if (width < 500) {
          return "translate(" + x(d.disease) + "," + (y(d.year) - 60) + ")";
        } else {
          return "translate(" + x(d.disease) + "," + (y(d.year) - 65) + ")";
        }
      })
      // .append('span').attr('class', "underline")
      .append('text')
      // .style('text-decoration','underline')
      .attr('class', "col-txt2")

      .text(function(d) {
        return d.season
      })

      // .attr('transform', function(d) {
      //   if (width < 500) {
      //     return "translate(" + (x(d.disease) * 0.5) + "," + (y(d.year) - y(1)/1.45) + ")";
      //   } else {
      //     return "translate(" + (x(d.disease) * 0.5) + "," + (y(d.year)  - y(1)/1.1) + ")";
      //   }
      // })

    // 季节下面的横线
    var linev1 = svg.append('line')
      .attr('x1', x('Jan'))
      .attr('x2', x('Jan'))
      .attr('y1', function(d) {
        if (width < 500) {
          return y(1) *0.36
        } else {
          return y(1)*0.3;
        }
      })
      .attr('y2', function(d) {
        if (width < 500) {
          return y(1)*0.38
        } else {
          return y(1) * 0.33;
        }
      })
      .attr('class', 'guides1')
      .style("stroke-width", (x('Feb') - x('Jan')) * 3.0)


    var linev4 = svg.append('line')
      .attr('x1', x('Apr'))
      .attr('x2', x('Apr'))
      .attr('y1', function(d) {
        if (width < 500) {
          return y(1) *0.36
        } else {
          return y(1)*0.3;
        }
      })
      .attr('y2', function(d) {
        if (width < 500) {
          return y(1)*0.38
        } else {
          return y(1) * 0.33;
        }
      })

      .attr('class', 'guides4')
      .style("stroke-width", (x('Feb') - x('Jan')) * 2.7);


    var linev7 = svg.append('line')
      .attr('x1', x('Jul'))
      .attr('x2', x('Jul'))
      // .attr('y1', y(0.38))
      // .attr('y2', y(0.4))
      .attr('y1', function(d) {
        if (width < 500) {
          return y(1) *0.36
        } else {
          return y(1)*0.3;
        }
      })
      .attr('y2', function(d) {
        if (width < 500) {
          return y(1)*0.38
        } else {
          return y(1) * 0.33;
        }
      })

      .attr('class', 'guides7')
      .style("stroke-width", (x('Feb') - x('Jan')) * 2.7);

    var linev10 = svg.append('line')
      .attr('x1', x('Oct'))
      .attr('x2', x('Oct'))
      .attr('y1', function(d) {
        if (width < 500) {
          return y(1) *0.36
        } else {
          return y(1)*0.3;
        }
      })
      .attr('y2', function(d) {
        if (width < 500) {
          return y(1)*0.38
        } else {
          return y(1) * 0.33;
        }
      })

      .attr('class', 'guides10')
      .style("stroke-width", (x('Feb') - x('Jan')) * 2.7);

    // 图形里的 标注
    var addline = svg.append('line')
      .attr('x1', (x('Aug') * 1.04))
      .attr('x2', (x('Aug') * 1.04))
      .attr('y1', y(3.55))
      .attr('y2', y(3.85))
      .attr('class', 'addline')
      .append("text")
      .text("most cases");

    var addtext = svg.append("text")
      .attr("x", (x('Aug') * 1.03))
      .attr("y", y(3.5))
      .attr("text-anchor", "start")
      .attr('class', 'addtext')
      .text("Most cases in the year");






  }

})(jQuery);
