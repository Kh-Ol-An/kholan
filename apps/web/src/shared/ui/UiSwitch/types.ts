import { ChangeEvent, ReactNode } from 'react';

export interface IProps {
	id: string;
	name: string;
	checked: boolean;
	bg?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	children?: ReactNode;
}
