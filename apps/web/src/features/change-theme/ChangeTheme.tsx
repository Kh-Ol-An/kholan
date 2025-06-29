'use client';

import { FC, useEffect } from 'react';
import { useSettingsStore } from '@/stores/settings';
import { CTheme, TTheme } from '@/shared/types/settings';
import { SunIcon, MoonIcon } from '@/shared/icons';
import UiSwitch from '@/shared/ui/UiSwitch';

const ChangeTheme: FC = () => {
	const theme = useSettingsStore(state => state.theme);
	const setTheme = useSettingsStore(state => state.setTheme);

	const handleToggleTheme = () => {
		const newTheme = theme === CTheme.light ? CTheme.dark : CTheme.light;
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(savedTheme as TTheme);
			document.documentElement.setAttribute('data-theme', savedTheme);
			document.documentElement.classList.add(savedTheme);
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const defaultTheme = prefersDark ? CTheme.dark : CTheme.light;
			setTheme(defaultTheme);
			document.documentElement.setAttribute('data-theme', defaultTheme);
			document.documentElement.classList.add(defaultTheme);
		}
	}, []);

	return (
		<>
			<UiSwitch
				id="theme-switcher"
				name="theme-switcher"
				checked={theme === CTheme.dark}
				onChange={handleToggleTheme}
			>
				<SunIcon />
				<MoonIcon />
			</UiSwitch>
		</>
	);
};

export default ChangeTheme;
