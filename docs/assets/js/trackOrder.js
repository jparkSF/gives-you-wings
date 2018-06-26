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
  // console.log(data)
  const objectKeys = Object.keys(data)

  for (let i = 0; i < objectKeys.length; i++) {
    const orderNumber = objectKeys[i]
    const trackingNumber = (data[orderNumber].tracking_number)
    const carrier = data[orderNumber].carrier.toUpperCase()
    const status = data[orderNumber].tracking_status.status
    const eta = data[orderNumber].eta.slice(0,10)

    
    $(".tracking-info-table-body").append(
      `
      <tr>
        <td><input type="checkbox" class="select-row"></td>
        <td>${orderNumber}</td>
        <td>
          <a class="" href="#docsModal" onClick="handleClick(${orderNumber})" data-toggle="modal">
            ${trackingNumber}
          </a>
        </td>
        <td>${carrier}</td>
        <td>${status}</td>
        <td>${eta}</td>
      </tr>
      `
    )

  }
}

function handleClick(order_id) {
  const trackingNumber = dataSet[order_id].tracking_number
  const order = dataSet[order_id]
  const trackingHistory = order.tracking_history.reverse()
  
  // adding title to the modal window
  $(".modal-title").text(`Tracking # ${trackingNumber}`)
  
  $(".modal-body").append(
    `
    <div class="order-detail-wrap"> 
      <table class="tracking-detail-table">
        <tbody class="tracking-history-modal">
          <tr>
            <th>
              <p>Description</p>
            </th>
            <th>
              <p>Date & Time</p>
            </th>
            <th>
              <p>Status</p>
            </th>
            <th>
              <p>Location</p>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    `
  )

  
  
  for (let i = 0; i < trackingHistory.length; i++) {
    const trackingItem = trackingHistory[i]
    
    $(".tracking-history-modal").append(
      `
      <tr>
        <td>
          <p>${trackingItem.status_date.slice(0, 10)}</p>
        </td>
        <td>
          <p>${trackingItem.status_details}</p>
        </td>
        <td>
          <p>${trackingItem.status}</p>
        </td>
        <td>
          <p>${trackingItem.location.city}, ${trackingItem.location.state}&nbsp;${trackingItem.location.zip}</p>
        </td>
      </tr>
      `
    )
  }
}

function handleDismiss() {
  $(".modal-body").empty()
}
