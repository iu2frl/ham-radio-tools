// Shared cable database for all coax-related tools
// Attenuation values are dB per 100 meters at 100 MHz

var CABLES_DATA = [
  { name: "RG-58", attenuation: 14.93, velocityFactor: 0.66, notes: "Thin coax - portable" },
  { name: "RG-213", attenuation: 6.62, velocityFactor: 0.66, notes: "Standard coax - general purpose" },
  { name: "RG-174", attenuation: 29.86, velocityFactor: 0.66, notes: "Thin - patch cables only" },
  { name: "H-155", attenuation: 9.30, velocityFactor: 0.81, notes: "Low loss - stranded conductor" },
  { name: "H-500", attenuation: 4.10, velocityFactor: 0.81, notes: "Very low loss - Belden H-500" },
  { name: "H-1000", attenuation: 3.90, velocityFactor: 0.83, notes: "Very low loss - Belden H-1000" },
  { name: "H-1500", attenuation: 2.50, velocityFactor: 0.83, notes: "Lowest loss - Belden H-1500" },
  { name: "Aircell 7", attenuation: 6.43, velocityFactor: 0.83, notes: "Foam dielectric - low loss" },
  { name: "Aircom Plus", attenuation: 3.21, velocityFactor: 0.80, notes: "Foam dielectric - very low loss" }
];

function getCableSpecs() {
  var specs = {};
  for (var i = 0; i < CABLES_DATA.length; i++) {
    var cable = CABLES_DATA[i];
    var key = cable.name.toLowerCase().replace(/[\s\-]/g, "_");
    specs[key] = {
      attenuation: cable.attenuation,
      velocityFactor: cable.velocityFactor
    };
  }
  return specs;
}

function getCableByKey(key) {
  for (var i = 0; i < CABLES_DATA.length; i++) {
    var cable = CABLES_DATA[i];
    var cableKey = cable.name.toLowerCase().replace(/[\s\-]/g, "_");
    if (cableKey === key) {
      return cable;
    }
  }
  return null;
}

function populateCableDropdown(selectElement) {
  selectElement.innerHTML = "";
  
  for (var i = 0; i < CABLES_DATA.length; i++) {
    var cable = CABLES_DATA[i];
    var key = cable.name.toLowerCase().replace(/[\s\-]/g, "_");
    
    var option = document.createElement("option");
    option.value = key;
    option.textContent = cable.name + " (" + cable.attenuation.toFixed(2) + " dB/100m @ 100MHz) - " + cable.notes;
    selectElement.appendChild(option);
  }
  
  var customOption = document.createElement("option");
  customOption.value = "custom";
  customOption.textContent = "Custom (manual dB/100m)";
  selectElement.appendChild(customOption);
}
