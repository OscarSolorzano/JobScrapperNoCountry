const cron = require('cron');
const { busquedaComputrabajo } = require('./scraperComputrabajo');
const { busquedaBumeran } = require('./scraperBumeran');
const { cleanDatabase } = require('../controllers/job.controller');

// const cronJobScrapper = () => {
//   new cron.CronJob(
//     '18 14 1-31 0-11 0-6',
//     async () => {
//       console.log('Ejecutando...');
//       console.log(new Date().toLocaleString());
//       // busqueda('desarrollador backend trainee', '');
//       await busquedaBumeran('backend', '');
//       await busquedaBumeran('frontend', '');
//       await busquedaComputrabajo('desarrollador frontend', '');
//       // busqueda('desarrollador trainee', '');
//       // busqueda('desarrollador junior', '');
//       await busquedaComputrabajo('desarrollador backend', '');
//       // busqueda('desarrollador backend trainee', '');
//       // busqueda('desarrollador', '');
//       console.log('Finished');
//       console.log(new Date().toLocaleString());
//     },
//     null,
//     true
//   );
// };

const cronJobScrapper = async () => {
  console.log('Cleaning Database');
  cleanDatabase();
  console.log('Ejecutando...');
  console.log(new Date().toLocaleString());
  await busquedaComputrabajo('frontend', '');
  // await busquedaComputrabajo('backend', '');
  // await busquedaComputrabajo('fullstack', '');
  console.log('Finished CronJob');
  console.log(new Date().toLocaleString());
};

module.exports = { cronJobScrapper };
