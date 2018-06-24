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
  console.log('inside')
  for(let i = 1; i < data.length; i++){ 
    
    const type = data[i][0]
    const customerCount = data[i][1]
    const maxCount = data[i][2]
    const efficiency = data[i][3]

    $(".vitamin-score-table-body").append(
    `
      <tr>
        <td>${type}</td>
        <td>${customerCount}</td>
        <td>${maxCount}</td>
        <td>${efficiency}</td>
      </tr>
    `)
  }
}
