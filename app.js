require('dotenv').config();

const { inquireMenu, pauseInTerminal, leerInput , listarLugares} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');




const main = async () =>{

    const busquedas = new Busquedas()
    let option ;

    do{

        option = await inquireMenu();

        switch (option) {

            case 1:

                // Mostrar mensaje

                console.log(`\n ${'exit'.green} para salir \n `)

                const busquedaCiudad = await leerInput('Ciudad: ');
                if(busquedaCiudad === 'exit') continue;

                // Buscar Lugares
                const lugares = await  busquedas.ciudades(busquedaCiudad);

                // selecionar el lugar
                const lugarId = await  listarLugares(lugares);

                if(lugarId === 0 ) continue;

                const lugarSelec = lugares.find( lugar => lugar.id === lugarId );

                //Guardar en DB
                busquedas.agregarHistorial(lugarSelec.nombre)

                // Clima
                const {desc , min , max , temp} =  await busquedas.climaCiudad(lugarSelec.lat , lugarSelec.lng);

                // Mostrar resultados
                console.clear();
                console.log('\nInformacion de la ciudad\n'.underline.bgMagenta);
                console.log('Ciudad : '.green, lugarSelec.nombre );
                console.log('Lat : '.green , lugarSelec.lat );
                console.log('Lng : '.green,  lugarSelec.lng);
                console.log('Temperatura : '.green, temp );
                console.log('Mínima : '.green, min );
                console.log('Máxima : '.green, max  );
                console.log('Cómo está el clima : '.green, `${desc}` , '\n' );



            break;

            case 2:
                console.log('\n');

                busquedas.historialCapitalizado.forEach( ( lugar , i ) =>{
                    let index = i +1;

                    console.log(`${ index }. `.green + lugar  )

                });

                console.log('\n')

            break;

        }

        if( option != 0 ) await pauseInTerminal()

    } while( option != 0  )

}

main();