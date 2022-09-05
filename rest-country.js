const countryList = ()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res  => res.json())
    .then( data => getCountry(data))
}

const getCountry = dataList =>{
    
    const setCountry =document.getElementById('country')
    
    dataList.forEach(country1 => {
        // console.log(country1);
        const div = document.createElement('div')
        div.classList.add('country-js');
        div.innerHTML = `
            <h3>Name: ${country1.name.common}</h3>
            <h5>Capital : ${country1.capital ? country1.capital[0] : 'no-capital'}</h5>
            <button onclick = "loadCountry('${country1.cca2}')">see more </button>
        `
       setCountry.appendChild(div)      
    })
}

const loadCountry =(code)=>{
// console.log(code)
const url = `https://restcountries.com/v3.1/alpha/${code}`
// console.log(url);
fetch(url)
.then(res => res.json())
.then(data => countrydata(data[0]))
    
}

const countrydata = country => {
    console.log(country);
 const setCountry = document.getElementById('set-country');
 setCountry.innerHTML= `
    <h1>Name: ${country.name.common}</h1>
    <img src ="${country.flags.png}">
 `

}

countryList();