import * as React from "react";

interface IInvoicesProps {}

const Invoices: React.FunctionComponent<IInvoicesProps> = (props) => {
	return (
		<div className="bg-gray-200 min-h-screen flex p-[5rem]">
			<div className="flex space-x-4 basis-6/12"></div>
		</div>
	);
};

export default Invoices;
