exports.kmConv = function() {
    let val = parseFloat(document.getElementById("km").value);
    document.getElementById("mile").value = (val * 0.62137).toFixed(2);
}

exports.mileConv = function() {
    let val = parseFloat(document.getElementById("mile").value);
    document.getElementById("km").value = (val / 0.62137).toFixed(2);
}
