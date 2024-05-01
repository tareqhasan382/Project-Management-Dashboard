"use client"
import { dataStore } from '@/store/dataStore';
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const store = dataStore();
    const [formData, setFormData] = useState({
        title: '',
        state: 'PLANED'
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        store.addTask(formData)
        setFormData({
            title: '',
            state: 'PLANED'
          });
        onClose(); 
      };
     
  return (
    <>
      {isOpen && (
        <div className='fixed z-10 inset-0 overflow-y-auto flex items-center justify-center'>
          <div className='fixed inset-0 transition-opacity opacity-100 ' onClick={onClose}>
            <div className='absolute inset-0 bg-black opacity-80 '></div>
          </div>
          <div className='bg-white rounded-lg p-8 max-w-md mx-auto z-50 opacity-100 '>
            <div className='text-center'>
              <h2 className='text-lg font-semibold mb-4'>Create Task</h2>
              <div>
              <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='title' className='block text-sm font-medium text-gray-700'>
                  Title
                </label>
                <textarea
                   aria-multiline
                  type='text'
                  name='title'
                  id='title'
                  className='mt-1 p-2 block w-full rounded-md border-black border-[1px] shadow-sm sm:text-sm'
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mt-6 text-center opacity-100 flex flex-row justify-between w-full '>
            <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2'
                >
                  Submit
                </button>
              <button
                onClick={onClose}
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2'
              >
                Close
              </button>
            </div>
              </form>
              </div>
            </div>
          
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
