import { ReactNode, RefObject } from 'react';

export interface IProps {
	show: boolean;
	targetRef: RefObject<HTMLDivElement | null>;
	hide: () => void;
	children: ReactNode;
}
