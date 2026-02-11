import { IMG_URL } from "./constants";

type StoreLinksProps = {
	className?: string;
};

export function StoreLinks({ className = "mt-[30px]" }: StoreLinksProps) {
	const rootClassName = [
		className,
		"flex flex-col items-center justify-center gap-0 md:flex-row md:gap-5",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<p className={rootClassName}>
			<a
				href="https://apps.apple.com/app/apple-store/id1460380962?pt=118167083&ct=lp-from-20250315&mt=8"
				target="_blank"
				rel="noreferrer"
				className="inline-block max-w-[230px] md:max-w-[191px]"
			>
				<img
					src={`${IMG_URL}/apple.png`}
					alt="App Storeからダウンロード"
					className="block h-auto w-full"
				/>
			</a>
			<a
				href="https://play.google.com/store/apps/details?id=com.hirothings.family_todo"
				target="_blank"
				rel="noreferrer"
				className="inline-block max-w-[230px]"
			>
				<img
					src={`${IMG_URL}/google.png`}
					alt="Google Playで手に入れよう"
					className="block h-auto w-full"
				/>
			</a>
		</p>
	);
}
