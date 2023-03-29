function checkPolygon(polygonCoords, singleCoord) {
  var polygon = polygonCoords.split('\n').map(function(coord) {
    return {
      lat: parseFloat(coord.split(',')[0]),
      lng: parseFloat(coord.split(',')[1])
    };
  });

  var point = {
    lat: parseFloat(singleCoord.split(',')[0]),
    lng: parseFloat(singleCoord.split(',')[1])
  };

  var inside = false;
  for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    var xi = polygon[i].lat, yi = polygon[i].lng;
    var xj = polygon[j].lat, yj = polygon[j].lng;

    var intersect = ((yi > point.lng) !== (yj > point.lng)) &&
        (point.lat < (xj - xi) * (point.lng - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }

  return inside;
}

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  var checkButton = document.getElementById('checkButton');
  var result = document.getElementById('result');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });

  checkButton.addEventListener('click', function() {
    var polygonCoords = document.getElementById('polygonCoords').value;
    var singleCoord = document.getElementById('singleCoord').value;

    var isInside = checkPolygon(polygonCoords, singleCoord);
    result.innerText = isInside ? 'True' : 'False';
  });
});
