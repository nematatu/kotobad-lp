import Mock from "./components/feat/iphone-mock";

function App() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-gray-300">
			<div className="relative mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
				<section className="space-y-7">
					<p className="inline-flex rounded-full border border-sky-300/40 bg-sky-300/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] ">
						BETA
					</p>

					<div className="space-y-4">
						<h1 className="text-5xl tracking-tight sm:text-6xl">
							コトバド
						</h1>
						<p className="max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
							バド好きのための掲示板。練習募集、試合の感想、ギアの相談まで、
							同じ熱量の仲間と気軽につながれます。
						</p>
					</div>

					<div className="grid max-w-xl grid-cols-1 gap-3 text-sm sm:grid-cols-3">
						<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
							練習募集
						</div>
						<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
							大会トーク
						</div>
						<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
							ギア相談
						</div>
					</div>
				</section>

				<section className="flex items-center justify-center lg:justify-end">
					<div className="relative w-[280px] sm:w-[330px] lg:w-[360px]">
						<div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-cyan-300/20 blur-3xl" />
						<Mock />
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
