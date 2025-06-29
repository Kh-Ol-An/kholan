import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
// import { Link } from '@/i18n/navigation';
import ChangeLang from '@/features/change-lang';
import { fetchMetadata } from '@/shared/seo/metadata';
import { IMetaProps } from '@/shared/types/settings';
import ChangeTheme from '@/features/change-theme';

export async function generateMetadata(props: IMetaProps): Promise<Metadata> {
	return await fetchMetadata({ ...props, page: 'welcome', href: 'welcome' });
}

export default function HomePage() {
	const allPagesT = useTranslations('all_pages');

	return (
		<main className="flex h-full min-h-screen flex-col pb-14 tablet-md:p-0">
			<h1>{allPagesT('ol_kh')}</h1>

			<div className="flex items-center gap-20">
				<p className="text-ash">--ash</p>
				<div className="w-20 h-6 bg-ash"></div>
			</div>
			<div className="flex items-center gap-20">
				<p className="text-graphite">--graphite</p>
				<div className="w-20 h-6 bg-graphite"></div>
			</div>

			<div className="flex items-center gap-20">
				<p className="text-snow">--snow</p>
				<div className="w-20 h-6 bg-snow"></div>
			</div>

			<div className="flex items-center gap-20">
				<p className="text-ember">--ember</p>
				<div className="w-20 h-6 bg-ember"></div>
			</div>
			<div className="flex items-center gap-20">
				<p className="text-flame">--flame</p>
				<div className="w-20 h-6 bg-flame"></div>
			</div>
			<div className="flex items-center gap-20">
				<p className="text-peach">--peach</p>
				<div className="w-20 h-6 bg-peach"></div>
			</div>

			<div className="flex items-center gap-20">
				<p className="text-ocean">--ocean</p>
				<div className="w-20 h-6 bg-ocean"></div>
			</div>

			{/*<Link href="/about">{allPagesT('about')}</Link>*/}

			<ChangeLang />

			<ChangeTheme />
		</main>
	);
}
