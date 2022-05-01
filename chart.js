var dataset = [5, 10, 15, 20, 25]

// Sizing variables for our chart. These are saved as variables as they will be used in calculations.
var chartWidth = 300
var chartHeight = 100
var padding = 5


var heightScalingFactor = chartHeight / getMax(dataset)

var svg = d3
  .select('#my-chart')           
    .append('svg')               
    .attr('width', chartWidth)   
    .attr('height', chartHeight) 

svg
  .selectAll('rect')                                          
  .data(dataset)                                              
  .enter()                                                    
    .append('rect')                                           
      .attr('x', function (value, index) {                    
          return (index * (chartWidth / dataset.length)) + padding
        })
      .attr('y', function (value, index) {                    
        return chartHeight - (value * heightScalingFactor)
      })
      .attr('width', (chartWidth / dataset.length) - padding) 
      .attr('height', function (value, index) {               
        return value * heightScalingFactor
      })
      .attr('fill', 'pink')                                   


function getMax(collection) {
  var max = 0

  collection.forEach(function (element) {
    max = element > max ? element : max
  })

  return max
}