import "./minto.css";

const BASE = "https://family-reminder-9ab33.web.app";
const IMG = `${BASE}/img`;

function App() {
	return (
		<div className="minto-page">
			<main>
				<section className="mv bg-color">
					<div className="inner">
						<div className="wrap">
							<div className="content">
								<img className="badge" src={`${IMG}/badge.svg`} alt="" />
								<h2 className="mv__text">家族・カップル・職場で共有できるTODOアプリ</h2>
								<h1 className="mv__title">minto</h1>
								<img className="icon" src={`${IMG}/icon1.svg`} alt="" />
							</div>
							<div className="img">
								<p className="content mv__text">おかげさまで6周年</p>
								<img src={`${IMG}/mv.png`} alt="" />
							</div>
						</div>
					</div>
				</section>

				<section className="app">
					<div className="inner">
						<h3 className="mv__text margin-bottom-16">minto(ミント)とは？</h3>
						<h2 className="app__text">
							TODOをリアルタイムに共有できるアプリです。
							<br />
							お買い物リストややりたいことリストなどにご利用できます。
						</h2>
						<p className="app__link">
							<a
								href="https://apps.apple.com/app/apple-store/id1460380962?pt=118167083&ct=lp-from-20250315&mt=8"
								target="_blank"
								rel="noreferrer"
							>
								<img src={`${IMG}/apple.png`} alt="App Storeからダウンロード" />
							</a>
							<a
								href="https://play.google.com/store/apps/details?id=com.hirothings.family_todo"
								target="_blank"
								rel="noreferrer"
							>
								<img src={`${IMG}/google.png`} alt="Google Playで手に入れよう" />
							</a>
						</p>
					</div>
				</section>

				<div className="about">
					<section className="about1 bg-color">
						<div className="inner">
							<div className="wrap">
								<div className="content">
									<h2>
										TODOを
										<br />
										リアルタイムに
										<br className="is-sp" />
										共有できます
									</h2>
									<p>タスクを登録・完了するとリアルタイムにパートナーに反映されます。</p>
								</div>
								<div className="img">
									<img src={`${IMG}/screen.gif`} alt="TODOを共有している画像" />
								</div>
							</div>
						</div>
					</section>

					<section className="about2">
						<div className="inner">
							<div className="wrap">
								<div className="content">
									<h2>リアルタイム通知で忘れない</h2>
									<p>
										タスクの追加・完了時、パートナーに通知が届きます。
										<br />
										予定日時に通知することもできるので「あれ、やった？」のすれ違いを無くせます。
									</p>
								</div>
								<div className="img">
									<img src={`${IMG}/about2.png`} alt="Push通知でリマインダーが届く画像" />
								</div>
							</div>
						</div>
					</section>

					<section className="about3 bg-color">
						<div className="inner">
							<div className="wrap">
								<div className="content">
									<h2>
										TODOを
										<br />
										カテゴリ分けして
										<br className="is-sp" />
										管理
									</h2>
									<p>
										「お買い物」「行ってみたいところ」「家事分担」..などパートナーで共有したいTODOを、
										カテゴリ分けして管理できます。タブはさくさくスワイプで移動できます。
									</p>
								</div>
								<div className="img">
									<img src={`${IMG}/about3.png`} alt="タブでカテゴリを分けている画像" />
								</div>
							</div>
						</div>
					</section>

					<section className="about4">
						<div className="inner">
							<div className="wrap">
								<div className="content">
									<h2>選べるテーマカラー</h2>
									<p>お気に入りのテーマカラーを選ぶことができます。</p>
								</div>
								<div className="img">
									<img src={`${IMG}/about4.png`} alt="テーマカラーの画像" />
								</div>
							</div>
						</div>
					</section>

					<section className="about5 bg-color">
						<div className="inner">
							<div className="wrap">
								<div className="content">
									<h2>
										共有の設定は
										<br className="is-sp" />
										かんたん!
									</h2>
									<p>
										QRコードを読み込んでもらうか、LINEで招待するだけで、
										かんたんにパートナーとTODOを共有できます。
									</p>
								</div>
								<div className="img">
									<img src={`${IMG}/about5.png`} alt="QRコードでアプリの招待リンクを送る画像" />
								</div>
							</div>
						</div>
					</section>

					<section className="review">
						<div className="inner">
							<div className="review__top">
								<h2>評価とレビュー</h2>
								<p>
									2019年にリリースして以来、
									<br />
									おかげさまで温かいお言葉をたくさんいただいております！
								</p>
							</div>
							<div className="review__items">
								<div className="review__item">
									<div className="head">
										<img src={`${IMG}/star.svg`} alt="" />
										<span>最高です(๑&gt;&lt;๑)!!</span>
									</div>
									<p className="body">
										共有しやすくて、家族間の情報共有に大いに役立っています。買い物の際などにパパッと連絡し合えること、共有しやすいことがイチオシです！
									</p>
								</div>
								<div className="review__item">
									<div className="head">
										<img src={`${IMG}/star.svg`} alt="" />
										<span>シンプルで使いやすい</span>
									</div>
									<p className="body">
										直感的で使いやすいです。ゴチャゴチャした複雑な機能のタスク管理より、私にはこのアプリがBESTです(^^)
									</p>
								</div>
								<div className="review__item">
									<div className="head">
										<img src={`${IMG}/star.svg`} alt="" />
										<span>旦那と使ってます</span>
									</div>
									<p className="body">
										買い物リストとしても使えますし、話し合いたいこととかを書き込んだりもしてなかなか良いです！ 相手にも通知がちゃんと行くのですぐ書き込んだことがわかるので、それも良いです。
									</p>
								</div>
								<div className="review__item">
									<div className="head">
										<img src={`${IMG}/star.svg`} alt="" />
										<span>便利です</span>
									</div>
									<p className="body">
										操作が簡単でわかりやすい。シンプルが一番です。単身赴任中の夫婦の必需品です。
									</p>
								</div>
								<div className="review__item">
									<div className="head">
										<img src={`${IMG}/star.svg`} alt="" />
										<span>子供の塾や学校の宿題管理につかっています</span>
									</div>
									<p className="body">
										仕事から帰ったあとの宿題の確認に使っています。 流れがスムーズなので子供からも好評です。
									</p>
								</div>
							</div>
							<div className="app__text center review__bottom">
								<p>アプリの使い方はこちらから</p>
								<a href="https://familytodo.notion.site/76400e542f1e4d3bb87a031416192141" target="_blank" rel="noreferrer">
									アプリの使い方
								</a>
							</div>
							<div className="center review__bottom">
								<p>
									協業、広告出稿などの
									<br className="is-sp" />
									お問い合わせはこちらから
								</p>
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLScwHfd5Dyu_QxLAEQ2X3OMLO6LZST2eOSfSbAdH1iMO89rYOA/viewform?usp=sf_link"
									target="_blank"
									rel="noreferrer"
								>
									お問い合わせ
								</a>
							</div>
							<div className="link">
								<a href="https://familytodo.notion.site/251aa81fe8a780e2a4dcf8afe59af911" target="_blank" rel="noreferrer">
									特定商取引法に関する表記
								</a>
							</div>
						</div>
					</section>
				</div>
			</main>

			<footer className="bg-color">
				<div className="inner">
					<p className="mv__text">家族・カップル・職場で共有できるTODOアプリ</p>
					<h2 className="mv__title">minto</h2>
					<img className="icon" src={`${IMG}/icon1.svg`} alt="" />
					<p className="app__link">
						<a
							href="https://apps.apple.com/app/apple-store/id1460380962?pt=118167083&ct=lp-from-20250315&mt=8"
							target="_blank"
							rel="noreferrer"
						>
							<img src={`${IMG}/apple.png`} alt="" />
						</a>
						<a
							href="https://play.google.com/store/apps/details?id=com.hirothings.family_todo"
							target="_blank"
							rel="noreferrer"
						>
							<img src={`${IMG}/google.png`} alt="" />
						</a>
					</p>
					<div className="footer__copy">©2019 ひろしくりえいしょん</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
