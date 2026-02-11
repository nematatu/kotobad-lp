import type { ReactNode } from "react";

type AboutSectionProps = {
	title: ReactNode;
	text: ReactNode;
	image: string;
	alt: string;
	backgroundClassName?: string;
	reverse?: boolean;
	mobileImageFull?: boolean;
	wrapAlignEnd?: boolean;
	contentBottomPadding?: boolean;
	imagePaddingX?: boolean;
	mobileNoBottomPadding?: boolean;
};

export function AboutSection({
	title,
	text,
	image,
	alt,
	backgroundClassName,
	reverse,
	mobileImageFull,
	wrapAlignEnd,
	contentBottomPadding,
	imagePaddingX,
	mobileNoBottomPadding,
}: AboutSectionProps) {
	const sectionClassName = [
		mobileNoBottomPadding ? "pt-[100px] pb-0 md:py-[100px]" : "py-[100px]",
		backgroundClassName,
	]
		.filter(Boolean)
		.join(" ");

	const wrapClassName = [
		"flex flex-col items-center gap-[50px] md:flex-row md:items-center md:gap-[5.88%]",
		reverse ? "md:flex-row-reverse" : "",
		wrapAlignEnd ? "md:items-end" : "",
	]
		.filter(Boolean)
		.join(" ");

	const contentClassName = [
		"w-full max-w-[450px] px-5 md:px-0",
		contentBottomPadding ? "md:pb-[100px]" : "",
	]
		.filter(Boolean)
		.join(" ");

	const imageWrapClassName = [
		mobileImageFull ? "w-screen md:w-auto" : "",
		imagePaddingX ? "px-[35px]" : "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<section className={sectionClassName}>
			<div className="mx-auto w-full max-w-[910px] px-5 md:px-[30px]">
				<div className={wrapClassName}>
					<div className={contentClassName}>
						<h2 className="mb-5 ml-0 text-[28px] font-bold tracking-[5.6px] md:ml-[-5.6px]">
							{title}
						</h2>
						<p className="ml-0 tracking-[3.2px] md:ml-[-3.2px]">{text}</p>
					</div>
					<div className={imageWrapClassName}>
						<img src={image} alt={alt} className="block h-auto w-full" />
					</div>
				</div>
			</div>
		</section>
	);
}
