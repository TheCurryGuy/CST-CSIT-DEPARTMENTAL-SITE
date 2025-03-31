const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { Faculty, Event } = require('./db');

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

const allowedOrigins = [
    'https://cst-csit.vercel.app',
    'http://localhost:5173'
];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }

    const vercelPreviewRegex = /^https:\/\/cst-csit-git-.+\.vercel\.app$/;
    if (vercelPreviewRegex.test(origin)) {
        return callback(null, true);
    }

    return callback(new Error(`Origin '${origin}' not allowed by CORS`));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'token',
    'X-Requested-With',
    'Accept',
    'Origin',
  ],
  exposedHeaders: [
    'Content-Disposition',
  ],
  credentials: true,
  maxAge: 86400,
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

app.get('/events', async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error: error.message });
    }
});

app.get('/events/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching event', error: error.message });
    }
});

app.post('/events', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        if (error.name === 'ValidationError') {
             return res.status(400).json({ message: 'Validation Error', errors: error.errors });
        }
        res.status(500).json({ message: 'Error creating event', error: error.message });
    }
});

app.put('/events/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found for update' });
        }
        res.status(200).json(updatedEvent);
    } catch (error) {
       if (error.name === 'ValidationError') {
             return res.status(400).json({ message: 'Validation Error on update', errors: error.errors });
        }
       res.status(500).json({ message: 'Error updating event', error: error.message });
    }
});

app.delete('/events/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found for deletion' });
        }
        res.status(200).json({ message: 'Event deleted successfully', _id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error: error.message });
    }
});


app.get('/', (req, res) => {
    res.send('Simple Faculty API is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});