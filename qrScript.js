/*
 * Name: Aman Hiran Purohit
 * Date: 06/12/2023
 */

var results = document.getElementById("qrResult");
var value = document.getElementById("qrValue");
var submit = document.getElementById("submit");
var clear = document.getElementById("reset");

submit.addEventListener("click", function () {
  if (value.value === "") {
    alert("enter something!");
  } else {
    var existingText = document.getElementById("Text");
    if (!existingText) {
      var savetext = document.createElement("div");
      savetext.setAttribute("id", "Text");
      savetext.appendChild(
        document.createTextNode("Tap on QR Code to Download")
      );
      document.getElementById("result").appendChild(savetext);
    }
    var qr = new QRious({
      element: results,
      value: value.value,
      size: 100,
    });
  }
});

clear.addEventListener("click", function () {
  value.value = "";
  var canvas = document.getElementById("qrResult");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  var existingText = document.getElementById("Text");
  if (existingText) {
    existingText.parentNode.removeChild(existingText);
  }
});

results.addEventListener("click", function () {
  var content = document.createElement("a");
  content.href = results.toDataURL();
  content.download = value.value + "png";
  content.click();
});
