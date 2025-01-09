import React from 'react';

export default async function page({params}: {params: {comments: string, id: string}}) {
interface Comment {
  
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  }

    const {id} = await params;
    const {comments} = await params;
    const url = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}/${comments}`);
    const data = await url.json();
    console.log(data);

  return (
    <div className='justify-self-center'>
        <h1 className='text-center'> Post No. {data[0].postId} </h1>
        <h1 className='text-center font-bold text-xl mt-4 mb-5'>Comments Section</h1>

      {data.map((comment: Comment) => (
        <div className='mb-4' key={comment.id}>
        <h1 className='text-xl font-bold text-center p-4 rounded-lg'>{comment.name}</h1>
        <div className='justify-self-center'>
        <p className='text-center bg-black text-white font-semibold w-[360px]'>{comment.email}</p>
        </div>
        </div>
      ))}
        
    </div>
  )
}