"use client";

import {
	Dropdown,
	DropdownDivider,
	DropdownHeader,
	DropdownItem,
	DropdownTrigger,
	SubmenuTrigger,
} from "@registry/packages/primitives/dropdown/01/react_aria-js/Dropdown";
import Button from "@registry/ui/Button";
import { Section } from "react-aria-components";

export default function DropdownImplementation() {
	return (
		<DropdownTrigger
			label="User Settings"
			description="This is an user settings dropdown"
		>
			<Button>Settings</Button>
			<Dropdown className="min-w-60">
				<Section>
					<DropdownHeader>My Account</DropdownHeader>
					<DropdownItem>Profile</DropdownItem>
					<DropdownItem isDisabled>Billing</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
				</Section>
				<DropdownDivider />
				<Section>
					<DropdownHeader className="mt-2">Other Settings</DropdownHeader>

					<SubmenuTrigger>
						<DropdownItem className="flex items-center justify-between">
							<span>Team</span>
							<Icons.chevron className="h-5 w-5" />
						</DropdownItem>

						<Dropdown className="min-w-40">
							<Section>
								<DropdownHeader>Team</DropdownHeader>
							</Section>
							<DropdownDivider />
							<Section>
								<DropdownItem>Team 1</DropdownItem>
								<DropdownItem>Team 2</DropdownItem>
								<DropdownItem>Team 3</DropdownItem>
							</Section>
							<DropdownDivider />
							<DropdownItem>Add Team</DropdownItem>
						</Dropdown>
					</SubmenuTrigger>

					<DropdownItem>Support</DropdownItem>
				</Section>
				<DropdownDivider />
				<DropdownItem className="hover:bg-error focus:bg-error">
					Logout
				</DropdownItem>
			</Dropdown>
		</DropdownTrigger>
	);
}

const Icons = {
	chevron: (props) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 16 16"
			{...props}
		>
			<title>Chevron</title>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8L6.22 5.28a.75.75 0 0 1 0-1.06"
				clipRule="evenodd"
			/>
		</svg>
	),
};
