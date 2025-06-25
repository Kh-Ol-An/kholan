import { useTranslations } from 'next-intl';
// import { Link } from '@/i18n/navigation';
import ChangeLang from '@/features/change-lang';

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
