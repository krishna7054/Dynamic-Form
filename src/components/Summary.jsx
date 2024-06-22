import React from 'react';

const Summary = ({ data, onReturn }) => {
  const renderSummary = () => {
    // Logic to render summary based on data structure
    return (
      <div className="  justify-center w-fit mx-auto p-2 rounded-xl bg-gradient-to-l from-slate-200 to-slate-200 text-slate-800 border border-slate-600 grid shadow-lg">
        {/* Render fields based on data */}
        <h2 className="text-xl font-bold mb-4">Form Summary</h2>
        <div className="mb-2"><strong>Name:</strong> {data.name}</div>
        <div className="mb-2"><strong>Email:</strong> {data.email}</div>
        <div className="mb-2"><strong>Age:</strong> {data.age}</div>
        {data.attendingWithGuest && (
          <div className="mb-2"><strong>Guest Name:</strong> {data.guestName}</div>
        )}

<div className="mt-4">
        <button className="px-4 py-2 bg-purple-400   my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#dee12f] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]" onClick={onReturn}>
          Return to Form
        </button>
      </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      {renderSummary()}
      
    </div>
  );
};

export default Summary;
