// ajax call to import Order Information
let dataSet = {}
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: '../resources/order_information.json',
    dataType: 'json',
    success: function (data) {
      dataSet = data
    }
  }).then(data => onSuccess(data))
})

function onSuccess(data){
  console.log(data)
  const orderNumbers = Object.keys(data)

  for (let i = 0; i < orderNumbers.length; i++) {
    
    const orderNumber = orderNumbers[i]
    const itemDescription = data[orderNumber].items[0].description
    const totalPrice = ((data[orderNumber].amount)/100).toFixed(2)
    
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

function handleClick(orderNumber){
  const order = dataSet[orderNumber]
  const orderPrice = (order.amount/100).toFixed(2)
  $(".modal-body").append(
    `
    <div class="order-detail-wrap"> 
      <div class="order-items">
        <p>${order.items[0].description}</p>
        <p>${((order.items[0].amount)/100).toFixed(2)} </p>
      </div>
      <div class="order-items">
        <p>CA State Tax</p>
        <p>${((order.items[1].amount) / 100).toFixed(2)} </p>
      </div>
      <div class="order-items">
        <p>${order.items[2].description}</p>
        <p>${((order.items[2].amount) / 100).toFixed(2)} </p>
      </div>
      <hr class="visible-xs mt-3">
      <div class="order-items">
        <p>TOTAL </p>
        <p>${orderPrice}</p>
      </div>
    </div>
    `
  )
}
