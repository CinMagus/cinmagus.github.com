"use strict";

const Gender = Object.freeze({Male: 1, Female: 2, Other: 3});
const Age = Object.freeze({Future: 1, Kid: 2, Teen: 3, Adult: 4});

function Character(codeName, shortName, longName, gender, age) {
	this.codeName = codeName;
	this.shortName = shortName;
	this.longName = longName;
	this.gender = gender;
	this.age = age;
}

function randomElement(array) {
	if(array.length == 0)
		return null;
	else
		return array[Math.floor(array.length * Math.random())];
}

function removeElement(array, e) {
	var index = array.indexOf(e);
	if(index !== -1)
		array.splice(index, 1);
}

function loadCharacters() {
	var characters = [];
	
	characters.push(new Character("marinette", "Marinette", "Marinette Dupain-Cheng", Gender.Female, Age.Teen));
	characters.push(new Character("alya", "Alya", "Alya Césaire", Gender.Female, Age.Teen));
	characters.push(new Character("adrien", "Adrien", "Adrien Agreste", Gender.Male, Age.Teen));
	characters.push(new Character("nino", "Nino", "Nino Lahiffe", Gender.Male, Age.Teen));
	characters.push(new Character("tom", "Mr. Dupain", "Tom Dupain", Gender.Male, Age.Adult));
	characters.push(new Character("sabine", "Mrs. Cheng", "Sabine Cheng", Gender.Female, Age.Adult));
	characters.push(new Character("mylene", "Mylène", "Mylène Haprèle", Gender.Female, Age.Teen));
	characters.push(new Character("ivan", "Ivan", "Ivan Bruel", Gender.Male, Age.Teen));
	characters.push(new Character("kim", "Kim", "Lê Chiến Kim", Gender.Male, Age.Teen));
	characters.push(new Character("max", "Max", "Max Kanté", Gender.Male, Age.Teen));
	characters.push(new Character("ondine", "Ondine", "Ondine", Gender.Female, Age.Teen));
	characters.push(new Character("alix", "Alix", "Alix Kubdel", Gender.Female, Age.Teen));
	characters.push(new Character("bunnix", "Bunnix", "Bunnix", Gender.Female, Age.Adult));
	characters.push(new Character("alix", "Alix", "Alix Kubdel", Gender.Female, Age.Teen));
	characters.push(new Character("ladybug", "Ladybug", "Ladybug", Gender.Female, Age.Teen));
	characters.push(new Character("chat", "Chat", "Chat Noir", Gender.Male, Age.Teen));
	characters.push(new Character("chloe", "Chloé", "Chloé Bourgeois", Gender.Female, Age.Teen));
	characters.push(new Character("sabrina", "Sabrina", "Sabrina Raincomprix", Gender.Female, Age.Teen));
	characters.push(new Character("lila", "Lila", "Lila Rossi", Gender.Female, Age.Teen));
	characters.push(new Character("felix", "Félix", "Félix Graham de Vanily", Gender.Male, Age.Teen));
	characters.push(new Character("nathaniel", "Nathaniel", "Nathaniel Kurtzberg", Gender.Male, Age.Teen));
	characters.push(new Character("marc", "Marc", "Marc Anciel", Gender.Other, Age.Teen));
	characters.push(new Character("luka", "Luka", "Luka Couffaine", Gender.Male, Age.Teen));
	characters.push(new Character("juleka", "Juleka", "Juleka Couffaine", Gender.Female, Age.Teen));
	characters.push(new Character("kagami", "Kagami", "Kagami Tsurugi", Gender.Female, Age.Teen));
	characters.push(new Character("rose", "Rose", "Rose Lavillant", Gender.Female, Age.Teen));
	characters.push(new Character("gabriel", "Gabriel", "Gabriel Agreste", Gender.Male, Age.Adult));
	characters.push(new Character("nathalie", "Nathalie", "Nathalie Sancoeur", Gender.Female, Age.Adult));
	characters.push(new Character("markov", "Markov", "Markov", Gender.Other, Age.Teen));
	characters.push(new Character("xavier", "Xavier", "Xavier Ramier", Gender.Male, Age.Adult));
	characters.push(new Character("roger", "Roger", "Roger Raincomprix", Gender.Male, Age.Adult));
	characters.push(new Character("damocles", "Mr. Damocles", "Mr. Damocles", Gender.Male, Age.Adult));
	characters.push(new Character("bustier", "Ms. Bustier", "Caline Bustier", Gender.Female, Age.Adult));
	characters.push(new Character("mendeleiev", "Ms. Mendeleiev", "Ms. Mendeleiev", Gender.Female, Age.Adult));
	characters.push(new Character("gorilla", "Gorilla", "Adrien's bodyguard", Gender.Male, Age.Adult));
	characters.push(new Character("jalil", "Jalil", "Jalil Kubdel", Gender.Male, Age.Adult));
	characters.push(new Character("fred", "Fred", "Fred Haprèle", Gender.Male, Age.Adult));
	characters.push(new Character("claudie", "Claudie", "Claudie Kanté", Gender.Female, Age.Adult));
	characters.push(new Character("kubdel", "Mr. Kubdel", "Mr. Kubdel", Gender.Male, Age.Adult));
	characters.push(new Character("andre", "André", "André Bourgeois", Gender.Male, Age.Adult));
	characters.push(new Character("audrey", "Audrey", "Audrey Bourgeois", Gender.Female, Age.Adult));
	characters.push(new Character("glacier", "André", "André Glacier", Gender.Male, Age.Adult));
	characters.push(new Character("jean", "Jean", "Jean ???", Gender.Male, Age.Adult));
	characters.push(new Character("duparc", "Jean", "Jean Duparc", Gender.Male, Age.Teen));
	characters.push(new Character("aurore", "Aurore", "Aurore Beauréal", Gender.Female, Age.Teen));
	characters.push(new Character("mireille", "Mireille", "Mireille Caquet", Gender.Female, Age.Teen));
	characters.push(new Character("cuddly", "Mr. Cuddly", "Mr. Cuddly", Gender.Other, Age.Teen));
	characters.push(new Character("alec", "Alec", "Alec Cataldi", Gender.Male, Age.Adult));
	characters.push(new Character("amelie", "Amelie", "Amelie Graham de Vanily", Gender.Female, Age.Adult));
	characters.push(new Character("anarka", "Anarka", "Anarka Couffaine", Gender.Female, Age.Adult));
	characters.push(new Character("armand", "Armand", "Armand D'Argencourt", Gender.Male, Age.Adult));
	characters.push(new Character("bob", "Bob", "Bob Roth", Gender.Male, Age.Adult));
	characters.push(new Character("xy", "XY", "Xavier-Yves Roth", Gender.Male, Age.Adult));
	characters.push(new Character("chris", "Chris", "Chris Lahiffe", Gender.Male, Age.Kid));
	characters.push(new Character("clara", "Clara", "Clara Nightingale", Gender.Female, Age.Adult));
	characters.push(new Character("fu", "Master Fu", "Wang Fu", Gender.Male, Age.Adult));
	characters.push(new Character("gina", "Gina", "Gina Dupain", Gender.Female, Age.Adult));
	characters.push(new Character("nadja", "Nadja", "Nadja Chamack", Gender.Female, Age.Adult));
	characters.push(new Character("rolland", "Rolland", "Rolland Dupain", Gender.Male, Age.Adult));
	characters.push(new Character("manon", "Manon", "Manon Chamack", Gender.Female, Age.Kid));
	characters.push(new Character("marlena", "Marlena", "Marlena Césaire", Gender.Female, Age.Adult));
	characters.push(new Character("anansi", "Anansi", "Nora Césaire", Gender.Female, Age.Adult));
	characters.push(new Character("otis", "Otis", "Otis Césaire", Gender.Male, Age.Adult));
	characters.push(new Character("jagged", "Jagged", "Jagged Stone", Gender.Male, Age.Adult));
	characters.push(new Character("penny", "Penny", "Penny Rolling", Gender.Male, Age.Adult));
	characters.push(new Character("santa", "Santa", "Santa Claus", Gender.Male, Age.Adult));
	characters.push(new Character("simon", "Simon", "Simon Grimault", Gender.Male, Age.Adult));
	characters.push(new Character("theo", "Théo", "Théo Barbot", Gender.Male, Age.Adult));
	characters.push(new Character("thomas", "Thomas", "Thomas Astruc", Gender.Male, Age.Adult));
	
	return characters;
}

