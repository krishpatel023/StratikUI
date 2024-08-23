import {
	Header,
	HeaderDropdown,
	HeaderItem,
} from "@registry/packages/primitives/header-blocks/01/default-ts/HeaderBlocks";

export default function HeaderBlocksImplementation() {
	return (
		<div className="w-full min-h-[25rem] flex flex-col justify-center items-center">
			<Header className="flex justify-center items-center gap-4 h-16 border border-outline px-10 rounded-lg">
				<HeaderItem className="hover:text-accent">Home</HeaderItem>
				<HeaderItem className="hover:text-accent">Pricing</HeaderItem>
				<HeaderItem className="hover:text-accent">
					Products
					<HeaderDropdown className="flex flex-col items-start">
						<span>View Best Sellers</span>
						<span>Electronics</span>
						<span>Clothing</span>
						<span>Books</span>
					</HeaderDropdown>
				</HeaderItem>
				<HeaderItem className="hover:text-accent">
					Services
					<HeaderDropdown className="flex flex-col items-start">
						<span>Web Design</span>
						<span>Web Development</span>
						<span>Mobile Development</span>
						<span>Other Services</span>
					</HeaderDropdown>
				</HeaderItem>
				<HeaderItem className="hover:text-accent">
					About
					<HeaderDropdown className="flex flex-col items-start">
						<span>About Us</span>
						<span>Careers</span>
						<span>Contact Us</span>
					</HeaderDropdown>
				</HeaderItem>
			</Header>
		</div>
	);
}
