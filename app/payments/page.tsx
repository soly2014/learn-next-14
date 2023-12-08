import * as React from "react";
import CreditCardInput, { CreditCardData } from "../ui/credit-card";

interface IInvoicesProps {}

const Invoices: React.FunctionComponent<IInvoicesProps> = (props) => {
	const handleCardDataChange = (cardData: CreditCardData) => {
		console.log(cardData); // You can access the card data here
	};
	return (
		<div className="bg-gray-200 min-h-screen flex p-[5rem]">
			<div className="flex space-x-4 basis-6/12">
				<CreditCardInput onChange={handleCardDataChange} />
			</div>
		</div>
	);
};

export default Invoices;
