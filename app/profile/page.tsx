import * as React from "react";
import Image from "next/image";

interface ICustomersProps {}

const Customers: React.FunctionComponent<ICustomersProps> = (props) => {
	return (
		<div className="bg-white shadow-md rounded px-8 py-6 mt-4">
			<div className="text-center">
				<Image
					src={"https://i.pravatar.cc/300"}
					alt="User Avatar"
					className="w-32 h-32 mx-auto rounded-full"
					width={"300"}
					height={"300"}
				/>
			</div>
			<div className="mt-4 text-center">
				<p className="text-xl font-semibold">Soliman Mahmoud Soliman</p>
				<p className="text-gray-500">Male</p>
				<p className="text-gray-500">DOB: 29-7-1991</p>
			</div>
		</div>
	);
};

export default Customers;
