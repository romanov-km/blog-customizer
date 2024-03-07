import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
//export type OnClick = () => void;

export type TProps = {
	onClick: () => void;
	isFormOpen: boolean;
};

export const ArrowButton = ({ onClick, isFormOpen }: TProps) => {
	return (
		/* Не забываем указывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${
				isFormOpen ? styles.container_open : ''
			}`}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${isFormOpen ? styles.arrow_open : styles.arrow}`}
			/>
		</div>
	);
};
