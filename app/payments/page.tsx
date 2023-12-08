"use client";

import {
	AtSymbolIcon,
	KeyIcon,
	CalendarDaysIcon,
	UserIcon,
	CreditCardIcon,
} from "@heroicons/react/24/outline";
import * as React from "react";
import Cards, { ReactCreditCardsProps, Focused } from "./credit-card/index";

type CardData = Pick<
	ReactCreditCardsProps,
	"name" | "cvc" | "expiry" | "number" | "focused"
>;

const Payments: React.FunctionComponent = () => {
	const [state, setState] = React.useState<CardData>({
		number: "",
		expiry: "",
		cvc: "",
		name: "",
		focused: "",
	});

	const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target;
		setState((prev) => ({ ...prev, [name]: value }));
	};

	const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
		setState((prev) => ({ ...prev, focused: evt.target.name as Focused }));
	};

	return (
		<div className="bg-gray-200 h-full p-[2rem]">
			<div className="flex">
				<div className="flex space-x-4 basis-6/12">
					<form className="flex-grow-1 w-[100%]">
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
									type="number"
									name="number"
									placeholder="Card Number"
									value={state.number}
									onChange={handleInputChange}
									onFocus={handleInputFocus}
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
									type="date"
									name="expiry"
									placeholder="Expiry Date"
									value={state.expiry}
									onChange={handleInputChange}
									onFocus={handleInputFocus}
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
									name="name"
									value={state.name}
									onChange={handleInputChange}
									onFocus={handleInputFocus}
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
									type="number"
									name="cvc"
									value={state.cvc}
									onChange={handleInputChange}
									onFocus={handleInputFocus}
									placeholder="Enter CVV"
									required
								/>
								<KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
							</div>
						</div>
					</form>
				</div>
				<div className="flex self-center basis-6/12 flex-grow-1">
					<Cards
						number={state.number}
						expiry={state.expiry}
						cvc={state.cvc}
						name={state.name}
						focused={state.focused}
					/>
				</div>
			</div>
		</div>
	);
};

export default Payments;
