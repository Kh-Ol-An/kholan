export const CLang = {
	uk: 'uk',
	en: 'en',
} as const;

export type TLang = (typeof CLang)[keyof typeof CLang];
