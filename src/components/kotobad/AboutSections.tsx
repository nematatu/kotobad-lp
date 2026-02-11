import { AboutSection } from "./AboutSection";
import { IMG_URL } from "./constants";

export function AboutSections() {
	return (
		<div>
			<AboutSection
				backgroundClassName="bg-[#C5E9FC]"
				title={
					<>
						TODOを
						<br />
						リアルタイムに
						<br className="md:hidden" />
						共有できます
					</>
				}
				text="タスクを登録・完了するとリアルタイムにパートナーに反映されます。"
				image={`${IMG_URL}/screen.gif`}
				alt="TODOを共有している画像"
			/>

			<AboutSection
				reverse
				mobileNoBottomPadding
				mobileImageFull
				title="リアルタイム通知で忘れない"
				text={
					<>
						タスクの追加・完了時、パートナーに通知が届きます。
						<br />
						予定日時に通知することもできるので「あれ、やった？」のすれ違いを無くせます。
					</>
				}
				image={`${IMG_URL}/about2.png`}
				alt="Push通知でリマインダーが届く画像"
			/>

			<AboutSection
				backgroundClassName="bg-[#CFEEFF] pb-0"
				wrapAlignEnd
				contentBottomPadding
				title={
					<>
						TODOを
						<br />
						カテゴリ分けして
						<br className="md:hidden" />
						管理
					</>
				}
				text="「お買い物」「行ってみたいところ」「家事分担」..などパートナーで共有したいTODOを、カテゴリ分けして管理できます。タブはさくさくスワイプで移動できます。"
				image={`${IMG_URL}/about3.png`}
				alt="タブでカテゴリを分けている画像"
			/>

			<AboutSection
				reverse
				title="選べるテーマカラー"
				text="お気に入りのテーマカラーを選ぶことができます。"
				image={`${IMG_URL}/about4.png`}
				alt="テーマカラーの画像"
			/>

			<AboutSection
				backgroundClassName="bg-[#CFEEFF]"
				reverse
				imagePaddingX
				title={
					<>
						共有の設定は
						<br className="md:hidden" />
						かんたん!
					</>
				}
				text="QRコードを読み込んでもらうか、LINEで招待するだけで、かんたんにパートナーとTODOを共有できます。"
				image={`${IMG_URL}/about5.png`}
				alt="QRコードでアプリの招待リンクを送る画像"
			/>
		</div>
	);
}
