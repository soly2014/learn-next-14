import {
	AtSymbolIcon,
	KeyIcon,
	CalendarDaysIcon,
	UserIcon,
	CreditCardIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface CreditCardInputProps {
	onChange: (cardData: CreditCardData) => void;
}

export interface CreditCardData {
	cardNumber: string;
	expiryDate: string;
	cardholderName: string;
	cvv: string;
}

const CreditCardInput: React.FC<CreditCardInputProps> = ({ onChange }) => {
	// const [cardData, setCardData] = useState<CreditCardData>({
	// 	cardNumber: "",
	// 	expiryDate: "",
	// 	cardholderName: "",
	// 	cvv: "",
	// });

	// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const { name, value } = e.target;
	// 	setCardData((prevData) => ({ ...prevData, [name]: value }));
	// 	onChange({ ...cardData, [name]: value });
	// };

	return (
		<div className="w-full">
			<div>
				<label
					className="mb-3 mt-5 block text-xs font-medium text-gray-900"
					htmlFor="CardNumber"
				>
					Card Number
				</label>
				<div className="relative">
					<input
						className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
						id="CardNumber"
						name="card-number"
						placeholder="Enter your Card Number"
						required
					/>
					<CreditCardIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
				</div>
			</div>
			<div className="mt-4">
				<label
					className="mb-3 mt-5 block text-xs font-medium text-gray-900"
					htmlFor="ExpiryDate"
				>
					Expiry Date
				</label>
				<div className="relative">
					<input
						className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
						id="ExpiryDate"
						name="expiry-date"
						placeholder="Enter Expiry Date"
						type="date"
						required
					/>
					<CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
				</div>
			</div>

			<div className="mt-4">
				<label
					className="mb-3 mt-5 block text-xs font-medium text-gray-900"
					htmlFor="CardHolderName"
				>
					Card Holder Name
				</label>
				<div className="relative">
					<input
						className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
						id="CardHolderName"
						name="card-holder-name"
						placeholder="Enter Card Holder Name"
						required
					/>
					<UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
				</div>
			</div>

			<div className="mt-4">
				<label
					className="mb-3 mt-5 block text-xs font-medium text-gray-900"
					htmlFor="CVV"
				>
					CVV
				</label>
				<div className="relative">
					<input
						className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
						id="CVV"
						name="cvv"
						placeholder="Enter CVV"
						required
					/>
					<KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
				</div>
			</div>
		</div>
	);
};

export default CreditCardInput;
