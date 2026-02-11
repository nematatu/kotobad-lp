import { StoreLinks } from "./StoreLinks";

export function AppIntroSection() {
	return (
		<section className="pb-[60px] pt-[100px] text-center md:py-[100px]">
			<div className="mx-auto w-full max-w-[910px] px-5 md:px-[30px]">
				<h3 className="m-0 text-[16px] font-bold tracking-[3.2px] md:mb-4 md:ml-[18px] md:mt-[30px] md:text-[21px] md:tracking-[4px] lg:text-[26px] lg:tracking-[5.2px]">
					minto(ミント)とは？
				</h3>
				<h2 className="mb-[30px] ml-[3.2px] text-[16px] tracking-[3.2px] md:ml-0 md:text-[20px] md:tracking-[4px]">
					TODOをリアルタイムに共有できるアプリです。
					<br />
					お買い物リストややりたいことリストなどにご利用できます。
				</h2>
				<StoreLinks />
			</div>
		</section>
	);
}
