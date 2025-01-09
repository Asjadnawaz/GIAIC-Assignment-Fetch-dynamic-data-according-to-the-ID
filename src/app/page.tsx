import Link from "next/link";

export default async function Home() {
	const url = await fetch('https://jsonplaceholder.typicode.com/todos');
	const postsUrl = await fetch('https://jsonplaceholder.typicode.com/posts');
	const postUrlresponse = await postsUrl.json();
	const response = await url.json();
	console.log(postUrlresponse);

	return (

		<main>
			<h1 className="bg-slate-800 text-white text-center font-semibold p-1">Class 14 Assignment - Fetch dynamic data according to the ID</h1>
			<br />
		<div className="grid grid-cols-12 gap-4">
			<div className="col-span-5 justify-around mx-5">
				<h1 className="text-2xl text-center p-4 mt-2 bg-black text-white font-bold mb-4 font-sans">Todo List</h1>
				{response.map((todo: any) => (
					<div className="text-xl font-bold text-center mb-2" key={todo.id}>
						<Link className="h-screen hover:text-blue-700" href={`/todo/${todo.id}`}>
							<h1>{todo.title}</h1>
							<p></p>
						</Link>
					</div>
				))}
			</div>

			<div className="col-span-7 mx-5">
				<h1 className="text-2xl text-center p-4 mt-2 bg-black text-white font-bold mb-4 font-sans">Posts</h1>
				{postUrlresponse.map((post: any) => (
					<div className="text-xl font-bold text-center mb-2" key={post.id}>
						<Link className="h-screen hover:text-green-700" href={`/posts/${post.id}`}>
							<h1>{post.title}</h1>
							<p></p>
						</Link>
					</div>
				))}
			</div>
		</div>
		</main>
	);
}
