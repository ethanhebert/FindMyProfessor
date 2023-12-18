// Select elements from HTML document
const profInfoEl = document.querySelector("#prof-info");
const searchBarEl = document.querySelector("#searchBar");
const dropdownListEl = document.querySelector("#dropdown-list");
const textPanelEl = document.querySelector("#text-panel");

// Professor Data
const profData = [
	{
		fname: "Abigail",
		lname: "Fertal",
		department: "Communication",
		building: "Robinson Hall",
		number: "316",
		email: "afertal"
	},
	{
		fname: "Andrey",
		lname: "Timofeyev",
		department: "Computer Science",
		building: "IESB",
		number: "215",
		email: "andtimo"
	},
	{
		fname: "Ankunda",
		lname: "Kiremire",
		department: "Computer Science",
		building: "IESB",
		number: "221",
		email: "kiremire"
	},
	{
		fname: "Anne",
		lname: "Case-Bartle",
		department: "Literature & Language",
		building: "GTM",
		number: "230",
		email: "arcase"
	},
	{
		fname: "Ben",
		lname: "Choi",
		department: "Computer Science",
		building: "NETH",
		number: "119",
		email: "choi"
	},
	{
		fname: "Brandi",
		lname: "Estwick",
		department: "Music",
		building: "HC",
		number: "329",
		email: "bestwick"
	},
	{
		fname: "Brooke",
		lname: "Cassady",
		department: "Design",
		building: "F.J. Taylor",
		number: "B16A",
		email: "bcassady"
	},
	{
		fname: "Cain",
		lname: "Budds",
		department: "Music",
		building: "HC",
		number: "324",
		email: "cbudds"
	},
	{
		fname: "Christopher",
		lname: "Deal",
		department: "Communication",
		building: "Davison Hall",
		number: "207D",
		email: "cdeal"
	},
	{
		fname: "Damon",
		lname: "Caldwell",
		department: "Design",
		building: "Hale Hall",
		number: "219",
		email: "caldwell"
	},
	{
		fname: "David",
		lname: "Mills",
		department: "Biomedical Engineering",
		building: "BMEB",
		number: "242",
		email: "dkmills"
	},
	{
		fname: "David",
		lname: "Hall",
		department: "Mechanical Engineering",
		building: "IESB",
		number: "115",
		email: "dehall"
	},
	{
		fname: "Henry",
		lname: "Cardenas",
		department: "Mechanical Engineering",
		building: "BOGH",
		number: "255",
		email: "cardenas"
	},
	{
		fname: "Hisham",
		lname: "Hegab",
		department: "Mechanical Engineering",
		building: "BOGH",
		number: "201A",
		email: "hhegab"
	},
	{
		fname: "Ida",
		lname: "Chauvin",
		department: "Psychology",
		building: "Woodard Hall",
		number: "114C",
		email: "ichauvin"
	},
	{
		fname: "Jacob",
		lname: "Gran",
		department: "Music",
		building: "HC",
		number: "226",
		email: "jgran"
	},
	{
		fname: "Jason",
		lname: "Terry",
		department: "Computer Science",
		building: "IESB",
		number: "209",
		email: "jterry"
	},
	{
		fname: "Jerry",
		lname: "Berg",
		department: "Design",
		building: "F.J. Taylor",
		number: "B18",
		email: "jberg"
	},
	{
		fname: "Joel",
		lname: "Stake",
		department: "Biological Sciences",
		building: "CTLH",
		number: "201",
		email: "jstake"
	},
	{
		fname: "John",
		lname: "Dogbey",
		department: "Economics & Finance",
		building: "COBB",
		number: "208",
		email: "jdogbey"
	},
	{
		fname: "Jordan",
		lname: "Blazo",
		department: "Kinesiology",
		building: "Memorial Gym",
		number: "302",
		email: "jblazo"
	},
	{
		fname: "Joseph",
		lname: "Clark",
		department: "Literature & Language",
		building: "GTM",
		number: "220",
		email: "joclark"
	},
	{
		fname: "Joshua",
		lname: "Coriell",
		department: "Computer Science",
		building: "NETH",
		number: "237",
		email: "coriell"
	},
	{
		fname: "Juliana",
		lname: "Kemege",
		department: "Biological Sciences",
		building: "CTLH",
		number: "229B",
		email: "jkemege"
	},
	{
		fname: "Jungshik",
		lname: "Hur",
		department: "Economics & Finance",
		building: "COBB",
		number: "213",
		email: "jhur"
	},
	{
		fname: "Kaden",
		lname: "Beilman",
		department: "Design",
		building: "Hale Hall",
		number: "228",
		email: "kbeilman"
	},
	{
		fname: "Kelly",
		lname: "Crittenden",
		department: "Mechanical Engineering",
		building: "BOGH",
		number: "256",
		email: "kellyc"
	},
	{
		fname: "Kevin",
		lname: "Cherry",
		department: "Computer Science",
		building: "NETH",
		number: "239",
		email: "drcherry"
	},
	{
		fname: "Kirby",
		lname: "Colvin",
		department: "Literature & Language",
		building: "GTM",
		number: "116",
		email: "colvin"
	},
	{
		fname: "Krystal",
		lname: "Corbett",
		department: "Mechanical Engineering",
		building: "IESB",
		number: "133",
		email: "kcorbett"
	},
	{
		fname: "Kyle",
		lname: "Kemege",
		department: "Biological Sciences",
		building: "CTLH",
		number: "211",
		email: "kkemege"
	},
	{
		fname: "Kyle",
		lname: "Prather",
		department: "Computer Science",
		building: "NETH",
		number: "117",
		email: "kprather"
	},
	{
		fname: "Lacey",
		lname: "Deal",
		department: "Kinesiology",
		building: "Memorial Gym",
		number: "305",
		email: "ldeal"
	},
	{
		fname: "Laura",
		lname: "Carper",
		department: "Communication",
		building: "Davison Hall",
		number: "209B",
		email: "lcarper"
	},
	{
		fname: "Les",
		lname: "Guice",
		department: "President",
		building: "Wyly",
		number: "1620",
		email: "guice"
	},
	{
		fname: "Louis",
		lname: "Reis",
		department: "Biomedical Engineering",
		building: "BMEB",
		number: "212",
		email: "lgreis"
	},
	{
		fname: "Mark",
		lname: "Allen",
		department: "Communication",
		building: "Davison Hall",
		number: "207C",
		email: "marka"
	},
	{
		fname: "Mark",
		lname: "DeCoster",
		department: "Nanotechnology",
		building: "IFMM",
		number: "212",
		email: "decoster"
	},
	{
		fname: "Matthew",
		lname: "Bryan",
		department: "Communication",
		building: "Robinson Hall",
		number: "214A",
		email: "mbryan"
	},
	{
		fname: "Michael",
		lname: "Swanbom",
		department: "Mechanical Engineering",
		building: "BOGH",
		number: "239",
		email: "mswanbom"
	},
	{
		fname: "Mike",
		lname: "O'Neal",
		department: "Computer Science",
		building: "NETH",
		number: "115",
		email: "mike"
	},
	{
		fname: "Natalie",
		lname: "Clay",
		department: "Biological Sciences",
		building: "CTLH",
		number: "129",
		email: "nclay"
	},
	{
		fname: "Patrick",
		lname: "Scott",
		department: "Economics & Finance",
		building: "COBB",
		number: "328",
		email: "pscott"
	},
	{
		fname: "Paula",
		lname: "Brown",
		department: "Literature & Language",
		building: "Wyly",
		number: "325",
		email: "pbrown"
	},
	{
		fname: "Pedro",
		lname: "Derosa",
		department: "Nanotechnology",
		building: "IFMM",
		number: "216",
		email: "pderosa"
	},
	{
		fname: "Pradeep",
		lname: "Chowriappa",
		department: "Computer Science",
		building: "NETH",
		number: "235",
		email: "pradeep"
	},
	{
		fname: "Randall",
		lname: "Barron",
		department: "Mechanical Engineering",
		building: "BOGH",
		number: "207",
		email: "rbarron"
	},
	{
		fname: "Rhonda",
		lname: "Boyd",
		department: "Kinesiology",
		building: "Memorial Gym",
		number: "210",
		email: "rboyd"
	},
	{
		fname: "Rob",
		lname: "Blackstock",
		department: "Economics & Finance",
		building: "COBB",
		number: "103A",
		email: "rblackst"
	},
	{
		fname: "Robert",
		lname: "Brooks",
		department: "Design",
		building: "Hale Hall",
		number: "213",
		email: "mbrooks"
	},
	{
		fname: "Robert",
		lname: "Sharp",
		department: "Music",
		building: "HC",
		number: "325",
		email: "rsharp"
	},
	{
		fname: "Scott",
		lname: "Levin",
		department: "Literature & Language",
		building: "GTM",
		number: "250",
		email: "slevin"
	},
	{
		fname: "Thomas",
		lname: "Bowman",
		department: "Computer Science",
		building: "NETH",
		number: "149",
		email: "tbowman"
	},
	{
		fname: "Thomas",
		lname: "Bishop",
		department: "Biomedical Engineering",
		building: "BMEB",
		number: "231",
		email: "bishop"
	},
	{
		fname: "Tiffany",
		lname: "Bates",
		department: "Psychology",
		building: "Woodard Hall",
		number: "2121B",
		email: "tbates"
	},
	{
		fname: "Tina",
		lname: "Allen",
		department: "Education",
		building: "Woodard Hall",
		number: "211C",
		email: "tallen"
	},
	{
		fname: "Whitney",
		lname: "Causey",
		department: "Design",
		building: "F.J. Taylor",
		number: "107",
		email: "causey"
	},
	{
		fname: "William",
		lname: "Campbell",
		department: "Biological Sciences",
		building: "CTLH",
		number: "213B",
		email: "campbell"
	},
	{
		fname: "William",
		lname: "Long",
		department: "Mechanical Engineering",
		building: "IESB",
		number: "120",
		email: "long"
	},
	{
		fname: "Yuri",
		lname: "Lvov",
		department: "Nanotechnology",
		building: "IFMM",
		number: "214",
		email: "ylvov"
	}
];

