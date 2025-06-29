import { ReactNode } from 'react';

export interface IOption {
	label: ReactNode;
	value: string;
}

export interface IProps {
	options: IOption[];
	label?: string;
	bg?: string;
	hoverItemBg?: string;
	withoutIcon?: boolean;
	expandTop?: boolean;
	value: IOption['value'];
	onChange: (value: IOption['value']) => Promise<void>;
}
