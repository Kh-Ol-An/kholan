import { TLang } from '@kholan/types';

export interface IPageParams {
	params: Promise<{ locale: TLang }>;
}

interface IMeta {
	title: string;
	description: string;
}

export interface IMetaProps extends IPageParams {
	page: string | null;
	href: string;
	meta?: IMeta;
}
