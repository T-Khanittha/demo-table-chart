var dataToTable = function (dataset) {
  var html = "<table>";
  html += '<tr><thead><th style="width:120px;"></th>';

  jQuery.each(dataset.labels, function (idx, item) {
      html += '<th style="background-color:grey;">' + item + "</th>";
  });
  html += '</thead></tr>'

  jQuery.each(dataset.datasets, function (idx, item) {
    html += '<tr><th>' + item.label +'</th>';
    for ( i = 0 ; i < data.labels.length ; i++){
      html += '<td>' + item.data[i]+ '</td>';
    }
    html += '</tr>';

  });

  html += "</tr><tbody></table>";

  return html;
};

var data = {
  labels: [
    "คุณภาพไฟฟ้า",
    "การให้บริการ",
    "พฤติกรรมพนักงาน",
    "การจดหน่วยแจ้งค่าไฟฟ้า",
    "การถูกงดจ่ายไฟฟ้า",
    "ประพฤติไม่ชอบ",
  ],
  datasets: [
    {
      label: "บ้านอยู่อาศัย",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "พาณิชย์",
      data: [28, 48, 40, 19, 86, 27, 90],
    },
    {
      label: "อุตสาหกรรม",
      data: [18, 48, 40, 29, 86, 57, 90],
    },
    {
      label: "อื่นๆ",
      data: [18, 48, 40, 29, 86, 57, 90],
    },
  ],
};

jQuery("#complaintsTable").html(dataToTable(data));