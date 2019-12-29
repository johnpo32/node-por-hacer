const opts = {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    }
    //puede ser
    //const descripcion = {}
const argv = require('yargs')
    .command('crear', `Crear un elemento por hacer`, opts)
    .command('actualizar', `Actualiza el estado completado a una tarea`, opts)
    .command('borrar', `Actualiza el estado completado a una tarea`, opts)
    .help()
    .argv;

module.exports = {
    argv
}