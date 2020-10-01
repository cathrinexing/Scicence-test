(function($) {

    d3.csv("https://subscriptions.sciencemag.org/article-resources/placeholder-heede/heede_data_updated.csv", function(error, allData) {
        if (error) throw error;
        var data, overviewData, RW, RH, width, height, margin, oWidth, oHeight, oMargin, okWidth, okHeight, okMargin, format, color, oColor, x, y, oX, oY, line, area, timer, currentYear = 2013
        ,
            playing = false,
            speed = 900;
        var types = {
            "cumulative": {
                "max": 7
            },
            "annual": {
                "max": 2200

            },
            "overview": {
                "max": 1442059
            }
        };

        processData(allData);
        setDimensions();
        setScales();
        drawRight(data);
        drawLeft(overviewData);
        drawKey(overviewData);
        drawFocus();
        setHover();
        animateArt();
        scroll();
        d3.select(window).on('resize', resize);


        function processData(allData) {
            //process & filter data
            allData.forEach(function(d) {
                d["values"] = [];
                d[currentYear] = parseFloat(d[currentYear]);
                for (var key in d) {
                    if (key !== "id" & key !== "index" & key !== "type" & key !== "name" & key !== "country" & key !== "values") {
                        var valuepair = {
                            year: parseInt(key),
                            value: parseFloat(d[key]),
                            type: d.type
                        };
                        d.values.push(valuepair);
                    }
                }
            });

            data = allData.filter(function(d) {
                return d.type !== "overview";
            });

            overviewData = allData.filter(function(d) {
                return d.type === "overview";
            });
        }

        function setDimensions() {
            // set right-column individual chart perimeters
            RW = $("#charts").width();
            RH = $("#charts").height();
            width = Math.floor(RW / 2);
            height = Math.floor(RH / 8);
            margin = {
                top: 15,
                right: 20,
                bottom: 0,
                left: 15
            };
            // set left-column overview chart perimeters
            oWidth = $("#overview_chart").width();
            oHeight = $("#overview_chart").height();
            oMargin = {
                    top: 20,
                    left: 30,
                    bottom: 20,
                    right: 30
                }
                // set key for overview chart
            okWidth = $("#overview_key").width();
            okHeight = $("#overview_key").height();
            okMargin = {
                top: 50,
                left: 10
            }
        };

        function setScales() {
            // set all scales
            format = d3.format("0,000");
            color = d3.scale.ordinal()
                .range(["#df897c", "#efc8b8"])
                .domain(["cumulative", "annual"]);

            oColor = d3.scale.ordinal()
                .domain(["world", "ninety", "eight"])
                .range(["#bcbec0", "#9e0b0f", "#da7768"]);

            x = d3.scale.linear()
                .domain([1884, 2013])
                .range([0, (width - margin.left - margin.right)]);

            y = d3.scale.linear()
                .range([(height - margin.top - margin.bottom), 0]);

            oX = d3.scale.linear()
                .domain([1884, 2013])
                .range([0, (oWidth - oMargin.left - oMargin.right)]);

            oY = d3.scale.linear()
                .domain([0, 1442059])
                .range([(oHeight - oMargin.top - oMargin.bottom), 0]);

            line = d3.svg.line()
                .x(function(d) {
                    return d.type === "overview" ? oX(d.year) : x(d.year);
                })
                .y(function(d) {
                    return d.type === "overview" ? oY(d.value) : y(d.value);
                });

            area = d3.svg.area()
                .x(function(d) {
                    return x(d.year);
                })
                .y0(height - margin.bottom - margin.top)
                .y1(function(d) {
                    return y(d.value);
                });
        }

        function drawRight(data) {
            // draw right-column line charts
            var svg = d3.select("#charts").selectAll("svg")
                .data(data)
                .enter().append("svg")
                .attr("id", function(d) {
                    return d.id;
                })
                .attr("class", "chart_svg company_svg")
                .style("display", function(d) {
                    return d[currentYear] > 0 ? "block" : "none";
                })
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var linegraph = svg.append("path")
                .attr("class", "line");

            var fill = svg.append("path")
                .attr("class", "graph_fill")
                .style("fill", function(d) {
                    return color(d.type);
                });

            var label = svg.append("text")
                .attr("class", "graph_label")
                .attr("dy", "0.5em")
                .text(function(d) {
                    return d.name;
                });

            var countryLabel = svg.append("text")
                .attr("class", "graph_country")
                .attr("dy", "2em")
                .text(function(d) {
                    return d.country;
                });

            var focus = svg.append("g")
                .attr("class", "focus");

            var hoverfield = svg.append("rect")
                .attr("class", "overlay hover");

            setRight();
        }

        function setRight() {
            d3.selectAll(".company_svg")
                .attr("width", width + "px")
                .attr("height", height + "px")
                .style("left", function(d) {
                    return d.type === "cumulative" ? (width + "px") : 0;
                })
                .style("top", function(d) {
                    return (d.index) * height + "px";
                });

            d3.selectAll(".line")
                .attr("d", function(d) {
                    y.domain([0, types[d.type].max]);
                    return line(d.values);
                });

            d3.selectAll(".graph_fill")
                .attr("d", function(d) {
                    y.domain([0, types[d.type].max]);
                    return area(d.values);
                });

            d3.selectAll(".hover")
.attr("width", function() {
    var val = width - margin.left - margin.right;
    return (val < 0) ? 0 + 'px' : val + 'px';
})
.attr("height", function() {
    var val = height - margin.top - margin.bottom;
    return (val < 0) ? 0 + 'px' : val + 'px';
});
        }

        function drawLeft(overviewData) {
            // draw left-column overview chart
            var oSvg = d3.select("#overview_chart").append("svg")
                .attr("id", "overviewSvg")
                .attr("class", "chart_svg overview_svg")
                .append("g")
                .attr("transform", "translate(" + oMargin.left + "," + oMargin.top + ")");

            oSvg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + 0 + ", 0)");

            var oLineGroup = oSvg.selectAll(".og-line")
                .data(overviewData)
                .enter()
                .append("g")
                .attr("class", "og-line");

            var oLinegraph = oLineGroup.append("path")
                .attr("class", "o-line")
                .style("stroke", function(d) {
                    return oColor(d.id);
                });

            var oFocus = oLineGroup.append("g")
                .attr("class", "focus");

            var oHoverfield = oSvg.append("rect")
                .attr("class", "overlay o-hover")
                .attr("id", "o-hover");

            setLeft();
        }

        function setLeft() {
            d3.select(".overview_svg")
                .attr("width", oWidth + "px")
                .attr("height", oHeight + "px");

            d3.selectAll(".o-line")
                .attr("d", function(d) {
                    return line(d.values);
                });

            var oYAxis = d3.svg.axis()
                .scale(oY)
                .orient("left")
                .tickFormat(d3.format("s"));

            d3.select(".y")
                .call(oYAxis);

            d3.selectAll(".y text")
                .attr("x", -10)
                .style("text-anchor", "middle")

            // $(".tick:first").hide();

            d3.selectAll(".o-hover")
                .attr("width", (oWidth - oMargin.left - oMargin.right) + "px" )
                .attr("height", (oHeight - oMargin.top - oMargin.bottom) + "px");
        }

        function drawKey(overviewData) {
            //draw key for overview chart
            var keySvg = d3.select("#overview_key").append("svg")
                .attr("id", "overviewKey")
                .attr("width", okWidth + "px")
                .attr("height", okHeight + "px")
                .append("g")
                .attr("transform", "translate(" + oMargin.left + "," + oMargin.top + ")");

            var keyGroup = keySvg.selectAll(".o-key")
                .data(overviewData)
                .enter()
                .append("g")
                .attr("class", "o-key")
                .attr("transform", function(d, i) {
                    return "translate(0," + i * 25 + ")";
                });

            keyGroup.append("line")
                .attr("x1", 0)
                .attr("x2", 20)
                .style("stroke", function(d) {
                    return oColor(d.id);
                });

            keyGroup.append("text")
                .attr("x", 30)
                .attr("dy", "0.2em")
                .text(function(d) {
                    return d.name;
                });
        }

        function drawFocus() {
            // draw focus for all charts
            d3.selectAll(".focus").append("circle")
                .attr("class", "marker")
                .attr("r", 3)
                .style("fill", function(d) {
                    return d.type === "overview" ? oColor(d.id) : "black";
                });

            d3.selectAll(".focus").append("text")
                .attr("class", "focus_label")
                .attr("text-anchor", "middle")
                .attr("dy", function(d) {
                    return d.id === "eight" ? "1.2em" : "-0.5em";
                })

            setFocus(10);
        }

        function setFocus(time) {
            d3.selectAll(".marker")
                .transition()
                .duration(time)
                .attr("cx", function(d) {
                    return d.type === "overview" ? oX(currentYear) : x(currentYear);
                })
                .attr("cy", function(d) {
                    y.domain([0, types[d.type].max]);
                    return d.type === "overview" ? oY(d[currentYear]) : y(d[currentYear]);
                });

            d3.selectAll(".focus_label")
                .transition()
                .duration(time)
                .attr("x", function(d) {
                    return d.type === "overview" ? oX(currentYear) : x(currentYear);
                })
                .attr("y", function(d) {
                    y.domain([0, types[d.type].max]);
                    return d.type === "overview" ? oY(d[currentYear]) : y(d[currentYear]);
                })
                .text(function(d) {
                    return d.type === "overview" ? format(d[currentYear]) : d[currentYear];
                });
        }

        function setHover() {
            d3.selectAll(".overlay")
                .on("mouseover", mouseover)
                .on("mouseout", mouseout)
                .on("mousemove", mousemove)
                .on("click", mouseclick);
        }

        // hover functionalities
        function mouseover() {
            if (playing === false) {
                d3.selectAll(".focus").style("display", null);
            }
        }

        function mouseout() {
            if (playing === false) {
                showYear();
            }
        }

        function mouseclick() {
            if (playing === false) {
                var xmove;
                ($(this).attr("id") === "o-hover") ? xmove = oX.invert(d3.mouse(this)[0]): xmove = x.invert(d3.mouse(this)[0]);
                currentYear = Math.round(xmove);
                resort();
            }
        }

        function mousemove() {
            if (playing === false) {
                var xmove;
                ($(this).attr("id") === "o-hover") ? xmove = oX.invert(d3.mouse(this)[0]): xmove = x.invert(d3.mouse(this)[0]);
                currentYear = Math.round(xmove);
                showYear();
                setFocus(10);
                if ($(this).attr("id") === "o-hover") {
                    resort();
                };
            }
        }

        function animateArt() {
            // plays animation on clicking "play" button
            $("#play").on("click", function() {
                $(this).toggleClass("active");
                if ($(this).hasClass("active") === true) {
                    playing = true;
                } else {
                    playing = false;
                }
                play();
            });
        }

        function play() {
            if (playing === true) {
                timer = setInterval(function() {
                    if (currentYear < 2006) {
                        currentYear += 5;
                    } else if (currentYear < 2013) {
                        currentYear += 1;
                    } else {
                        currentYear = 1885;
                    };
                    showYear();
                    animatefocus();
                    resort();
                }, speed);

                $("#play img").attr("src", "http://sciencestatic.aws.aaas.org.s3.amazonaws.com/article-resources/placeholder-heede/pause.png");
            } else {
                clearInterval(timer);
                $("#play img").attr("src", "http://sciencestatic.aws.aaas.org.s3.amazonaws.com/article-resources/placeholder-heede/play.png");
            };
        }

        function showYear() {
            d3.select("#clock_value").text(currentYear);
        }

        function animatefocus() {
            d3.selectAll(".focus").style("display", null);
            setFocus(speed / 2);
        }

        function resort() {
            data.forEach(function(d) {
                d[currentYear] = parseFloat(d[currentYear]);
            });

            data.filter(function(d) {
                    return d.type === "cumulative";
                }).sort(function(a, b) {
                    return d3.descending(a[currentYear], b[currentYear]);
                })
                .map(function(d, i) {
                    return d.index = i;
                });

            data.filter(function(d) {
                    return d.type === "annual";
                }).sort(function(a, b) {
                    return d3.descending(a[currentYear], b[currentYear]);
                })
                .map(function(d, i) {
                    return d.index = i;
                });

            d3.selectAll(".company_svg")
                .transition()
                .duration(500)
                .style("display", function(d) {
                    return d[currentYear] > 0 ? "block" : "none";
                })
                .style("top", function(d) {
                    return (d.index) * height + "px";
                });
        }

        function resize() {
            setDimensions();
            setScales();
            setRight();
            setLeft();
            setFocus(10);
        }

        // plays / stops animation on scroll
        function scroll() {
            var myElement = $("#heede_wrapper");

            var interactiveWatcher = scrollMonitor.create(myElement, {
                top: -RH,
                bottom: -0.5 * RH
            });

            interactiveWatcher.enterViewport(function() {
                    setTimeout(function(){
                        if (playing === false) {
                            playing = true;
                            $("#play").addClass("active");
                            // console.log("playing on scroll");
                            play();
                        };
                    }, 3000);

            });
            interactiveWatcher.exitViewport(function() {
                playing = false;
                $("#play").removeClass("active");
                play();
            });
        }

    });

//inspirations from "http://flowingdata.com/2016/05/17/the-changing-american-diet/";

})(jQuery);
