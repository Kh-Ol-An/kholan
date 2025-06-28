import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
// import { Link } from '@/i18n/navigation';
import ChangeLang from '@/features/change-lang';
import { fetchMetadata } from '@/shared/seo/metadata';
import { IMetaProps } from '@/shared/types/settings';

export async function generateMetadata(props: IMetaProps): Promise<Metadata> {
	return await fetchMetadata({ ...props, page: 'welcome', href: 'welcome' });
}

export default function HomePage() {
	const allPagesT = useTranslations('all_pages');

	return (
		<main className="flex h-full min-h-screen flex-col bg-zinc-300 pb-14 dark:bg-zinc-900 tablet-md:p-0">
			<h1>{allPagesT('ol_kh')}</h1>
			{/*<Link href="/about">{allPagesT('about')}</Link>*/}

			<ChangeLang />
		</main>
	);
}
