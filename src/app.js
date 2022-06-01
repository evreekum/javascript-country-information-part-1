import axios from "axios";

console.log('Am I running?')

async function fetchDataRestCountriesApi() {
    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        const countries = response.data;
        countries.sort((low, high) => {
            return low.population - high.population;
        });
        countryList(countries);

    } catch (e) {
        console.error(e);
    }
}

fetchDataRestCountriesApi();


function countryList(countries) {
    let responseAddedInHtml = document.getElementById('country-list')
    responseAddedInHtml.innerHTML = countries.map((country) => {
        return `
        <li>
            <img src="${country.flags.png}" alt="Country Flag">
            <h3 class="${changeColorCountry(country.region)}">${country.name}</h3>
            <p>Has a population of ${country.population} people</p>
        </li>
        `;
    }).join(" ");
}


function changeColorCountry(region) {
    switch (region) {
        case "Asia":
            return 'asia';
        case "Europe":
            return 'europa';
        case "Afrika":
            return 'afrika';
        case "Americas":
            return 'americas'
        case "Oceania":
            return 'oceania';
        default:
            return "otherCountries";

    }
}
