//name.official - полное имя страны
//capital - столица
//population - население
//flags.svg - ссылка на изображение флага
//languages

export function oneCountryMarkup(country) {
    return country.map(({ name,capital, population, languages, flags }) => {
        return `<ul class="one-country-list"><li class="flag-and-name"><img src=${flags.svg} class="flag-one"><span class="one-name-official">${name.official}</span></li><li class="char-item"><span class="char-name">Capital:</span><span>${capital}</span></li><li class="char-item"><span class="char-name">Population:</span><span>${population}</span></li><li class="char-item"><span class="char-name">Languages:</span><span>${Object.values(languages)}</span></li></ul>`
    }).toString()
}