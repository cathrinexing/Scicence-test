// create svg element
var svg = d3.select("#divCategoric").append("svg").attr("width", 1000).attr("height",400)

// Create data
var data = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]

// Option 1: provide color names:
var myColor = d3.scaleOrdinal().domain(data)
  .range(["gold", "blue", "green", "yellow", "black", "grey", "darkgreen", "pink", "brown", "slateblue", "grey1", "orange"])

svg.selectAll(".firstrow").data(data).enter().append("circle").attr("cx", function(d,i){return 30 + i*60}).attr("cy", 50).attr("r", 19).attr("fill", function(d){return myColor(d) })

// Option 2: use a palette:
// Include <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script> in your code!
var myColor = d3.scaleOrdinal().domain(data)
  .range(d3.schemeSet3);
svg.selectAll(".firstrow").data(data).enter().append("circle").attr("cx", function(d,i){return 30 + i*60}).attr("cy", 150).attr("r", 19).attr("fill", function(d){return myColor(d) })
