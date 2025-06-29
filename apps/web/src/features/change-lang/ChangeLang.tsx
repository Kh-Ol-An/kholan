'use client';

import { FC } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { UA, US } from 'country-flag-icons/react/3x2';
import { CLang, TLang } from '@kholan/types';
import UiSelect, { IOption } from '@/shared/ui/UiSelect';
import { IProps } from './types';
// import { useMyUserStore } from '@/stores/my-user';

const options = (withoutText: boolean = false): IOption[] => [
	{
		label: (
			<div className="flex items-center gap-1.5">
				<US title="United States" className="h-5 w-7" />
				{!withoutText && (
					<span className="text-sm font-bold text-zinc-800 dark:text-zinc-300">Eng</span>
				)}
			</div>
		),
		value: CLang.en,
	},
	{
		label: (
			<div className="flex items-center gap-1.5">
				<UA title="Ukraine" className="h-5 w-7" />
				{!withoutText && (
					<span className="text-sm font-bold text-zinc-800 dark:text-zinc-300">Укр</span>
				)}
			</div>
		),
		value: CLang.uk,
	},
];

const ChangeLang: FC<IProps> = ({
	withoutText,
	expandTop,
	selectHoverItemBg = 'hover:bg-zinc-200 hover:dark:bg-zinc-900',
}) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const activeLocale = useLocale();
	const allPagesT = useTranslations('all_pages');

	// const myUser = useMyUserStore(state => state.myUser);
	// const changeLang = useMyUserStore(state => state.changeLang);

	const handleChangeLang = async (value: IOption['value']) => {
		// if (myUser) {
		// 	await changeLang(
		// 		{ userId: myUser.id, lang: value as TLang },
		// 		allPagesT('my-user-api.change-lang.error'),
		// 	);
		// }

		// Отримуємо всі search параметри
		const allSearchParams = searchParams.toString();
		const newPath = pathname.replace(`/${activeLocale}`, '');

		// Створюємо новий URL з мовою і search параметрами
		const newUrl = `/${value}${newPath}${allSearchParams ? `?${allSearchParams}` : ''}`;

		router.replace(newUrl);
	};

	return (
		<UiSelect
			options={options(withoutText)}
			bg="bg-zinc-300 dark:bg-zinc-800"
			hoverItemBg={selectHoverItemBg}
			withoutIcon
			expandTop={expandTop}
			value={activeLocale as TLang}
			onChange={handleChangeLang}
		/>
	);
};

export default ChangeLang;
