import React from 'react';
import Link from 'next/link';

export default async function page({params}: {params: {id: string}}) {
    const {id} = params;
    const url = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await url.json();
    console.log(data);

  return (
    <div className='justify-self-center'>
        <h1 className='text-center'> Post No. {data.id} </h1>
        <h1 className='text-xl bg-black text-white font-bold text-center p-4 rounded-lg'>{data.title}</h1>
        <div className='justify-self-center'>
        <p className='text-center mt-4 font-semibold w-[360px]'>{data.body}</p>

        <Link href={`${id}/comments`}>
        <h1 className='bg-blue-700 hover:bg-blue-800 p-4 rounded-lg text-white text-center mt-4'>Comments</h1>
        </Link>
        </div>
    </div>
  )
}