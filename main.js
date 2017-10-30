var width = window.innerWidth;
var height = 400;
var height2 = 200;
var padding = 100;
var albums = [11, 27, 33, 192, 53, 723, 69, 1190];
var singles = [5, 13, 25, 103, 63, 344, 79, 476];
var acting = [1, 2, 3, 8, 13];
var labels = [
  "UK Number 1s",
  "Weeks at Number 1",
  "UK Top 10s",
  "Weeks in Top 10",
  "UK Top 40s",
  "Weeks in Top 40",
  "UK Top 75s",
  "Weeks in Top 75"
];

var labels2 = [
	"Extra",
	"Voice",
	"Lead",
	"Cameo",
	"Actor"
];

var singleChartLabels = document.getElementById('singles-labels'); 
var albumChartLabels = document.getElementById('albums-labels');
var actingRoleLabels = document.getElementById('acting-labels');

var legendLabels = function(label, elem) {
		for(var i = 0; i < label.length; i++) {
		elem.innerHTML += '<p>' +(i + 1) + '. ' + label[i] + '</p>';
	}
}

legendLabels(labels, singleChartLabels);
legendLabels(labels, albumChartLabels);
legendLabels(labels2, actingRoleLabels);

var svgSingles = d3.select(".d3-singles-chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svgSingles
  .selectAll("rect")
  .data(singles)
  .enter()
  .append("rect")
    .attr("x", function(d, i) {
      return i * (width / singles.length);
    })
    .attr("y", function(d) {
      return height - d;
    })
    .attr("width", width / singles.length - padding)
    .attr("height", function(d) {
      return d;
    })

var svgAlbums = d3.select(".d3-albums-chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svgAlbums
  .selectAll("rect")
  .data(singles)
  .enter()
  .append("rect")
    .attr("x", function(d, i) {
      return i * (width / albums.length);
    })
    .attr("y", function(d) {
      return height - d;
    })
    .attr("width", width / singles.length - padding)
    .attr("height", function(d) {
      return d;
    });

var svgActing = d3.select(".d3-acting-chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height2);

svgActing
  .selectAll("rect")
  .data(acting)
  .enter()
  .append("rect")
    .attr("x", function(d, i) {
      return i * (width / acting.length);
    })
    .attr("y", function(d) {
      return height2 - d;
    })
    .attr("width", width / acting.length - padding)
    .attr("height", function(d) {
      return d;
    });

svgSingles.selectAll('text')
  .data(singles)
  .enter()
  .append('text')
  .text(function(d) { return d })
    .attr('text-anchor', 'middle')
    .attr('x', function(d, i) { return i * (width / singles.length) + (width / singles.length - padding) / 2 ;})
    .attr('y', function(d) { return height })
    .attr('fill', 'orange')
    .attr('font-size', '0.8em')

svgAlbums.selectAll('text')
  .data(albums)
  .enter()
  .append('text')
  .text(function(d) { return d })
    .attr('text-anchor', 'middle')
    .attr('x', function(d, i) { return i * (width / singles.length) + (width / singles.length - padding) / 2 ;})
    .attr('y', function(d) { return height })
    .attr('fill', 'orange')
    .attr('font-size', '0.8em');

svgActing.selectAll('text')
  .data(acting)
  .enter()
  .append('text')
  .text(function(d) { return d })
    .attr('text-anchor', 'middle')
    .attr('x', function(d, i) { return i * (width / acting.length) + (width / acting.length - padding) / 2 ;})
    .attr('y', function(d) { return height2 })
    .attr('fill', 'orange')
    .attr('font-size', '0.8em');
