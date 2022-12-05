const dotenv = require('dotenv');

const { app } = require('./app');
const { saveJobs } = require('./controllers/job.controller');

// Utils
const { initModels } = require('./models/initModels');
const { db } = require('./utils/database.util');

const jobs = require('./scraper/data/ofertas_desarrollador_backend trainee_a2861b60-1a12-46bf-99af-e263c61c553d_1669932753460.json');
const links = require('./scraper/data/links_desarrollador_backend trainee_c71f1287-57b6-4f58-9b67-55304b7f6699_1669932753459.json');

dotenv.config({ path: './config.env' });

const startServer = async () => {
  try {
    await db.authenticate();

    // Establish the relations between models
    initModels();

    await db.sync();

    // Set server to listen
    const PORT = 4000;

    app.listen(PORT, () => {
      console.log('Express app running!');
    });
    saveJobs(links, jobs);
  } catch (error) {
    console.log(error);
  }
};

startServer();
