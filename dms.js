// https://stackoverflow.com/a/37893239/10013136

function toDegreesMinutesAndSeconds(coordinate) {
  var absolute = Math.abs(coordinate);
  var degrees = Math.floor(absolute);
  var minutesNotTruncated = (absolute - degrees) * 60;
  var minutes = Math.floor(minutesNotTruncated);
  var seconds = Math.round(((minutesNotTruncated - minutes) * 60) * 100.0) / 100.0;

  return `${degrees} deg ${minutes}' ${seconds}"`
}

function escapeSpecialCharacters(str) {
  return str.replace(/\\/g, '\\\\')  // Escape backslashes
            .replace(/"/g, '\\"')    // Escape double quotes
            .replace(/ /g, '\\ ');   // Escape spaces
}

function convertDMS(lat, lng) {
  var latitude = toDegreesMinutesAndSeconds(lat);
  var latitudeCardinal = lat >= 0 ? "N" : "S";

  var longitude = toDegreesMinutesAndSeconds(lng);
  var longitudeCardinal = lng >= 0 ? "E" : "W";

  return escapeSpecialCharacters(`${latitude} ${latitudeCardinal}, ${longitude} ${longitudeCardinal}`)
}

export { convertDMS }