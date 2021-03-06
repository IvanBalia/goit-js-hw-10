//name.official - полное имя страны
//capital - столица
//population - население
//flags.svg - ссылка на изображение флага
//languages - массив языков
//?fields=name.official,capital,population,flags.svg,languages

export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`).then(r =>{ return r.json() }).catch(error=>console.log(error))
}