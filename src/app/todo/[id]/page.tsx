import React from 'react';

export default async function page({params}: {params: {id: string}}) {
interface Todo{
        userId: number,
        id: number,
        title: string,
        completed: boolean
      }

 const {id} = params;
 const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
 const data: Todo = await response.json();
 const {completed} = data;


 return (
     <div>
      <h2 className='text-center'> Todo No. {data.id}</h2>
      <br /><br />
       <h1 className='text-center font-bold text-xl'>Title: {data.title}</h1>
       <p className='text-center'>Status: <span className= {(completed == true) ? 'text-green-600 font-bold' : `text-red-700 font-bold`}>{`${completed}`.toUpperCase()}</span></p>
     </div>
 )
}

