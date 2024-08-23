import { HeaderComponent } from "@registry/packages/components/headers/02/default-js/Header";

export default function HeaderImplementation() {
	return (
		<div className="w-full relative overflow-hidden">
			<HeaderComponent />
			<div className="min-h-[40rem] w-full text-center flex justify-center items-center">
				<h1 className="text-2xl text-foreground">Content</h1>
			</div>
		</div>
	);
}