function fallback() {
	return [
		new Character("adrien", "Adrien", "Adrien Agreste", Gender.Male, Age.Teen),
		new Character("croissant", "a decent meal", "Croissant", Gender.Other, Age.Teen)
	];
}

function generateShip(characters, orientations, excluded) {
	//Randomly select first character:
	var first_pool = characters.filter(function(e) {
		return orientations[e.gender].length > 0;
	});
	var first = randomElement(first_pool);
	
	if(first === null)
		return fallback();
	
	//Randomly select second character:
	var second_pool = characters.filter(function(e) {
		return first != e &&
			orientations[first.gender].includes(e.gender) &&
			first.age == e.age &&
			!excluded.get(first.codeName).includes(e.codeName);
	});
	var second = randomElement(second_pool);
	
	if(second === null)
		return fallback();
	
	//Return the pair.
	return [first, second];
}

function loadExcludedShips(characters, exclude_canon = true) {
	var ships = [];
	
	if(exclude_canon) {
		//Canon or implied.
		ships.push(["marinette", "adrien"]);
		ships.push(["marinette", "chat"]);
		ships.push(["ladybug", "chat"]);
		ships.push(["ladybug", "adrien"]);
		ships.push(["alya", "nino"]);
		ships.push(["marinette", "luka"]);
		ships.push(["marinette", "nathaniel"]);
		ships.push(["adrien", "kagami"]);
		ships.push(["adrien", "lila"]);
		ships.push(["nathaniel", "marc"]);
		ships.push(["rose", "juleka"]);
		ships.push(["ivan", "mylene"]);
		ships.push(["kim", "ondine"]);
		ships.push(["kim", "chloe"]);
		ships.push(["tom", "sabine"]);
		ships.push(["andre", "audrey"]);
		ships.push(["jagged", "anansi"]);
		ships.push(["otis", "marlena"]);
		
		//Not really canon, but common enough in the fandom to be expected.
		ships.push(["marinette", "alya"]);
		ships.push(["adrien", "nino"]);
		ships.push(["nathaniel", "chloe"]);
		ships.push(["nathaniel", "lila"]);
		ships.push(["kim", "max"]);
		ships.push(["kim", "alix"]);
		ships.push(["max", "alix"]);
		ships.push(["sabrina", "chloe"]);
		ships.push(["chloe", "marinette"]);
		ships.push(["felix", "marinette"]);
		ships.push(["luka", "kagami"]);
		ships.push(["luka", "chloe"]);
		ships.push(["luka", "adrien"]);
		ships.push(["marinette", "kagami"]);
	}
	
	//Excluded because no. Just no.
	ships.push(["bob", "xy"]);
	ships.push(["otis", "anansi"]);
	ships.push(["marlena", "anansi"]);
	
	//Convert to map.
	var shipmap = new Map();
	
	characters.forEach(function(e) {
		shipmap.set(e.codeName, []);
	});
	
	ships.forEach(function(e) {
		shipmap.get(e[0]).push(e[1]);
		shipmap.get(e[1]).push(e[0]);
	});
	
	return shipmap;
}

