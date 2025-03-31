import React, { useState, useEffect, useCallback } from 'react';
import { FaEdit, FaTrashAlt, FaPlus, FaTimes, FaUserPlus, FaGlobe, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';


const API_BASE_URL = 'http://localhost:3000/api';

// --- Faculty Modal Component ---
const FacultyModal = ({ isOpen, onClose, onSubmit, initialData = null, mode }) => {
    const defaultFormData = {
        name: '', position: '', specialization: '', education: '', experience: '',
        email: '', phone: '', office: '', image: '', department: '',
        researchInterests: [], publications: [],
        socialLinks: { linkedin: '', twitter: '', website: '' },
        researchPapers: [],
    };

    const [formData, setFormData] = useState(defaultFormData);

    useEffect(() => {
        if (isOpen) {
            if (mode === 'edit' && initialData) {
                setFormData({
                    ...defaultFormData,
                    ...initialData,
                    socialLinks: { ...defaultFormData.socialLinks, ...initialData.socialLinks },
                    researchInterests: initialData.researchInterests ? [...initialData.researchInterests] : [],
                    publications: initialData.publications ? [...initialData.publications] : [],
                    researchPapers: initialData.researchPapers ? initialData.researchPapers.map(p => ({...p})) : [],
                });
            } else {
                setFormData(defaultFormData);
            }
        }
    }, [isOpen, mode, initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('socialLinks.')) {
            const linkName = name.split('.')[1];
            setFormData(prev => ({ ...prev, socialLinks: { ...prev.socialLinks, [linkName]: value } }));
        } else if (name === 'researchInterests' || name === 'publications') {
             setFormData(prev => ({ ...prev, [name]: value.split(',').map(item => item.trim()).filter(Boolean) }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

     const handleResearchPaperChange = (index, field, value) => {
         setFormData(prev => {
            const updatedPapers = [...prev.researchPapers];
            if (!updatedPapers[index]) updatedPapers[index] = { title: '', authors: '', journal: '', link: '' };
            updatedPapers[index] = { ...updatedPapers[index], [field]: value };
            return { ...prev, researchPapers: updatedPapers };
         });
    };

    const handleAddResearchPaper = () => {
         setFormData(prev => ({
            ...prev,
            researchPapers: [...prev.researchPapers, { title: '', authors: '', journal: '', link: '' }]
         }));
    };

    const handleRemoveResearchPaper = (index) => {
         setFormData(prev => ({
             ...prev,
             researchPapers: prev.researchPapers.filter((_, i) => i !== index)
         }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex justify-center items-start pt-8 pb-8 overflow-y-auto transition-opacity duration-300 ease-out" aria-modal="true" role="dialog">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl relative max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                <div className="flex justify-between items-center mb-6 border-b pb-3">
                     <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                        {mode === 'edit' ? <FaEdit size={20} className="mr-2 text-blue-600" /> : <FaUserPlus size={20} className="mr-2 text-green-600" />}
                        {mode === 'edit' ? 'Edit Faculty Member' : 'Add New Faculty Member'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 transition-colors"
                        aria-label="Close modal"
                    >
                        <FaTimes size={22} /> {/* Adjusted size slightly */}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Form fields remain the same, only icon components within them change */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                         <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required />
                         <InputField label="Position" name="position" value={formData.position} onChange={handleChange} />
                         <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                         <InputField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                         <InputField label="Department" name="department" value={formData.department} onChange={handleChange} />
                         <InputField label="Office" name="office" value={formData.office} onChange={handleChange} />
                         <InputField label="Image URL" name="image" type="url" value={formData.image} onChange={handleChange} placeholder="https://..." />
                         <InputField label="Specialization" name="specialization" value={formData.specialization} onChange={handleChange} />
                    </div>

                     <TextareaField label="Education" name="education" value={formData.education} onChange={handleChange} rows={2} />
                     <TextareaField label="Experience" name="experience" value={formData.experience} onChange={handleChange} rows={2} />
                     <InputField label="Research Interests" name="researchInterests" value={formData.researchInterests.join(', ')} onChange={handleChange} placeholder="AI, ML, Blockchain (comma-separated)" />
                     <TextareaField label="Publications" name="publications" value={formData.publications.join(',\n')} onChange={handleChange} rows={3} placeholder="Publication 1, Publication 2 (comma-separated...)" />

                    <fieldset className="border border-gray-300 p-4 rounded-md">
                        <legend className="text-sm font-medium text-gray-700 px-2">Social Links</legend>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3 mt-2">
                             {/* Use react-icons components */}
                             <InputField icon={<FaLinkedin size={16} className="text-blue-700" />} label="LinkedIn" name="socialLinks.linkedin" type="url" value={formData.socialLinks.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/..." small />
                             <InputField icon={<FaTwitter size={16} className="text-sky-500" />} label="Twitter" name="socialLinks.twitter" type="url" value={formData.socialLinks.twitter} onChange={handleChange} placeholder="https://twitter.com/..." small />
                             <InputField icon={<FaGlobe size={16} className="text-gray-600" />} label="Website" name="socialLinks.website" type="url" value={formData.socialLinks.website} onChange={handleChange} placeholder="https://..." small />
                        </div>
                    </fieldset>

                     <fieldset className="border border-gray-300 p-4 rounded-md">
                        <legend className="text-sm font-medium text-gray-700 px-2">Research Papers</legend>
                        <div className="space-y-4 mt-2">
                            {formData.researchPapers.map((paper, index) => (
                                <div key={index} className="border bg-gray-50/50 p-3 rounded-md space-y-2 relative group">
                                     <button
                                        type="button"
                                        onClick={() => handleRemoveResearchPaper(index)}
                                        className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                        aria-label="Remove paper"
                                    >
                                        <FaTrashAlt size={14} /> {/* Adjusted size */}
                                    </button>
                                     <InputField label="Title" value={paper.title} onChange={(e) => handleResearchPaperChange(index, 'title', e.target.value)} small />
                                     <InputField label="Authors" value={paper.authors} onChange={(e) => handleResearchPaperChange(index, 'authors', e.target.value)} small />
                                    <div className="grid grid-cols-2 gap-x-3">
                                        <InputField label="Journal" value={paper.journal} onChange={(e) => handleResearchPaperChange(index, 'journal', e.target.value)} small />
                                        <InputField label="Link" type="url" value={paper.link} onChange={(e) => handleResearchPaperChange(index, 'link', e.target.value)} small />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={handleAddResearchPaper}
                            className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                        >
                            <FaPlus size={14} className="mr-1" /> Add Research Paper
                        </button>
                    </fieldset>

                    <div className="flex justify-end pt-5 border-t mt-6 space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-colors font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`px-5 py-2 rounded-md text-white font-medium transition-colors flex items-center ${mode === 'edit' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}
                        >
                             {mode === 'edit' ? <FaEdit size={16} className="mr-2"/> : <FaPlus size={16} className="mr-2"/>}
                            {mode === 'edit' ? 'Update Member' : 'Add Member'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Helper components remain the same, they just render the icon passed as a prop
const InputField = ({ label, name, type = 'text', value, onChange, required, placeholder, icon = null, small = false }) => (
    <div>
        <label htmlFor={name} className={`block text-xs font-medium text-gray-600 mb-1 ${small ? '' : 'sm:text-sm'}`}>{label}{required && <span className="text-red-500 ml-1">*</span>}</label>
        <div className="relative">
             {icon && <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 flex items-center">{icon}</span>}
             <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className={`block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${icon ? 'pl-9' : 'px-3'} ${small ? 'py-1.5 text-sm' : 'py-2 sm:text-sm'}`}
            />
        </div>
    </div>
);

const TextareaField = ({ label, name, value, onChange, required, rows = 3, placeholder }) => (
     <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}{required && <span className="text-red-500 ml-1">*</span>}</label>
        <textarea
            name={name}
            id={name}
            rows={rows}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
    </div>
);


// --- Faculty Card Component ---
const FacultyCard = ({ member, onEdit, onDelete }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col border border-gray-200/80">
             <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center overflow-hidden">
                {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200/E2E8F0/A0AEC0?text=No+Image'; }} />
                ) : ( <span className="text-gray-400 text-sm">No Image</span> )}
            </div>

             <div className="p-5 flex-grow space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 leading-tight">{member.name}</h3>
                <p className="text-indigo-600 text-sm font-medium">{member.position}</p>
                <p className="text-gray-600 text-xs">{member.department || 'N/A'}</p>

                <div className="text-xs text-gray-500 pt-2 space-y-1">
                     <p className="flex items-center">
                         <MdEmail className="h-3.5 w-3.5 mr-1.5 text-gray-400 flex-shrink-0" />
                         <span className="truncate">{member.email}</span> {/* Added truncate */}
                    </p>
                    {member.phone && (
                         <p className="flex items-center">
                             <MdPhone className="h-3.5 w-3.5 mr-1.5 text-gray-400 flex-shrink-0" />
                             {member.phone}
                        </p>
                    )}
                 </div>

                 {(member.socialLinks?.linkedin || member.socialLinks?.twitter || member.socialLinks?.website) && (
                     <div className="flex space-x-3 pt-2">
                         {member.socialLinks.linkedin && member.socialLinks.linkedin !== '#' && (
                            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors" aria-label="LinkedIn Profile"> <FaLinkedin size={16} /> </a>
                         )}
                         {member.socialLinks.twitter && member.socialLinks.twitter !== '#' && (
                            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-700 transition-colors" aria-label="Twitter Profile"> <FaTwitter size={16} /> </a>
                         )}
                         {member.socialLinks.website && member.socialLinks.website !== '#' && (
                            <a href={member.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Personal Website"> <FaGlobe size={16} /> </a>
                         )}
                    </div>
                 )}
            </div>

             <div className="p-3 bg-gray-50 border-t border-gray-200/80 flex justify-end space-x-3">
                <button onClick={() => onEdit(member)} className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full transition-colors duration-150" aria-label={`Edit ${member.name}`}>
                    <FaEdit size={16} />
                </button>
                <button onClick={() => onDelete(member._id)} className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-full transition-colors duration-150" aria-label={`Delete ${member.name}`}>
                     <FaTrashAlt size={15} /> {/* Adjusted size slightly */}
                </button>
            </div>
        </div>
    );
};


// --- Main Page Component ---
const FacultyManagementPage = () => {
    // State and logic remain the same
    const [facultyList, setFacultyList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [currentFaculty, setCurrentFaculty] = useState(null);

    const fetchFaculty = useCallback(async () => {
        setLoading(true); setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/faculty`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            if (data.success) setFacultyList(data.data || []);
            else throw new Error(data.message || 'Failed to fetch faculty');
        } catch (err) {
            console.error("Fetch error:", err); setError(err.message); setFacultyList([]);
        } finally { setLoading(false); }
    }, []);

    useEffect(() => { fetchFaculty(); }, [fetchFaculty]);

    const handleAddClick = () => { setModalMode('add'); setCurrentFaculty(null); setIsModalOpen(true); };
    const handleEditClick = (facultyMember) => { setModalMode('edit'); setCurrentFaculty(facultyMember); setIsModalOpen(true); };
    const handleCloseModal = () => { setIsModalOpen(false); setCurrentFaculty(null); };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this faculty member?')) {
            setLoading(true);
            try {
                 const response = await fetch(`${API_BASE_URL}/faculty/${id}`, { method: 'DELETE' });
                 const data = await response.json();
                 if (!response.ok || !data.success) throw new Error(data.message || 'Failed to delete');
                 fetchFaculty();
            } catch (err) {
                console.error("Delete error:", err); setError(err.message); setLoading(false);
            }
        }
    };

    const handleModalSubmit = async (formData) => {
        const url = modalMode === 'edit' ? `${API_BASE_URL}/faculty/${currentFaculty._id}` : `${API_BASE_URL}/faculty`;
        const method = modalMode === 'edit' ? 'PUT' : 'POST';
        if (!formData.name || !formData.email) { alert("Name and Email are required."); return; }

        setLoading(true); setError(null);
        try {
            const response = await fetch(url, { method: method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
            const data = await response.json();
            if (!response.ok || !data.success) throw new Error(data.message || `Failed to ${modalMode}`);
            handleCloseModal(); fetchFaculty();
        } catch (err) {
            console.error(`${modalMode} error:`, err); setError(err.message); alert(`Error: ${err.message}`); setLoading(false);
        }
    };

    return (
        <div className="container mt-40 mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-200">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Faculty Directory</h1>
                <button
                    onClick={handleAddClick}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-md inline-flex items-center shadow-sm hover:shadow-md transition-all duration-200"
                >
                    <FaPlus size={16} className="mr-2" /> {/* Use FaPlus */}
                    Add Member
                </button>
            </div>

            {loading && (
                <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                    <span className="ml-3 text-gray-600">Loading faculty...</span>
                </div>
            )}

            {!loading && error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
             )}

            {!loading && !error && facultyList.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {facultyList.map(member => (
                        <FacultyCard key={member._id} member={member} onEdit={handleEditClick} onDelete={handleDelete} />
                    ))}
                </div>
            )}

             {!loading && !error && facultyList.length === 0 && (
                 <div className="text-center py-16">
                      {/* Using FaUserPlus for empty state */}
                     <FaUserPlus className="mx-auto h-12 w-12 text-gray-300" />
                     <h3 className="mt-2 text-sm font-medium text-gray-900">No faculty members</h3>
                     <p className="mt-1 text-sm text-gray-500">Get started by adding a new faculty member.</p>
                     <div className="mt-6">
                         <button
                            onClick={handleAddClick}
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <FaPlus size={16} className="-ml-1 mr-2" /> {/* Use FaPlus */}
                            Add Member
                        </button>
                    </div>
                 </div>
             )}

            <FacultyModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleModalSubmit}
                initialData={currentFaculty}
                mode={modalMode}
            />
        </div>
    );
};

export default FacultyManagementPage;