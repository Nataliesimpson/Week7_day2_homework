window.onload = function(){
  console.log( 'window loaded' );

  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();
  request.open( 'GET', url );
  request.onload = function(){

    if (request.status === 200){
      var jsonString = request.responseText;
      var countries = JSON.parse( jsonString );
      var country = countries[0];
      populateSelect(countries);
    }
  }

  request.send( null )
}

function populateSelect(countries){
  //populate the select box with the countries
  console.log(countries);
  var dropdown = document.getElementById('dropdown')

  dropdown.onchange = function(event) {
    var seletedCountry = countries[event.target.selectedIndex];
    console.log(seletedCountry);
    displayCountryDetails(seletedCountry);
  }

  countries.forEach( function(country, index){
    var countryOption = document.createElement('option')
    countryOption.text = country.name;
    countryOption.value = index;
    dropdown.appendChild(countryOption);
  })
}

function displayCountryDetails(country){
  var name = document.getElementById('country-name')
  name.innerText = "Country name: " + country.name
  var capital = document.getElementById('country-capital')
  capital.innerText = "Capital: " + country.capital
  var population = document.getElementById('country-population')
  population.innerText = "Population: " + country.population
  localStorage.setItem('selectedCountry', JSON.stringify(country));
}