function updateView(ship) {
	var banner = document.getElementsByTagName("h2")[0];
	banner.innerHTML = ship[0].shortName + " and " + ship[1].shortName + " are perfect for each other.";
	
	var slots = document.getElementsByTagName("figure");
	for(var i = 0; i < 2; i += 1) {
		var img = slots[i].getElementsByTagName("img")[0];
		img.src = "images/" + ship[i].codeName + ".png";
		
		var caption = slots[i].getElementsByTagName("figcaption")[0];
		caption.innerHTML = ship[i].longName;
	}
}

function nextShip() {
	//Load characters:
	var characters = loadCharacters();
	
	//Load orientation settings:
	var orientations = {
		1: [Gender.Male, Gender.Female, Gender.Other],
		2: [Gender.Male, Gender.Female, Gender.Other],
		3: [Gender.Male, Gender.Female, Gender.Other]
	};
	
	if(document.getElementById("ff").checked === false) {
		removeElement(orientations[Gender.Female], Gender.Female);
	}
	
	if(document.getElementById("mf").checked === false) {
		removeElement(orientations[Gender.Male], Gender.Female);
		removeElement(orientations[Gender.Female], Gender.Male);
	}
	
	if(document.getElementById("mm").checked === false) {
		removeElement(orientations[Gender.Male], Gender.Male);
	}
	
	//Load excluded ships:
	var exclude_canon = document.getElementById("crack-only").checked;
	var excluded = loadExcludedShips(characters, exclude_canon);
	
	//Generate ship:
	var ship = generateShip(characters, orientations, excluded);
	
	//Update view:
	updateView(ship);
}

document.addEventListener('DOMContentLoaded', function() {
	nextShip();
});

















































