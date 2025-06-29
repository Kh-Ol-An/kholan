import { Metadata } from 'next';
import { IMetaProps } from '@/shared/types/settings';
import { CLang } from '@kholan/types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
	throw new Error('❌ NEXT_PUBLIC_BASE_URL is not defined');
}

export async function fetchMetadata({ params, page, href, meta }: IMetaProps): Promise<Metadata> {
	let locale: string;

	try {
		const resolved = await params;
		locale = resolved?.locale;
		if (!locale) throw new Error('Locale is missing in params');
	} catch (error) {
		console.error('❌ Failed to resolve locale from params:', error);
		locale = CLang.uk;
	}

	let title = '‍💻 Oleh Khrystenko | Фулстек-розробник';
	let description =
		'🚀 Фулстек-розробник із досвідом понад 6 років. Експерт у Next.js, NestJS, TypeScript і MongoDB. Допомагаю втілювати сміливі ідеї в сучасні вебзастосунки.';

	if (page === null) {
		if (meta) {
			title = meta.title;
			description = meta.description;
		}
	} else {
		const messages = await import(`../../../messages/${locale}.json`);
		const metaT = (key: string) => messages[key];

		title = metaT(`${page}_page`).head.title;

		description = metaT(`${page}_page`).head.description;
	}

	const path = href === 'welcome' ? '' : `/${href}`;

	return {
		title,
		description,
		alternates: {
			canonical: `${BASE_URL}/${locale}${path}`,
			languages: {
				'x-default': `${BASE_URL}/uk${path}`,
				'uk-ua': `${BASE_URL}/uk${path}`,
				'en-ua': `${BASE_URL}/en${path}`,
			},
		},
	};
}
