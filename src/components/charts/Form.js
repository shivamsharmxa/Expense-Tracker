import React from 'react'
import {useForm} from 'react-hook-form';
import List from './List';
import AddUsers from './AddUsers';

const Form = () => {

  const{register,handleSubmit,resetField} = useForm()
  const onSubmit=(data)=>{
    console.log(data)
  }
  return (
    <div className="form max-w-sm mx-auto w-96">
        
    <h1 className='font-bold pb-4 text-xl'>Expenses Details</h1>

    <form id='form' onSubmit={handleSubmit(onSubmit)}>
  <div className="grid gap-4">
    <div className="input-group">
      <input type="text" {...register('name')} placeholder='Name' className='form-input' />
    </div>
    <div className='input-group'> {/* Add the className attribute here */}
      <input type='text' {...register('item')} placeholder='Item' className='form-input' />
    </div>
    <div className="input-group">
      <input type="text" {...register('amount')} placeholder='Amount' className='form-input' />
    </div>
    <div className="submit-btn">
      <button type="submit" className='border py-2 text-white bg-indigo-500 w-full'>Add Details</button>
    </div>
  </div>
</form>


    <List></List>
    <AddUsers/>
    
</div>
)
}


export default Form