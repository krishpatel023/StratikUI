export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="w-full px-4 md:px-0 md:w-[85%] mx-auto py-12 md:py-16 mb-4">
				{children}
			</div>
		</>
	);
}
