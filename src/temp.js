exports.CConv = function() {
  let valNum = parseFloat(document.getElementById("celsius").value);
  document.getElementById("fahrenheit").value = ((valNum * 1.8) + 32).toFixed(2);
  document.getElementById("kelvin").value = valNum + 273.15;
}

exports.FConv = function() {
  let valNum = parseFloat(document.getElementById("fahrenheit").value);
  document.getElementById("celsius").value = ((valNum - 32) * 1.8).toFixed(2);
  document.getElementById("kelvin").value = (((valNum - 32) / 1.8) + 273.15).toFixed(2);
}

exports.KConv = function() {
  let valNum = parseFloat(document.getElementById("kelvin").value);
  document.getElementById("fahrenheit").value = (((valNum - 273.15) * 1.8) + 32).toFixed(2);
  document.getElementById("celsius").value = (valNum - 273.15).toFixed(2);
}
