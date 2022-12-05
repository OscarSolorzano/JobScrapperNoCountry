const cron = require('cron');
const { busquedaComputrabajo } = require('./scraperComputrabajo');
const { busquedaBumeran } = require('./scraperBumeran')

const cronJobScrapper = () =>{ new cron.CronJob('15 14 1-31 0-11 0-6', async () => {
    console.log('Ejecutando...');
    console.log(new Date().toLocaleString())
    // busqueda('desarrollador backend trainee', '');
    await busquedaBumeran('backend','')
    await busquedaBumeran('frontend','')
    await busquedaComputrabajo('desarrollador frontend', '');
    // busqueda('desarrollador trainee', '');
    // busqueda('desarrollador junior', '');
    await busquedaComputrabajo('desarrollador backend', '');
    // busqueda('desarrollador backend trainee', '');
    // busqueda('desarrollador', '');
    console.log('Finished');
    console.log(new Date().toLocaleString())

},
null,
true);
}

// const cronJobScrapper = () =>{
//     busquedaBumeran('backend','')
// }


module.exports = { cronJobScrapper }