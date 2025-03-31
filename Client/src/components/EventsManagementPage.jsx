import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaTimes } from 'react-icons/fa';

const API_BASE_URL = 'https://cst-csit-server.vercel.app';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 dark:bg-opacity-70 backdrop-blur-sm">
             {/* Modal background and text color */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                     // Close icon color
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white text-xl"
                    aria-label="Close modal"
                >
                    <FaTimes />
                </button>
                 {/* Modal title color */}
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{title}</h2>
                {children}
            </div>
        </div>
    );
};

const EventPage = () => {
    const [events, setEvents] = useState([]);
    const [groupedEvents, setGroupedEvents] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [formData, setFormData] = useState({
        title: '', date: '', time: '', location: '', description: '',
        image: '', attendees: '', category: '', year: '', semester: 'odd',
    });
    const [formError, setFormError] = useState('');

    const fetchEvents = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_BASE_URL}/events`);
            const data = response.data;
            setEvents(data);

            const grouped = data.reduce((acc, event) => {
                const year = event.year;
                if (!acc[year]) {
                    acc[year] = [];
                }
                acc[year].push(event);
                acc[year].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                return acc;
            }, {});

            const sortedYears = Object.keys(grouped).sort((a, b) => b - a);
            const sortedGroupedEvents = {};
            sortedYears.forEach(year => {
                sortedGroupedEvents[year] = grouped[year];
            });

            setGroupedEvents(sortedGroupedEvents);

        } catch (e) {
            console.error("Failed to fetch events:", e);
            const message = e.response?.data?.message || e.message;
            setError(`Failed to load events: ${message}. Is the backend server running?`);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    const handleOpenAddModal = () => {
        setCurrentEvent(null);
        setFormData({
            title: '', date: '', time: '', location: '', description: '',
            image: '', attendees: '', category: '', year: '', semester: 'odd'
        });
        setFormError('');
        setIsAddModalOpen(true);
    };

    const handleOpenEditModal = (event) => {
        setCurrentEvent(event);
        setFormData({
            title: event.title || '',
            date: event.date || '',
            time: event.time || '',
            location: event.location || '',
            description: event.description || '',
            image: event.image || '',
            attendees: event.attendees || '',
            category: event.category || '',
            year: event.year || '',
            semester: event.semester || 'odd',
        });
        setFormError('');
        setIsEditModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setCurrentEvent(null);
        setFormError('');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        setFormError('');
        if (!formData.year || !formData.title || !formData.date || !formData.time || !formData.location || !formData.description || !formData.category || !formData.semester) {
            setFormError('Please fill in all required fields (Year, Title, Date, Time, Location, Description, Category, Semester).');
            return;
        }

        const payload = {
            ...formData,
            year: parseInt(formData.year, 10),
            attendees: formData.attendees ? parseInt(formData.attendees, 10) : undefined,
        };

        try {
            await axios.post(`${API_BASE_URL}/events`, payload);
            handleCloseModal();
            fetchEvents();
        } catch (e) {
            console.error("Failed to add event:", e);
            const message = e.response?.data?.message || e.response?.data?.errors ? JSON.stringify(e.response.data.errors) : e.message;
            setFormError(`Failed to add event: ${message}`);
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        if (!currentEvent?._id) return;
        setFormError('');

         if (!formData.year || !formData.title || !formData.date || !formData.time || !formData.location || !formData.description || !formData.category || !formData.semester) {
            setFormError('Please fill in all required fields (Year, Title, Date, Time, Location, Description, Category, Semester).');
            return;
        }

         const payload = {
            ...formData,
            year: parseInt(formData.year, 10),
            attendees: formData.attendees ? parseInt(formData.attendees, 10) : undefined,
        };

        try {
            await axios.put(`${API_BASE_URL}/events/${currentEvent._id}`, payload);
            handleCloseModal();
            fetchEvents();
        } catch (e) {
            console.error("Failed to update event:", e);
            const message = e.response?.data?.message || e.response?.data?.errors ? JSON.stringify(e.response.data.errors) : e.message;
            setFormError(`Failed to update event: ${message}`);
        }
    };

    const handleDelete = async (eventId) => {
        if (!window.confirm('Are you sure you want to delete this event?')) {
            return;
        }
        try {
            await axios.delete(`${API_BASE_URL}/events/${eventId}`);
            fetchEvents();
        } catch (e) {
            console.error("Failed to delete event:", e);
            const message = e.response?.data?.message || e.message;
            setError(`Failed to delete event: ${message}`);
        }
    };

    // Loading and error state colors
    if (loading) return <div className="text-center p-10 text-gray-700 dark:text-gray-300">Loading events...</div>;
    if (error) return <div className="text-center p-10 text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 rounded">{error}</div>;

    return (

        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-[70vh] container">
            <div className="flex justify-between items-center mb-8">
                 {/* Page Title */}
                <h1 className="text-3xl font-bold text-gray-800 dark:text-blue-100">Event Management</h1>
                 {/* Add Button */}
                <button
                    onClick={handleOpenAddModal}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-150 ease-in-out"
                >
                    <FaPlus className="mr-2" />
                    Add New Event
                </button>
            </div>

             {/* No events message */}
            {Object.keys(groupedEvents).length === 0 && !loading && (
                 <p className="text-center text-gray-500 dark:text-gray-400">No events found. Add one!</p>
            )}

            {Object.entries(groupedEvents).map(([year, yearEvents]) => (
                <div key={year} className="mb-10">
                     {/* Year heading */}
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-blue-200 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{year}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {yearEvents.map(event => (
                             // Card background and shadow
                            <div key={event._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg dark:shadow-blue-900/30 overflow-hidden flex flex-col">
                                {event.image && (
                                    <img
                                        src={event.image.startsWith('/') ? event.image : `/placeholder.svg?height=200&width=300`}
                                        alt={event.title}
                                        className="w-full h-48 object-cover"
                                        onError={(e) => { e.target.onerror = null; e.target.src='/placeholder.svg?height=200&width=300' }}
                                    />
                                )}
                                <div className="p-4 flex flex-col flex-grow">
                                     {/* Card Title */}
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
                                     {/* Card Sub-text */}
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1"><strong>Date:</strong> {event.date}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1"><strong>Time:</strong> {event.time}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1"><strong>Location:</strong> {event.location}</p>
                                     {/* Card Description */}
                                    <p className="text-sm text-gray-700 dark:text-gray-300 my-2 flex-grow">{event.description}</p>
                                     {/* Card Footer Info */}
                                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <span>Category: {event.category}</span> | <span>Semester: {event.semester}</span> | <span>Attendees: {event.attendees ?? 'N/A'}</span>
                                    </div>
                                     {/* Card Actions (Edit/Delete) */}
                                    <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-600 flex justify-end space-x-3">
                                        <button
                                            onClick={() => handleOpenEditModal(event)}
                                             // Edit icon color
                                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-lg transition duration-150 ease-in-out"
                                            aria-label={`Edit ${event.title}`}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(event._id)}
                                             // Delete icon color
                                            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-lg transition duration-150 ease-in-out"
                                            aria-label={`Delete ${event.title}`}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Modal uses the Modal component defined above which includes dark styles */}
            <Modal
                isOpen={isAddModalOpen || isEditModalOpen}
                onClose={handleCloseModal}
                title={isEditModalOpen ? 'Edit Event' : 'Add New Event'}
            >
                <form onSubmit={isEditModalOpen ? handleEditSubmit : handleAddSubmit}>
                     {/* Form error message styling */}
                    {formError && <p className="mb-4 text-sm text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/40 p-2 rounded border border-red-300 dark:border-red-600">{formError}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {/* Form Fields */}
                        {[
                            { name: 'title', label: 'Title', type: 'text', required: true },
                            { name: 'year', label: 'Year', type: 'number', required: true },
                            { name: 'date', label: 'Date', type: 'text', placeholder: 'e.g., September 15, 2024', required: true },
                            { name: 'time', label: 'Time', type: 'text', placeholder: 'e.g., 10:00 AM - 4:00 PM', required: true },
                            { name: 'location', label: 'Location', type: 'text', required: true },
                            { name: 'category', label: 'Category', type: 'text', required: true },
                            { name: 'semester', label: 'Semester', type: 'select', required: true, options: [{ value: 'odd', text: 'Odd' }, { value: 'even', text: 'Even' }] },
                            { name: 'attendees', label: 'Attendees', type: 'number' },
                            { name: 'image', label: 'Image URL', type: 'text', placeholder: '/placeholder.svg?height=400&width=600', span: 2 },
                            { name: 'description', label: 'Description', type: 'textarea', required: true, span: 2 }
                        ].map(field => (
                            <div key={field.name} className={`mb-2 ${field.span === 2 ? 'md:col-span-2' : ''}`}>
                                 {/* Form label styling */}
                                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {field.label} {field.required && <span className="text-red-500 dark:text-red-400">*</span>}
                                </label>
                                {field.type === 'textarea' ? (
                                    <textarea name={field.name} id={field.name} rows="4" value={formData[field.name]} onChange={handleInputChange} required={field.required}
                                         // Input/Textarea styling
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 placeholder-gray-400 dark:placeholder-gray-500"
                                    ></textarea>
                                ) : field.type === 'select' ? (
                                    <select name={field.name} id={field.name} value={formData[field.name]} onChange={handleInputChange} required={field.required}
                                         // Select styling
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                                    >
                                        {field.options.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>)}
                                    </select>
                                ) : (
                                    <input type={field.type} name={field.name} id={field.name} placeholder={field.placeholder} value={formData[field.name]} onChange={handleInputChange} required={field.required}
                                         // Input/Textarea styling
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 placeholder-gray-400 dark:placeholder-gray-500"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Modal Action Buttons */}
                    <div className="flex justify-end space-x-3 mt-6">
                         {/* Cancel Button */}
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
                        >
                            Cancel
                        </button>
                         {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
                        >
                            {isEditModalOpen ? 'Update Event' : 'Add Event'}
                        </button>
                    </div>
                </form>
            </Modal>

        </div>
    );
};

export default EventPage;