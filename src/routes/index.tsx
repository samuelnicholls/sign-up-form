import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<section className=" w-full">
			<div className="py-8 px-4 max-w-7xl grid bg-gray-900 min-h-screen h-full">
				<div className="bg-gray-800 shadow-2xl p-6 rounded-lg">
					<p className="text-xl text-white mb-4">Nicholls Development</p>
					<h1 className="text-2xl text-white font-bold mb-2">
						Create Your Account
					</h1>
					<p className="text-sm text-gray-300">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<form className="mt-4">
						<div>
							{/* <div>
                <label>Your Email</label>
                <input></input>
              </div> */}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
