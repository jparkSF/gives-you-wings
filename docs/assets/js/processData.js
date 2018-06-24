
// ajax call to import Vitamin Score
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: 'resources/vitamin_score.csv',
    dataType: 'text',
    success: function (data) {
      processVitaminScore(data);
    }

  })
})

function processVitaminScore(data) {
  // console.log(data)

  formatted_data = []
  split_data = data.split('\n')
  split_data.forEach(function (row) {
    formatted_data.push(row.split(','))
  }) /* each column is separated by ','  */

  appendData(formatted_data)
}

function appendData(data){
  // console.log('inside')
  for(let i = 1; i < data.length; i++){ 
    
    const type = data[i][0]
    const customerCount = parseInt(data[i][1]).toFixed(0)
    const maxCount = parseInt(data[i][2]).toFixed(0)
    const efficiency = parseInt(data[i][3]).toFixed(1)
    
    $(".vitamin-score-table-body").append(
    `
      <tr>
        <td>${type}</td>
        <td>${isNaN(customerCount) ? 0 : customerCount}</td>
        <td>${isNaN(maxCount) ? 0 : maxCount}</td>
        <td>${efficiency}%</td>
      </tr>
    `)
  }
}
