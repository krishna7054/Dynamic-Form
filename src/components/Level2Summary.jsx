import React from 'react';

const Level2Summary = ({ data, onReturn }) => {
  const {
    fullName,
    email,
    phoneNumber,
    position,
    relevantExperience,
    portfolioUrl,
    managementExperience,
    additionalSkills = [],
    interviewTime,
  } = data;

  const formatInterviewTime = (interviewTime) => {
    if (!interviewTime) return '';
    const formattedTime = new Date(interviewTime).toLocaleString();
    return formattedTime;
  };

  return (
    
    <div className=" mx-auto p-4  justify-center w-fit  rounded-xl bg-gradient-to-l from-slate-200 to-slate-200 text-slate-800 border border-slate-600 grid shadow-lg">
      <h2 className="text-xl font-bold mb-4">Job Application Summary</h2>
      <div className="mb-2"><strong>Full Name:</strong> {fullName}</div>
      <div className="mb-2"><strong>Email:</strong> {email}</div>
      <div className="mb-2"><strong>Phone Number:</strong> {phoneNumber}</div>
      <div className="mb-2"><strong>Position:</strong> {position}</div>
      {(position === 'Developer' || position === 'Designer') && (
        <div className="mb-2"><strong>Relevant Experience:</strong> {relevantExperience} years</div>
      )}
      {position === 'Designer' && (
        <div className="mb-2"><strong>Portfolio URL:</strong> {portfolioUrl}</div>
      )}
      {position === 'Manager' && (
        <div className="mb-2"><strong>Management Experience:</strong> {managementExperience}</div>
      )}
      <div className="mb-2"><strong>Additional Skills:</strong> {additionalSkills.length > 0 ? additionalSkills.join(', ') : 'None'}</div>
      <div className="mb-2"><strong>Preferred Interview Time:</strong> {formatInterviewTime(interviewTime)}</div>
      
      
   
    <div className="mt-4">
        <button className="px-4 py-2 bg-purple-400   my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#dee12f] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]" onClick={onReturn}>
          Return to Form
        </button>
      </div>
    </div>
  );
};

export default Level2Summary;
