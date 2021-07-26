var header = document.createElement("h2")
header.innerHTML="Country List"
header.className="titlename"
document.body.append(header)

fetch('https://restcountries.eu/rest/v2/all')
.then(data=>data.json())
.then(countries => loadbrewery(countries))  

function loadbrewery(countries){
  const countryList = document.createElement("div");
  countryList.className="listdiv";


  countries.forEach((country) => 
{
  const countryContainer = document.createElement("div");
  countryContainer.className="container"
  countryContainer.innerHTML = `
    <div class = "flag"><img src="${country.flag}"></div>
    <p class = "name">      Name : <span class="content">${country.name}</span></p>
    <p class = "type">      Capital : <span class="content">${country.capital}</span></p>
    <p class = "website">   Region Address : <span class="content">${country.region}</span></p>
    <p class = "phone">     Phone No. : <span class="content">${country.phone} </span></p>
`;
  countryList.append(countryContainer);
});


document.body.append(countryList);
};
