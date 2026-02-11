import { IMG_URL } from "./constants";

const REVIEW_ITEMS = [
	{
		title: "最高です(๑><๑)!!",
		body: "共有しやすくて、家族間の情報共有に大いに役立っています。買い物の際などにパパッと連絡し合えること、共有しやすいことがイチオシです！",
	},
	{
		title: "シンプルで使いやすい",
		body: "直感的で使いやすいです。ゴチャゴチャした複雑な機能のタスク管理より、私にはこのアプリがBESTです(^^)",
	},
	{
		title: "旦那と使ってます",
		body: "買い物リストとしても使えますし、話し合いたいこととかを書き込んだりもしてなかなか良いです！ 相手にも通知がちゃんと行くのですぐ書き込んだことがわかるので、それも良いです。",
	},
	{
		title: "便利です",
		body: "操作が簡単でわかりやすい。シンプルが一番です。単身赴任中の夫婦の必需品です。",
	},
	{
		title: "子供の塾や学校の宿題管理につかっています",
		body: "仕事から帰ったあとの宿題の確認に使っています。 流れがスムーズなので子供からも好評です。",
	},
];

export function ReviewSection() {
	return (
		<section className="py-[100px] text-left md:text-center">
			<div className="mx-auto w-full max-w-[840px] px-5 md:px-[30px]">
				<div className="px-5 md:px-0">
					<h2 className="text-[28px] font-bold tracking-[5.6px] md:text-center">評価とレビュー</h2>
					<p className="mt-4 tracking-[3.2px] text-[#505050] md:text-center">
						2019年にリリースして以来、
						<br />
						おかげさまで温かいお言葉をたくさんいただいております！
					</p>
				</div>

				<div className="my-[50px] mb-[30px] md:my-[63px] md:mb-[50px]">
					{REVIEW_ITEMS.map((item, index) => (
						<div
							key={item.title}
							className={`rounded-[10px] bg-white px-[30px] py-10 text-left text-[#505050] shadow-[0_0_25px_rgba(10,69,101,0.09)] md:px-10 md:py-[30px] ${
								index > 0 ? "mt-5" : ""
							}`}
						>
							<div className="mb-[10px] flex flex-col items-start gap-[10px] text-[22px] font-bold tracking-[4.4px] md:flex-row md:items-center">
								<img src={`${IMG_URL}/star.svg`} alt="" className="h-auto w-[110px]" />
								<span>{item.title}</span>
							</div>
							<p className="tracking-[3.2px]">{item.body}</p>
						</div>
					))}
				</div>

				<div className="text-center">
					<p className="mb-2.5 text-[#505050] md:mb-5">アプリの使い方はこちらから</p>
					<a
						href="https://familytodo.notion.site/76400e542f1e4d3bb87a031416192141"
						target="_blank"
						rel="noreferrer"
						className="inline-block rounded-[50px] border border-[#008EDC] px-[45px] py-[5px] pl-[49px] text-[20px] leading-[2] tracking-[4px]"
					>
						アプリの使い方
					</a>
				</div>

				<div className="mt-6 text-center">
					<p className="mb-2.5 text-[#505050] md:mb-5">
						協業、広告出稿などの
						<br className="md:hidden" />
						お問い合わせはこちらから
					</p>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLScwHfd5Dyu_QxLAEQ2X3OMLO6LZST2eOSfSbAdH1iMO89rYOA/viewform?usp=sf_link"
						target="_blank"
						rel="noreferrer"
						className="inline-block rounded-[50px] border border-[#008EDC] px-[45px] py-[5px] pl-[49px] text-[20px] leading-[2] tracking-[4px]"
					>
						お問い合わせ
					</a>
				</div>

				<div className="mt-8 text-center tracking-[3.2px]">
					<a
						href="https://familytodo.notion.site/251aa81fe8a780e2a4dcf8afe59af911"
						target="_blank"
						rel="noreferrer"
					>
						特定商取引法に関する表記
					</a>
				</div>
			</div>
		</section>
	);
}
