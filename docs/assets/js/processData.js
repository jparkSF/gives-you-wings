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

  console.log(formatted_data)

}
