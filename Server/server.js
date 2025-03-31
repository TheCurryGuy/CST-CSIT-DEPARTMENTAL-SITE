const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Faculty = require('./db'); // Import the model

dotenv.config();

const PORT = 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

const app = express();

const corsOptions = {
  origin: [
    'https://cst-csit.vercel.app',
    'https://cst-csit-git-*.vercel.app', // Vercel preview deployments
    'http://localhost:5173'  // Keep localhost for development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'token',
    'X-Requested-With',
    'Accept',
    'Origin',
    'X-File-Name', // For file uploads
    'Content-Disposition', // For file downloads
    'X-CSRF-Token', // If using CSRF protection
    'X-HTTP-Method-Override' // For legacy systems
  ],
  exposedHeaders: [
    'Content-Disposition', // For file download prompts
    'X-Submission-ID', // Custom headers you might use
    'X-RateLimit-Limit', // If using rate limiting
    'X-RateLimit-Remaining'
  ],
  credentials: true,
  maxAge: 86400, // 24h preflight cache
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 
app.use(express.json());

app.get('/api/faculty', async (req, res) => {
    try {
        const facultyMembers = await Faculty.find().sort({ name: 1 });
        res.status(200).json({ success: true, count: facultyMembers.length, data: facultyMembers });
    } catch (error) {
        console.error("Error getting faculty:", error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

app.post('/api/faculty', async (req, res) => {
    try {
        const newFaculty = await Faculty.create(req.body);
        res.status(201).json({ success: true, data: newFaculty });
    } catch (error) {
        console.error("Error creating faculty:", error);
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }
        res.status(400).json({ success: false, message: error.message || 'Failed to create faculty' });
    }
});

app.get('/api/faculty/:id', async (req, res) => {
    try {
        const facultyMember = await Faculty.findById(req.params.id);
        if (!facultyMember) {
            return res.status(404).json({ success: false, message: 'Faculty member not found' });
        }
        res.status(200).json({ success: true, data: facultyMember });
    } catch (error) {
        console.error("Error getting faculty by ID:", error);
        if (error.kind === 'ObjectId') {
             return res.status(400).json({ success: false, message: 'Invalid ID format' });
        }
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

app.put('/api/faculty/:id', async (req, res) => {
    try {
        const updatedFaculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedFaculty) {
            return res.status(404).json({ success: false, message: 'Faculty member not found' });
        }
        res.status(200).json({ success: true, data: updatedFaculty });
    } catch (error) {
        console.error("Error updating faculty:", error);
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }
        if (error.kind === 'ObjectId') {
             return res.status(400).json({ success: false, message: 'Invalid ID format' });
        }
        res.status(400).json({ success: false, message: error.message || 'Failed to update faculty' });
    }
});

app.delete('/api/faculty/:id', async (req, res) => {
    try {
        const deletedFaculty = await Faculty.findByIdAndDelete(req.params.id);
        if (!deletedFaculty) {
            return res.status(404).json({ success: false, message: 'Faculty member not found' });
        }
        res.status(200).json({ success: true, message: 'Faculty member deleted', data: {} });
    } catch (error) {
        console.error("Error deleting faculty:", error);
        if (error.kind === 'ObjectId') {
             return res.status(400).json({ success: false, message: 'Invalid ID format' });
        }
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

app.get('/', (req, res) => {
    res.send('Simple Faculty API is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});