let searchbar = document.getElementById("searchbar");
let container = document.getElementById("container");
let URL = "https://countries-api.davegarvey.workers.dev/countries";



let allCountries = [];

const getCountry = async () =>{
    console.log("getting data.....");
  let  response = await fetch(URL);
let result = await  response.json();
console.log(result);
allCountries = result;

}


getCountry();

searchbar.addEventListener("input",() =>{
   let countryname = searchbar.value.toLowerCase();

    if (countryname === "") {
        container.innerHTML = ""; 
        return; 
    }

   let matches  = allCountries.filter((country) =>
      country.name.toLowerCase().includes(countryname)
   );
   console.log("matches:",matches);

   let showindiv = matches.map((country)=>{
            return `<div class="card">
                
                        <div class="code">
                        <p>Code : ${country.code}</p>
                        </div>
            
                        <div class="callcode">
                        <p>callingcode : ${country.callingCode}</p>
                        </div>

                        <div class="capital">
                          <p>Capital : ${country.capital}</p>
                        </div>

                    

                        <div class="currency"> 
                        <p>Currency : ${country.currency}</p> 
                        </div>
                       
                        <div class="flag"> 
                        <p>Flag : ${country.flag}</p> 
                        </div>

                        <div class="languages"> 
                        <p>Languages : ${country.languages}</p> 
                        </div>
                        
                        <div class="name"> 
                        <p>Name : ${country.name}</p> 
                        </div>

                        <div class="population">
                          <p>Population : ${country.population}</p>
                        </div>  

                        <div class="region">
                          <p>Region : ${country.region}</p>
                        </div>  

                        <div class="subregion">
                          <p>Subregion : ${country.subregion}</p>
                        </div>  

                        
                        </div>
                        
                        `;
        
    });
    
    container.innerHTML = showindiv.join("");

    
});
