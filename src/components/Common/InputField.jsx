import React from 'react';

const InputField = ({ label, id, type = 'text', value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700">{label}</label>
      <input 
        id={id} 
        type={type} 
        value={value} 
        onChange={onChange} 
        className={`border rounded px-3 py-2 w-full ${error ? 'border-red-500' : ''}`} 
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
