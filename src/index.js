
import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries.js';
import { refs } from './refs.js';
import { countriesMarkup } from './countriesMarkup';
import { renderCountriesList } from './renderCountriesList';
import { oneCountryMarkup } from './oneCountryMarkup';

const maxRenderItems = 10;
const DEBOUNCE_DELAY = 300;



refs.input.addEventListener('input',debounce((e) => {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    const countryName = e.target.value.trim();
        fetchCountries(countryName).then(response => {
            
            if (response.length > maxRenderItems) {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
                return;
            };

            if (response.length === 1) {
                renderCountriesList(oneCountryMarkup(response), refs.countryInfo);
                return;
            } else {
                renderCountriesList(countriesMarkup(response), refs.countryList);
                return;
            }
        }).catch(error => Notiflix.Notify.failure("Oops, there is no country with that name"))
    },DEBOUNCE_DELAY)
);
