var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift("Canis Major");
console.log(constellations[0]);

for (var i = 0; i < constellations.length; i++) {
    console.log(constellations[i] + " is a constellation");
}
planets.pop();
console.log(planets);

var galaxy = constellations.concat(planets);
console.log(galaxy);

var upperCaseStar = star.toUpperCase();
console.log(upperCaseStar);