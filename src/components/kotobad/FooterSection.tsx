import { IMG_URL } from "./constants";
import { StoreLinks } from "./StoreLinks";

export function FooterSection() {
	return (
		<footer className="bg-[#CFEEFF] px-0 pb-5 pt-[39px] text-center md:pt-[100px]">
			<div className="mx-auto w-full max-w-[910px] px-5 md:px-[30px]">
				<p className="m-0 text-[16px] font-bold tracking-[3.2px] md:mb-3 md:ml-[18px] md:mt-[30px] md:text-[21px] md:tracking-[4px] lg:text-[26px] lg:tracking-[5.2px]">
					家族・カップル・職場で共有できるTODOアプリ
				</p>
				<h2 className="mb-5 pl-[12.6px] text-[42px] font-black tracking-[12.6px] md:pl-[26px] md:text-[62px] md:tracking-[18.6px]">
					minto
				</h2>
				<img
					src={`${IMG_URL}/icon1.svg`}
					alt=""
					className="mx-auto mb-0 block h-auto w-[60px] md:w-auto"
				/>
				<StoreLinks />
				<div className="mt-[50px] text-[12px] font-bold tracking-[2.4px] text-[#505050]">
					©2019 ひろしくりえいしょん
				</div>
			</div>
		</footer>
	);
}