// Building Lat/Lng Locations
const buildingLocations = {
	"BMEB" : { lat: 32.524514894837125, lng: -92.64948880551647 },
	"BOGH" : { lat: 32.526347614658704, lng: -92.64569473007275 },
	"COBB" : { lat: 32.52723595098447, lng: -92.6445801319432 },
	"CTLH" : { lat: 32.52539364919, lng: -92.64599736006767 },
	"Davison Hall" : { lat: 32.52495624171311, lng: -92.64837164829765 },
	"F.J. Taylor" : { lat: 32.5258194495085, lng: -92.6515853957375 },
	"GTM" : { lat: 32.52837969148744, lng: -92.64815281758365 },
	"Hale Hall" : { lat: 32.52825660724925, lng: -92.64995502688902 },
	"HC" : { lat: 32.526420750018666, lng: -92.6473936530479 },
	"IESB" : { lat: 32.52628242816011, lng: -92.64373892022229 },
	"IFMM" : { lat: 32.524656299062265, lng: -92.65123357358709 },
	"NETH" : { lat: 32.52579373290872, lng: -92.64478880190408 },
	"Robinson Hall" : { lat: 32.527808463983305, lng: -92.64998646087027 },
	"Memorial Gym" : { lat: 32.527908145257825, lng: -92.65155235452188 },
	"Woodard Hall" : { lat: 32.52714292911, lng: -92.65025385766292 },
	"Wyly" : { lat: 32.52842410481685, lng: -92.64719655144913 }
}

