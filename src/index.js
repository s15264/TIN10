const temp = require('./temp.js');
const dist = require('./dist.js');

window.onload = function() {
    document.getElementById("celsius").addEventListener("change", temp.CConv);
    document.getElementById("celsius").addEventListener("input", temp.CConverter);
    document.getElementById("fahrenheitfahrenheit").addEventListener("input", temp.FConv);
    document.getElementById("fahrenheit").addEventListener("change", temp.FConv);
    document.getElementById("kelvin").addEventListener("change", temp.KConv);
    document.getElementById("kelvin").addEventListener("input", temp.KConv);
    document.getElementById("km").addEventListener("input", dist.kmConv);
    document.getElementById("km").addEventListener("change", dist.kmConv);
    document.getElementById("mile").addEventListener("change", dist.mileConv);
    document.getElementById("mile").addEventListener("input", dist.mileConv);
}
