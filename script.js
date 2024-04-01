async function fetchData(){
    try {
        const city = document.getElementById("input").value;
        const response = await fetch('https://restcountries.com/v3.1/name/'+ city + '?fullText=true')

        const data = await response.json();
        if (!response.ok){
            console.log('Server Error', data.error);
        }
        console.log(data)

        const country = document.getElementById("country");
        country.textContent = city

        const capital = document.getElementById("capital");
        const a = data[0];
        const obja = a.capital;
        capital.textContent = "Capital : " + obja;

        const population = document.getElementById("population");
        const b = a.population
        population.textContent = "Popolation : " + b;

        const region = document.getElementById("region");
        const c = a.region
        region.textContent = "Region : " + c;

        const time = document.getElementById("time");
        const d = a.timezones;
        time.textContent = "TimeZones : " + d;

        const flag = document.getElementById("flag");
        const e = a.flags;
        flag.src = e.png;

        //BORDERING COUNTRIES
        const f = a.borders

        for( let i = 0; i < f.length; i ++){
            const newname = document.createElement("li");
            const newflag = document.createElement("li");
            try {
                const res = await fetch('https://restcountries.com/v3.1/alpha/' + f[i]);
                const info = await res.json();

                if(!res.ok){
                    console.log('Server error', data.error)
                }

                const count = info[0].name.common;
                const fla = info[0].flag;

                const countries = document.getElementById("border");
                const flagg = document.getElementById("flags");

                newname.textContent = count;
                newflag.textContent = fla;

                countries.append(newname);
                flagg.append(newflag);
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.log(error)
    }
    
}


