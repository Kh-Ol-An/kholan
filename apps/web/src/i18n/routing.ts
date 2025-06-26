import { defineRouting } from 'next-intl/routing';
import { CLang } from '@kholan/types';

export const routing = defineRouting({
	locales: Object.values(CLang),

	defaultLocale: CLang.uk,
});
