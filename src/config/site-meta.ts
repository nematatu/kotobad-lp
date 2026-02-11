export type PageKey = "home" | "notFound";

type PageMeta = {
	title: string;
	description: string;
};

export const SITE_META = {
	appName: "コトバド",
	appSlug: "kotobad",
};

export const PAGE_META: Record<PageKey, PageMeta> = {
	home: {
		title: "バドミントン掲示板 コトバド kotobad | 好きな選手や試合を語り合おう",
		description:
			"コトバドはバドミントン好きのための掲示板です。好きな選手や試合、練習募集やギア相談まで、気軽に語り合えます。",
	},
	notFound: {
		title: `ページが見つかりません | ${SITE_META.appName}`,
		description:
			"アクセスされたページは削除されたか、URLが誤っている可能性があります。コトバドのトップページからご確認ください。",
	},
};

function upsertMetaByName(name: string, content: string) {
	let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
	if (!meta) {
		meta = document.createElement("meta");
		meta.setAttribute("name", name);
		document.head.append(meta);
	}
	meta.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
	let meta = document.querySelector<HTMLMetaElement>(
		`meta[property="${property}"]`,
	);
	if (!meta) {
		meta = document.createElement("meta");
		meta.setAttribute("property", property);
		document.head.append(meta);
	}
	meta.setAttribute("content", content);
}

export function applyPageMeta(page: PageKey) {
	const meta = PAGE_META[page];
	document.title = meta.title;
	upsertMetaByName("description", meta.description);
	upsertMetaByProperty("og:title", meta.title);
	upsertMetaByProperty("og:description", meta.description);
	upsertMetaByProperty("twitter:title", meta.title);
	upsertMetaByProperty("twitter:description", meta.description);
}