// Initialize and add the map, receieve libraries on return
let map;
initMap();

// Global vars to store the current marker and current user input and status of search bar selection and the current prof cards shown
let currentMarker;
let input;
let searchBarSelected = false;
let profRelevance = [];

// display the map centered on LaTech with custom theme
async function initMap() {
	// Import necessary Google Maps library
	const { Map } = await google.maps.importLibrary("maps");
	// LaTech location to center map on startup
	const LATECH = { lat: 32.527093, lng: -92.647671 };
	// Build the map
	map = new Map(document.getElementById("map-panel"), {
		zoom: 17,
		center: LATECH,
		mapId: "3b8d8779a4f4727b"
	});
}

// displays all relevant prof cards by loop calling displayProfCard()
function displayProfCards(selectedProfIndex) {
	profInfoEl.innerHTML = "";
	for (i=0; i<profRelevance.length; i++) {
		// fill in red if selected
		if (profRelevance[i] == selectedProfIndex)
			displayProfCard(profRelevance[i], true);
		else
			displayProfCard(profRelevance[i], false);
	}
}

// displays an info card for a searched professor
function displayProfCard(profIndex, selected) {
	profInfoEl.innerHTML += `
		<div class="prof-info-box" ${(selected) ? 'id="prof-info-box-selected"' : ''} onclick="findProfessor(${profIndex})">
			<h2>${profData[profIndex].fname} ${profData[profIndex].lname}</h2>
			<p><b>Department: </b>${profData[profIndex].department}</p>
			<p><b>Office: </b>${profData[profIndex].building} ${profData[profIndex].number}</p>
			<p><b>Email: </b>${profData[profIndex].email}@latech.edu</p>
		</div>
	`;
}

