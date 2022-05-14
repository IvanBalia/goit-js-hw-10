import countryListTemplate from './templates/country-list.hbs';

export function countriesMarkup(r) {
    return r.map(({ name, flags }) => {
   return `<li class="country-container"><img src=${flags.svg} class="flag" ><span class="name-official">${name.official}</span></li>`
    }).join("");

}