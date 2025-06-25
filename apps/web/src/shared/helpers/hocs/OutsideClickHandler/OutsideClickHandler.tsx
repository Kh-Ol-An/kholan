'use client';

import { FC, useEffect, useRef } from 'react';
import { IProps } from '@/shared/helpers/hocs/OutsideClickHandler/types';

const OutsideClickHandler: FC<IProps> = ({ show, targetRef, hide, children }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!targetRef.current) return;

		if (show) {
			document.body.style.pointerEvents = 'none';
			targetRef.current.style.pointerEvents = 'auto';
		} else {
			document.body.style.pointerEvents = 'auto';
			targetRef.current.style.pointerEvents = 'auto';
		}

		return () => {
			document.body.style.pointerEvents = 'auto';
		};
	}, [show, targetRef]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
				hide();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [hide]);

	return <div ref={containerRef}>{children}</div>;
};

export default OutsideClickHandler;
