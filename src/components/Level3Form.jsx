import React, { useState, useEffect } from 'react';

const Level3Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteProgrammingLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (formData.surveyTopic) {
      fetch(`https://opentdb.com/api.php?amount=5&category=${getCategoryID(formData.surveyTopic)}&type=multiple`)
        .then((response) => response.json())
        .then((data) => {
          const questions = data.results.map((item) => ({
            question: item.question,
            answer: '',
          }));
          setAdditionalQuestions(questions);
        });
    }
  }, [formData.surveyTopic]);

  const getCategoryID = (topic) => {
    switch (topic) {
      case 'Technology':
        return 18; // Category ID for Computers
      case 'Health':
        return 17; // Category ID for Science & Nature
      case 'Education':
        return 9; // Category ID for General Knowledge
      default:
        return 9; // Default category
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = 'Full name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.surveyTopic) errors.surveyTopic = 'Survey topic is required';
    if (formData.surveyTopic === 'Technology' && !formData.favoriteProgrammingLanguage)
      errors.favoriteProgrammingLanguage = 'Favorite programming language is required';
    if (formData.surveyTopic === 'Technology' && !formData.yearsOfExperience)
      errors.yearsOfExperience = 'Years of experience is required';
    if (formData.surveyTopic === 'Health' && !formData.exerciseFrequency)
      errors.exerciseFrequency = 'Exercise frequency is required';
    if (formData.surveyTopic === 'Health' && !formData.dietPreference) errors.dietPreference = 'Diet preference is required';
    if (formData.surveyTopic === 'Education' && !formData.highestQualification)
      errors.highestQualification = 'Highest qualification is required';
    if (formData.surveyTopic === 'Education' && !formData.fieldOfStudy) errors.fieldOfStudy = 'Field of study is required';
    if (!formData.feedback || formData.feedback.length < 50) errors.feedback = 'Feedback must be at least 50 characters long';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdditionalQuestionChange = (index, value) => {
    setAdditionalQuestions((prevQuestions) =>
      prevQuestions.map((question, i) =>
        i === index ? { ...question, answer: value } : question
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData, additionalQuestions);
    }
  };

  return (
    <form className="max-w-md mx-auto p-4 rounded-lg bg-gradient-to-l from-slate-400 to-slate-300 text-slate-600 border border-slate-500 grid grid-col-2  shadow-md" onSubmit={handleSubmit}>
      <h3 className='p-1 font-bold text-xl flex justify-center'> Survey Form</h3>
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
        <label className="ml-2 block text-lg font-semibold mb-1">Survey Topic</label>
        <select
          name="surveyTopic"
          className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={formData.surveyTopic}
          onChange={handleChange}
        >
          <option value="">Select a topic</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
        {errors.surveyTopic && <p className="text-red-500 text-sm">{errors.surveyTopic}</p>}
      </div>
      {formData.surveyTopic === 'Technology' && (
        <>
          <div className="mb-4">
            <label className="ml-2 block text-lg font-semibold mb-1">Favorite Programming Language</label>
            <select
              name="favoriteProgrammingLanguage"
              className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formData.favoriteProgrammingLanguage}
              onChange={handleChange}
            >
              <option value="">Select a language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
            </select>
            {errors.favoriteProgrammingLanguage && <p className="text-red-500 text-sm">{errors.favoriteProgrammingLanguage}</p>}
          </div>
          <div className="mb-4">
            <label className="ml-2 block text-lg font-semibold mb-1">Years of Experience</label>
            <input
              type="number"
              name="yearsOfExperience"
              placeholder="0"
              className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            />
            {errors.yearsOfExperience && <p className="text-red-500 text-sm">{errors.yearsOfExperience}</p>}
          </div>
        </>
      )}
      {formData.surveyTopic === 'Health' && (
        <>
          <div className="mb-4">
            <label className="ml-2 block text-lg font-semibold mb-1">Exercise Frequency</label>
            <select
              name="exerciseFrequency"
              className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formData.exerciseFrequency}
              onChange={handleChange}
            >
              <option value="">Select frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Rarely">Rarely</option>
            </select>
            {errors.exerciseFrequency && <p className="text-red-500 text-sm">{errors.exerciseFrequency}</p>}
          </div>
          <div className="mb-4">
            <label className="ml-2 block text-lg font-semibold mb-1">Diet Preference</label>
            <select
              name="dietPreference"
              className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formData.dietPreference}
              onChange={handleChange}
            >
              <option value="">Select preference</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
            {errors.dietPreference && <p className="text-red-500 text-sm">{errors.dietPreference}</p>}
          </div>
        </>
      )}
      {formData.surveyTopic === 'Education' && (
        <>
          <div className="mb-4">
            <label className="ml-2 block text-lg font-semibold mb-1">Highest Qualification</label>
            <select
              name="highestQualification"
              className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formData.highestQualification}
              onChange={handleChange}
            >
              <option value="">Select qualification</option>
              <option value="High School">High School</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
            {errors.highestQualification && <p className="text-red-500 text-sm">{errors.highestQualification}</p>}
          </div>
          <div className="mb-4">
            <label className="ml-2 block text-lg font-semibold mb-1">Field of Study</label>
            <input
              type="text"
              name="fieldOfStudy"
              placeholder="Information Technology"
              className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              value={formData.fieldOfStudy}
              onChange={handleChange}
            />
            {errors.fieldOfStudy && <p className="text-red-500 text-sm">{errors.fieldOfStudy}</p>}
          </div>
        </>
      )}
      <div className="mb-4">
        <label className="ml-2 block text-lg font-semibold mb-1">Feedback</label>
        <textarea
          name="feedback"
          className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={formData.feedback}
          onChange={handleChange}
        />
        {errors.feedback && <p className="text-red-500 text-sm">{errors.feedback}</p>}
      </div>
      {additionalQuestions.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2">Additional Questions</h3>
          {additionalQuestions.length > 0 && (
        <div className="mb-4">
         
          {additionalQuestions.map((question, index) => (
            <ul key={index} className="mb-4 list-disc list-inside space-y-1 ">
              <li className="ml-2  text-lg font-semibold mb-1">{question.question}</li>
              
            </ul>
          ))}
        </div>
      )}
        </div>
      )}
      <button type="submit" className="w-full bg-blue-500  py-2  my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
        Submit
      </button>
    </form>
  );
};

export default Level3Form;