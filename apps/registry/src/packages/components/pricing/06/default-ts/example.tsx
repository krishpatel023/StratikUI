import { Pricing } from "@registry/packages/components/pricing/05/default-ts/Pricing";
import { PricingGrid } from "@registry/packages/components/pricing/06/default-ts/Pricing";

export default function PricingImplementation() {
	return (
		<div className="w-full flex justify-center items-center">
			<div className="hidden @lg:block w-[90%] mt-40 mb-20">
				<PricingGrid />
			</div>
			<div className="@lg:hidden w-[90%] mt-40 mb-20">
				<Pricing />
			</div>
		</div>
	);
}
