const mongoose = require('mongoose');

const ResearchPaperSchema = new mongoose.Schema({
    title: { type: String, trim: true },
    authors: { type: String, trim: true },
    journal: { type: String, trim: true },
    link: { type: String, trim: true },
}, { _id: false });

const SocialLinksSchema = new mongoose.Schema({
    linkedin: { type: String, trim: true, default: '#' },
    twitter: { type: String, trim: true, default: '#' },
    website: { type: String, trim: true, default: '#' },
}, { _id: false });

const FacultySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    position: { type: String, trim: true },
    specialization: { type: String, trim: true },
    education: { type: String, trim: true },
    experience: { type: String, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    office: { type: String, trim: true },
    image: { type: String, trim: true },
    researchInterests: { type: [String], default: [] },
    publications: { type: [String], default: [] },
    socialLinks: { type: SocialLinksSchema, default: () => ({}) },
    department: { type: String, trim: true },
    researchPapers: { type: [ResearchPaperSchema], default: [] },
}, {
    timestamps: true,
});

const Faculty = mongoose.model('Faculty', FacultySchema);

module.exports = Faculty;