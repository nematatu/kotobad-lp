import { Iphone } from "@/components/ui/iphone";

export default function Mock() {
	return (
		<div className="relative flex w-full justify-center md:w-auto md:shrink-0">
			<div className="mx-auto w-[72vw] max-w-[250px] translate-y-[12%] md:w-[280px] md:max-w-none md:translate-y-0 md:translate-x-[6%] lg:w-[310px] lg:translate-x-[8%]">
				<Iphone />
			</div>
		</div>
	);
}
