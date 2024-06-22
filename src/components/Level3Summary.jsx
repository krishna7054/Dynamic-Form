import React from 'react';

const Level3Summary = ({ data, additionalQuestions, onReturn }) => {
  const {
    fullName,
    email,
    surveyTopic,
    favoriteProgrammingLanguage,
    yearsOfExperience,
    exerciseFrequency,
    dietPreference,
    highestQualification,
    fieldOfStudy,
    feedback,
  } = data;

  return (
    <div className=" w-fit  mx-auto p-4 rounded-xl bg-gradient-to-l from-slate-200 to-slate-200 text-slate-800 border border-slate-600 shadow-lg">
    
      <h2 className="text-xl font-bold mb-4">Survey Summary</h2>
      <div className="mb-2"><strong>Full Name:</strong> {fullName}</div>
      <div className="mb-2"><strong>Email:</strong> {email}</div>
      <div className="mb-2"><strong>Survey Topic:</strong> {surveyTopic}</div>
      {surveyTopic === 'Technology' && (
        <>
          <div className="mb-2"><strong>Favorite Programming Language:</strong> {favoriteProgrammingLanguage}</div>
          <div className="mb-2"><strong>Years of Experience:</strong> {yearsOfExperience}</div>
        </>
      )}
      {surveyTopic === 'Health' && (
        <>
          <div className="mb-2"><strong>Exercise Frequency:</strong> {exerciseFrequency}</div>
          <div className="mb-2"><strong>Diet Preference:</strong> {dietPreference}</div>
        </>
      )}
      {surveyTopic === 'Education' && (
        <>
          <div className="mb-2"><strong>Highest Qualification:</strong> {highestQualification}</div>
          <div className="mb-2"><strong>Field of Study:</strong> {fieldOfStudy}</div>
        </>
      )}
      <div className="mb-2 "><strong>Feedback:</strong> {feedback}</div>
      {additionalQuestions && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Additional Questions:</h3>
          {additionalQuestions.map((question, index) => (
            <ul key={index} className="mb-2 list-disc list-inside space-y-1">
             <li><strong>{question.question}</strong></li> 
            </ul>
          ))}
        </div>
      )}

      
    
    <div className="mt-4">
        <button className="px-4 py-2 bg-purple-400   my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#dee12f] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]" onClick={onReturn}>
          Return to Form
        </button>
      </div>
    </div>
  );
};

export default Level3Summary;
