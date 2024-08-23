export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="w-full sm:peer-data-[sidebar-state=fixed]:w-[calc(100dvw-18.25rem)] relative sm:peer-data-[sidebar-state=fixed]:left-[17.25rem] px-[6%] ">
				{children}
			</div>
		</>
	);
}
