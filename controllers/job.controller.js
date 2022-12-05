//Models
const { Job } = require('../models/jobModels');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const jobs = require('../scraper/data/ofertas_desarrollador_backend trainee_a2861b60-1a12-46bf-99af-e263c61c553d_1669932753460.json');

const getAllJobs = catchAsync(async (req, res, next) => {
  const jobs = await Job.findAll();

  res.status(200).json({
    status: 'succes',
    data: { jobs },
  });
});

const saveJobs = async (links, jobs) => {
  try {
    if (links.length === jobs.length) {
      for (let i = 0; i < jobs.length; i++) {
        const { name, company, location, contract, description } = jobs[i];
        const link = links[i];
        await Job.create({
          name,
          company,
          location,
          contract,
          description,
          link,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllJobs,
  saveJobs,
};
