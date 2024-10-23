const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    job_url: { type: String, required: true },
    cover_image: { type: String, required: true },
    company_logo: { type: String, required: true },
    company_name: { type: String, required: true },
    job_title: { type: String, required: true },
    location: { type: String, required: true },
});

module.exports = mongoose.model('Job', jobSchema);