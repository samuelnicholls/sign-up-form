import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@ariakit/react";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="p-2">
			<h3>Welcome Home!</h3>
			<Button
				onClick={() => console.log("Clicked Button")}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
			>
				Button Here
			</Button>
		</div>
	);
}
