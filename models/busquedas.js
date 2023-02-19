const fs = require('fs');
const axios = require('axios');

class Busquedas {

    historial = [];
    dbPath = './db/database.json';

    constructor() {

        this.leerDB();
    }

    get historialCapitalizado(){
        return this.historial.map( lugar => {
            let palabras = lugar.split(' ');

            palabras = palabras.map( p => p[0].toUpperCase() + p.substring(1) );

            return palabras.join(' ');
        })
    }

    get paramsMapbox (){

        return {
            'access_token' : process.env.MAPBOX_KEY,
            'language' : 'es',
            'limit' : 5
        }

    }


    get paramsOpenWeather () {

        return {
            'appid' : process.env.OPENWEATHER_KEY,
            'units' : 'metric',
            'lang' : 'es'
        }

    }

    async ciudades ( lugar = '' ) {

        try {

            const intanceOfAxios = axios.create({
                baseURL :  `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params : this.paramsMapbox
            })

            const res = await intanceOfAxios.get();

            return res.data.features.map( lugar => ({
                id : lugar.id,
                nombre : lugar.place_name,
                lng : lugar.center[0],
                lat: lugar.center[1]
            }))

        }catch (e) {
            return [];
        }

    }

    async climaCiudad ( lat , lon) {

        try {

            const intanceOfAxios = axios.create({
                baseURL : 'https://api.openweathermap.org/data/2.5/weather',
                params : {...this.paramsOpenWeather , lat , lon}
            })


            const  res = await intanceOfAxios.get();

            const {weather , main} = res.data;

            return{
                desc : weather[0].description,
                min : main.temp_min,
                max : main.temp_max,
                temp : main.temp
            }


        }catch (error) {
            console.log(error);
        }

    }



    agregarHistorial ( lugar = '' ) {
        //TODO: prevenir lugares duplicados
        if(this.historial.includes( lugar.toLocaleLowerCase() ) ) return;
        this.historial = this.historial.splice(0 , 5)
        this.historial.unshift( lugar.toLocaleLowerCase() );

        //TODO : Grabar en la base de datos

        this.guardarDb();
    }

    guardarDb (){

        const payload = {
            historial : this.historial
        }

        fs.writeFileSync(this.dbPath , JSON.stringify(payload))
    }

    leerDB (){
        if(!fs.existsSync(this.dbPath)) return ;

        const info = fs.readFileSync(this.dbPath , { encoding : 'utf-8'});

        const data = JSON.parse(info);
        
        this.historial = data.historial
    }


}


module.exports = Busquedas;