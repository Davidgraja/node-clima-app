const inquirer = require('inquirer');
require('colors');

const  menuOptions = [
    {
        type: 'list',
        name : 'opcion',
        message : '¿ que desea hacer ?',
        choices: [
            {
                value : 1 ,
                name : `${'1.'.green} Buscar ciudad`
            },

            {
                value : 2 ,
                name : `${'2.'.green} Historial`
            },

            {
                value : 0 ,
                name :  `${'0.'.green} Salir`
            },

        ]
    }
]

const prompt = inquirer.createPromptModule();

const inquireMenu = async () =>{
    console.clear();

    console.log('   =================   '.green);
    console.log('     El clima hoy  ' );
    console.log('   =================\n  '.green);


    const {opcion} = await prompt(menuOptions);

    return opcion;
}


const pauseInTerminal = async () =>{

    const inputPause = [

        {
            type : 'input',
            name : 'pause',
            message : `Presione ${'ENTER'.green} para continuar`
        }

    ]


    const event = await prompt(inputPause);

    return event

}


const leerInput = async (message)=> {

    const question = [
        {
            type:'input',
            name : 'desc',
            message,
            validate( value ){
                if( value.length === 0 ){
                    return ' Por favor ingrese una Descripción ';
                }

                return true;
            }
        }
    ];


    const {desc} = await prompt(question);

    return desc;

}


const listarLugares= async (lugares = []) =>{

    console.log('\n')

    const  choices = lugares.map( (lugar , i) => {

        let  numeroDeTarea = i + 1
        return {
            value : lugar.id,
            name : `${numeroDeTarea}.`.green + ` ${lugar.nombre} `

        }

    } )

    choices.unshift({
        value : 0,
        name : `0.`.green + ' Cancelar'
    })

    const question = [
        {
            type : 'list',
            name : 'id',
            message : 'Seleciona un  lugar : ',
            choices
        }
    ]
    const {id} = await prompt(question);
    return id
}



const  confirm =  async ( message ) => {

    const question = [
        {
            type:'confirm',
            name : 'ok',
            message

        }
    ]

    const {ok} = await  prompt(question);
    return ok;
}


const completarTareasChecklist = async (tareas = []) =>{

    console.log('\n')

    const  choices = tareas.map( (tarea , i) => {

        let  numeroDeTarea = i + 1
        return {
            value : tarea.id,
            name : `${numeroDeTarea}.`.green + ` ${tarea.descripcion} `,
            checked : (tarea.completadoEn) ? true : false

        }

    } )


    const question = [
        {
            type : 'checkbox',
            name : 'ids',
            message : 'Selecciones : ',
            choices
        }
    ]
    const {ids} = await prompt(question)
    return ids;
}



module.exports = {
    inquireMenu,
    pauseInTerminal,
    leerInput,
    listarLugares,
    confirm,
    completarTareasChecklist
}