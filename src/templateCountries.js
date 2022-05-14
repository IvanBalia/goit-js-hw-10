export function templateCountries(countries) {
    return countries.forEach(
        (country) => {
                    `<li>
                        <img src=${country.flags.svg} > 
                        <span>${country.name.oficial}</span>
                    </li>`
        }
    )
}