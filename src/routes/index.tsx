import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { TextInput } from "../components/TextInput";
import { FieldInfo } from "../components/FieldInfo";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const form = useForm({
		defaultValues: {
			email: "",
			fullName: "ss",
		},
		onSubmit: async ({ value }) => {
			console.log("value", value);
		},
	});

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
					<form
						className="mt-4"
						onSubmit={(e) => {
							e.preventDefault();
							e.stopPropagation();
							form.handleSubmit();
						}}
					>
						<div className="flex gap-6 flex-col">
							{/* <TextInput label="Your email" id="email" placeholder="name@company.com" type="email" onChange={() => console.log("sdsd")} /> */}
							<form.Field
								name="fullName"
								children={(field) => (
									<>
										<TextInput
											id={field.name}
											label="Full Name"
											value={field.state.value}
											placeholder="e.g. Bonnie Green"
											type="text"
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
										/>
										<FieldInfo field={field} />
									</>
								)}
							/>
						</div>
						<form.Subscribe
							selector={(state) => [state.canSubmit, state.isSubmitting]}
							children={([canSubmit, isSubmitting]) => (
								<>
									<button
										className="mt-6 bg-blue-600 text-white w-full rounded-lg py-2 px-4 font-medium"
										type="submit"
										disabled={!canSubmit}
									>
										{isSubmitting ? "..." : "Create an Account"}
									</button>
									<button type="reset" onClick={() => form.reset()}>
										Reset
									</button>
								</>
							)}
						/>
					</form>
				</div>
			</div>
		</section>
	);
}
