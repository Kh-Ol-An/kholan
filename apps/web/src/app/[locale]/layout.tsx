import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Mulish } from 'next/font/google';
import '../globals.css';
import { IPageParams } from '@/shared/types/settings';

const mulish = Mulish({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '700'],
});

interface ILocaleLayoutProps extends IPageParams {
	children: ReactNode;
}

export default async function LocaleLayout({ children, params }: ILocaleLayoutProps) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			</head>

			<body
				className={`${mulish.className} bg-zinc-200 before:fixed before:inset-0 before:-z-10 before:bg-zinc-200/70 after:fixed after:inset-0 after:-z-20 after:bg-rose-cyan-rose after:bg-cover after:bg-[80%_50%] after:bg-no-repeat dark:bg-zinc-900 dark:before:bg-zinc-900/70 desktop-xs:after:bg-center`}
			>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
