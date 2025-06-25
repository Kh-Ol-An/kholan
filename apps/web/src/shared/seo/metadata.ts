import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
	throw new Error('❌ NEXT_PUBLIC_BASE_URL is not defined');
}

interface IMeta {
	title: string;
	description: string;
}

export async function fetchMetadata(
	locale: string,
	page: string | null,
	href: string,
	meta?: IMeta,
): Promise<Metadata> {
	let title = '👨‍💻 Oleh Khrystenko – Fullstack Developer Turning Ideas into Reality';
	let description =
		'🚀 Fullstack developer with 6+ years of experience. Ready to bring your business idea to life with style and power.';

	if (page === null) {
		if (meta) {
			title = meta.title;
			description = meta.description;
		}
	} else {
		const messages = await import(`@/messages/${locale}.json`);
		const metaT = (key: string) => messages[key];

		title = metaT(`${page}_page`).head.title;

		description = metaT(`${page}_page`).head.description;
	}

	return {
		title,
		description,
		alternates: {
			canonical: `${BASE_URL}/${locale}${href === 'welcome' ? '' : `/${href}`}`,
			languages: {
				'x-default': `${BASE_URL}/uk/${href === 'welcome' ? '' : href}`,
				'uk-ua': `${BASE_URL}/uk/${href === 'welcome' ? '' : href}`,
				'en-ua': `${BASE_URL}/en/${href === 'welcome' ? '' : href}`,
			},
		},
	};
}
