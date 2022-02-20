var dataToTable = function (dataset) {
  var html = "<table>";
  const averageComplaints = 50;
  html += '<tr><thead><th id="empty-head"></th>';

  jQuery.each(dataset.labels, function (idx, item) {
    html += '<th id="header">' + item + "</th>";
  });
  html += "</thead></tr>";

  jQuery.each(dataset.datasets, function (idx, item) {
    html += "<tr><th id='header'>" + item.label + "</th>";
    for (i = 0; i < data.labels.length; i++) {
      html +=
        '<td style="background-color:' +
        checkComplaintLevel(item.data[i]) +
        ';"></td>';
    }
    html += "</tr>";
  });

  html += "</tr><tbody></table>";

  function checkComplaintLevel(number) {
    if (number > averageComplaints) {
      return "#fe6869";
    } else if (number == averageComplaints) {
      return "#ffda68";
    } else if (number < averageComplaints) {
      return "#bfe497";
    } else {
      return "none";
    }
  }

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
      data: [50, 50, 30, 11, 56, 50, 40],
    },
    {
      label: "พาณิชย์",
      data: [28, 50, 40, 20, 26, 50, 30],
    },
    {
      label: "อุตสาหกรรม",
      data: [18, 48, 40, 29, 50, 57, 90],
    },
    {
      label: "อื่นๆ",
      data: [18, 48, 50, 29, 86, 57, 90],
    },
  ],
};

jQuery("#complaintsTable").html(dataToTable(data));
