export type TextInputProps = {
	label: string;
	id: string;
	placeholder: string;
	type: "email" | "text";
	onChange: any;
	onBlur: any;
	value: string;
};

export const TextInput = ({
	label,
	id,
	placeholder,
	type,
	onChange,
	value,
}: TextInputProps) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="text-white font-medium text-sm" htmlFor={id}>
				{label}
			</label>
			<input
				className="text-white text-sm border-1 border-gray-600 bg-gray-700 p-2 rounded-lg"
				type={type}
				name={id}
				id={id}
				placeholder={placeholder}
				value={value}
				required
				autoComplete="on"
				onChange={() => onChange()}
			></input>
		</div>
	);
};
