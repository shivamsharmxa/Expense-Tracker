

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddUsers = () => {
  const { register, handleSubmit, reset } = useForm();
  const [contributions, setContributions] = useState([]);

  const onSubmit = (data) => {
    setContributions([...contributions, data]);
    reset(); // Reset the form after each submission
  };

  return (
    <div>
      <form id='contributionForm' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-bold pb-4 text-xl'>Contribution Details</h1>
        <div className="grid gap-4">
          <div className="input-group">
            <input type="text" {...register('item')} placeholder='Item' className='form-input' />
          </div>
          <div className="input-group">
            <input type="text" {...register('contributor')} placeholder='Contributor' className='form-input' />
          </div>
          <div className='input-group'>
            <input type='text' {...register('contributionAmount')} placeholder='Contribution Amount' className='form-input' />
          </div>
          <div className="submit-btn">
            <button type="submit" className='border py-2 text-white bg-indigo-500 w-full'>Add Contribution</button>
          </div>
        </div>
      </form>

      <div className="contributors-list">
        <h2 className='font-bold pb-4 text-xl'>Contributors List</h2>
        <ul>
          {contributions.map((contribution, index) => (
            <li key={index}>
              <strong>Item:</strong> {contribution.item}, <strong>Contributor:</strong> {contribution.contributor}, <strong>Amount:</strong> {contribution.contributionAmount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddUsers;