// handles typing in the search bar - routes to other functions to handle recommended results vs searching
function search(event) {
	// split input text by space to get all combinations of names, compare to profData
	input = searchBarEl.value.toLowerCase().split(' ');
	// ENTER pressed - submit and search
	if (event.keyCode == 13) {
		hideDropdown();
		searchSubmit();
	}
	// any other key pressed
	else
		searchDropdown();
}

// handles the user pressing ENTER to perform a search
function searchSubmit() {
	profInfoEl.innerHTML = "";
	profRelevance = [];
	// for each prof
	for (i=0; i<profData.length; i++) {
		let relevance = 0;
		// for each input token
		for (j=0; j<input.length; j++) {
			if (input[j] == profData[i].fname.toLowerCase())
				relevance++;
			if (input[j] == profData[i].lname.toLowerCase())
				relevance++;
			}
		// got one name, push to end of array
		if (relevance == 1)
			profRelevance.push(i);
		// got both names, push to front of array
		else if (relevance > 1)
			profRelevance.unshift(i);
	}
	// display info for relevant profs, in order of relevance
	displayProfCards(-1);
}

// shows relevant results while you type in search as a dropdown
function searchDropdown() {
	let dropdownProfs = [];
	// compare with prof names
	for (i=0; i<profData.length; i++) {
		// only one name typed in - "Dav..."
		if (input.length == 1) {
			if (profData[i].fname.toLowerCase().startsWith(input[0]) || profData[i].lname.toLowerCase().startsWith(input[0])) {
				dropdownProfs.push(i);
			}
		}
		// two or more names typed in - "David Ma..."
		else if (input.length > 1) {
			if ((input[0] == profData[i].fname.toLowerCase() && profData[i].lname.toLowerCase().startsWith(input[1])) || (input[0] == profData[i].lname.toLowerCase() && profData[i].fname.toLowerCase().startsWith(input[1]))) {
				dropdownProfs.push(i);
			}
		}
	}
	// list in dropdown all relevant profs
	displayDropdown(dropdownProfs);
}

// this displays the dropdown under the search bar with the inputted profs
function displayDropdown(dropdownProfs) {
	dropdownListEl.innerHTML = "";
	for (i=0; i<dropdownProfs.length; i++)
		dropdownListEl.innerHTML += `<div class="dropdown-item" onclick="selectDropdownProf(${dropdownProfs[i]})">${profData[dropdownProfs[i]].fname + " " + profData[dropdownProfs[i]].lname}</div>`;
	if (dropdownProfs != [])
		showDropdown();
	else
		hideDropdown();
}

// this handles selecting a prof from the search dropdown
function selectDropdownProf(profIndex) {
	input = [profData[profIndex].fname.toLowerCase(), profData[profIndex].lname.toLowerCase()];
	hideDropdown();
	findProfessor(profIndex);
	searchSubmit();
	searchBarEl.value = profData[profIndex].fname + " " + profData[profIndex].lname;
}

// this function pins a marker on a selected prof's office
async function findProfessor(profIndex) {
	// import marker libraries
	const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
	const { PinElement } = await google.maps.importLibrary("marker");

	// Custom marker decorations
	const customMarker = new PinElement({
		background: "#F45B69",
		borderColor: "white",
		glyphColor: "white"
	});

	// remove previous marker
	if (currentMarker)
		currentMarker.setMap(null);

	// create and set new marker
	currentMarker = new AdvancedMarkerElement({
		map: map,
		position: buildingLocations[profData[profIndex].building],
		title: (profData[profIndex].building + " " + profData[profIndex].number),
		content: customMarker.element
	});
	currentMarker.setMap(map);

	// fill in prof info box to show selection
	displayProfCards(profIndex);
}

// this function hides the dropdown menu
function hideDropdown() {
	dropdownListEl.style.display = "none";
}

// this function shows the dropdown menu
function showDropdown() {
	dropdownListEl.style.display = "block";
}

// this function displays or doesn't display the dropdown based on where screen was clicked
function clickScreen() {
	if (searchBarSelected)
		showDropdown();
	else
		hideDropdown();
	searchBarSelected = false;
}

// search bar was clicked
function clickSearchBar() {
	input = searchBarEl.value.toLowerCase().split(' ');
	searchDropdown();
	searchBarSelected = true;
}