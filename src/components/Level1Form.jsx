import React, { useState } from 'react';

const Level1Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.age) errors.age = 'Age is required';
    else if (isNaN(formData.age) || formData.age <= 0) errors.age = 'Age must be a number greater than 0';
    if (formData.attendingWithGuest === 'Yes' && !formData.guestName) errors.guestName = 'Guest name is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="max-w-md mx-auto p-4 rounded-lg bg-gradient-to-l from-slate-400 to-slate-300 text-slate-600 border border-slate-500 grid grid-col-2  shadow-md " onSubmit={handleSubmit}>
      <h3 className='p-1 font-bold text-xl flex justify-center'>Event Registration Form</h3>
      <div className="mb-4">
        <label className="ml-2 block text-lg font-semibold mb-1">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Joe Doe"
          className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm "
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
        <label className="ml-2 block text-lg font-semibold mb-1">Age</label>
        <input
          type="number"
          name="age"
          placeholder="18"
          className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
      </div>
      <div className="mb-4">
        <label className="ml-2 block text-lg font-semibold mb-1">Are you attending with a guest?</label>
        <select
          name="attendingWithGuest"
          className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full  placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 "
          value={formData.attendingWithGuest}
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
      {formData.attendingWithGuest === 'Yes' && (
        <div className="mb-4">
          <label className="ml-2 block text-lg font-semibold mb-1">Guest Name</label>
          <input
            type="text"
            name="guestName"
            placeholder="Jenifer"
            className="w-full px-3 py-2 block  text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={formData.guestName}
            onChange={handleChange}
          />
          {errors.guestName && <p className="text-red-500 text-sm">{errors.guestName}</p>}
        </div>
      )}
      <button type="submit" className="w-full bg-blue-500  py-2  my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
        Submit
      </button>
    </form>
  );
};

export default Level1Form;
