// ajax call to import tracking information
let dataSet = {}
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: '../resources/tracking_information.json',
    dataType: 'json',
    success: function (data) {
      dataSet = data
    }
  }).then(data => onSuccess(data))
})

function onSuccess(data) {
  console.log(data)
  const orderNumbers = Object.keys(data)

  for (let i = 0; i < orderNumbers.length; i++) {

    const orderNumber = orderNumbers[i]
    const itemDescription = data[orderNumber].items[0].description
    const totalPrice = ((data[orderNumber].amount) / 100).toFixed(2)

    $(".order-information-table-body").append(
      `
      <tr>
        <td><input type="checkbox" class="select-row"></td>
        <td>
          <a class="" href="#docsModal" onClick="handleClick(${orderNumber})" data-toggle="modal">
            #${orderNumber}
          </a>
        </td>
        <td>${itemDescription}</td>
        <td>06/01/2018</td>
        <td>${totalPrice}</td>
      </tr>
      `
    )
  }
}
