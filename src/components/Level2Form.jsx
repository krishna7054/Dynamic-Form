import React, { useState } from 'react';

const Level2Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioUrl: '',
    managementExperience: '',
    additionalSkills: [],
    interviewTime: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = 'Full name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone number is required';
    if (!formData.position) errors.position = 'Position is required';
    if ((formData.position === 'Developer' || formData.position === 'Designer') && !formData.relevantExperience)
      errors.relevantExperience = 'Relevant experience is required';
    if (formData.position === 'Designer' && !formData.portfolioUrl) errors.portfolioUrl = 'Portfolio URL is required';
    if (formData.position === 'Manager' && !formData.managementExperience)
      errors.managementExperience = 'Management experience is required';
    if (formData.additionalSkills.length === 0) errors.additionalSkills = 'At least one skill must be selected';
    if (!formData.interviewTime) errors.interviewTime = 'Preferred interview time is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        additionalSkills: checked
          ? [...prevFormData.additionalSkills, value]
          : prevFormData.additionalSkills.filter((skill) => skill !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="max-w-md mx-auto p-4 rounded-lg bg-gradient-to-l from-slate-400 to-slate-300 text-slate-600 border border-slate-500 grid grid-col-2  shadow-md" onSubmit={handleSubmit}>
            <h3 className='p-1 font-bold text-xl flex justify-center'> Job Application Form</h3>
      <div className="mb-4">
        <label className="ml-2 block text-lg font-semibold mb-1">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Joe Doe"
          className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
      </div>
      <div className="mb-4">
        <label className="ml-2 block text-lg font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="exmaple@gmail.com"
          className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="ml-2 block text-lg font-semibold mb-1">Phone Number</label>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" 
          aria-describedby="helper-text-explanation" 
          name="phoneNumber"
          className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
      </div>
      <div className="mb-4">
        <label className="ml-2 block text-lg font-semibold mb-1">Applying for Position</label>
        <select
          name="position"
          className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={formData.position}
          onChange={handleChange}
        >
          <option value="">Select a position</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
        {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
      </div>
      {(formData.position === 'Developer' || formData.position === 'Designer') && (
        <div className="mb-4">
          <label className="ml-2 block text-lg font-semibold mb-1">Relevant Experience (Years)</label>
          <input
            type="number"
            name="relevantExperience"
            placeholder="0"
            className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formData.relevantExperience}
            onChange={handleChange}
          />
          {errors.relevantExperience && <p className="text-red-500 text-sm">{errors.relevantExperience}</p>}
        </div>
      )}
      {formData.position === 'Designer' && (
        <div className="mb-4">
          <label className="ml-2 block text-lg font-semibold mb-1">Portfolio URL</label>
          <input
            type="text"
            name="portfolioUrl"
            className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formData.portfolioUrl}
            onChange={handleChange}
          />
          {errors.portfolioUrl && <p className="text-red-500 text-sm">{errors.portfolioUrl}</p>}
        </div>
      )}
      {formData.position === 'Manager' && (
        <div className="mb-4">
          <label className="ml-2 block text-lg font-semibold mb-1">Management Experience</label>
          <input
            type="number"
            name="managementExperience"
            placeholder="0"
            className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formData.managementExperience}
            onChange={handleChange}
          />
          {errors.managementExperience && <p className="text-red-500 text-sm">{errors.managementExperience}</p>}
        </div>
      )}
      <div className="mb-4">
        <label className="ml-2 block text-lg font-semibold mb-1">Additional Skills</label>
        <div className="flex flex-wrap">
          {['JavaScript', 'CSS', 'Python'].map((skill) => (
            <label key={skill} className="mr-4 mb-2">
              <input
                type="checkbox"
                name="additionalSkills"
                value={skill}
                checked={formData.additionalSkills.includes(skill)}
                onChange={handleChange}
                className="mr-2"
              />
              {skill}
            </label>
          ))}
        </div>
        {errors.additionalSkills && <p className="text-red-500 text-sm">{errors.additionalSkills}</p>}
      </div>
      <div className="mb-4">
        <label className="ml-2 block text-lg font-semibold mb-1">Preferred Interview Time</label>
        <input
          type="datetime-local"
          name="interviewTime"
          className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={formData.interviewTime}
          onChange={handleChange}
        />
        {errors.interviewTime && <p className="text-red-500 text-sm">{errors.interviewTime}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500  py-2  my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
        Submit
      </button>
    </form>
  );
};

export default Level2Form;
