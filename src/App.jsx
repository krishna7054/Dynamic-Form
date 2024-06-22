import React, { useState } from 'react';
import Level1Form from './components/Level1Form';
import Level2Form from './components/Level2Form';
import Level3Form from './components/Level3Form';
import Summary from './components/Summary';
import Level2Summary from './components/Level2Summary';
import Level3Summary from './components/Level3Summary';

const App = () => {
  const [formData, setFormData] = useState(null);
  const [formLevel, setFormLevel] = useState(1);
  const [additionalQuestions, setAdditionalQuestions] = useState(null);

  const handleFormSubmit = (data, additionalQuestions = null) => {
    setFormData(data);
    setAdditionalQuestions(additionalQuestions);
  };

  const handleReturnToForm = () => {
    setFormData(null);
    setAdditionalQuestions(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Dynamic Form Levels</h1>
      <div className="mb-4 text-center">
        <button
          className={`px-4 py-2 ${formLevel === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-full mx-2`}
          onClick={() => setFormLevel(1)}
        >
          Level 1
        </button>
        <button
          className={`px-4 py-2 ${formLevel === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-full mx-2`}
          onClick={() => setFormLevel(2)}
        >
          Level 2
        </button>
        <button
          className={`px-4 py-2 ${formLevel === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-full mx-2`}
          onClick={() => setFormLevel(3)}
        >
          Level 3
        </button>
      </div>
      {!formData && formLevel === 1 && <Level1Form onSubmit={handleFormSubmit} />}
      {!formData && formLevel === 2 && <Level2Form onSubmit={handleFormSubmit} />}
      {!formData && formLevel === 3 && <Level3Form onSubmit={handleFormSubmit} />}
      {formData && formLevel === 1 && (
        <Summary data={formData} onReturn={handleReturnToForm} />
      )}
      {formData && formLevel === 2 && (
        <Level2Summary data={formData} onReturn={handleReturnToForm} />
      )}
      {formData && formLevel === 3 && (
        <Level3Summary data={formData} additionalQuestions={additionalQuestions} onReturn={handleReturnToForm} />
      )}
    </div>
  );
};

export default App;
