export function MvSection() {
	return (
		<section className="overflow-hidden bg-[#CFEEFF] flex items-center lg:h-[500px]">
			{/* ↓ マックス幅を設定 */}
			<div className="mx-auto flex w-full max-w-[910px] justify-center">
				{/* ↓ 横にセンター揃え */}
				<div className="flex flex-col items-center text-center space-y-4 font-bold">
					<h2 className="text-[16px] font-bold tracking-[2.2px] md:text-[21px] md:tracking-[4px] lg:text-[26px]">
						バドミントン好きのための掲示板
					</h2>
					<div className="flex items-center space-x-4">
						<h1 className="font-tsunagi text-[42px] tracking-[3px] md:text-[82px]">
							コトバド
						</h1>
						<div className="rounded-[22px] bg-white/40 p-3 ring-5 ring-inset ring-[#9ADBFF] md:rounded-[28px]">
							<img src="/logo/logo.svg" alt="" className="w-14 md:w-[57px]" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
