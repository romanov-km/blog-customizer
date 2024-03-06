import clsx from 'clsx';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Text } from '../text';
import { useClose } from '../hooks/useClose';

import {
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import { useState, useRef, Dispatch, SetStateAction } from 'react';

interface ArticleParamsFormProps {
	setSelectedStyles: Dispatch<
		SetStateAction<{
			fontFamilyOption: OptionType;
			fontColor: OptionType;
			backgroundColor: OptionType;
			contentWidth: OptionType;
			fontSizeOption: OptionType;
		}>
	>;
}

export const ArticleParamsForm = ({
	setSelectedStyles,
}: ArticleParamsFormProps) => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [formState, setFormState] = useState(defaultArticleState);

	const formRef = useRef<HTMLFormElement | null>(null);

	//Закрытие формы кликом по оверлею и нажатием на Escape
	useClose({
		isOpen: isFormOpen,
		onClose: () => setIsFormOpen(false),
		rootRef: formRef,
	});

	const toggleForm = () => {
		setIsFormOpen(!isFormOpen);
	};

	const resetForm = () => {
		setFormState(defaultArticleState);
		setSelectedStyles(defaultArticleState);
	};

	const applyStyles = (event: React.FormEvent) => {
		event.preventDefault();
		setSelectedStyles(formState);
	};
	return (
		<>
			<ArrowButton onClick={toggleForm} isFormOpen={isFormOpen} />

			<aside
				className={clsx(styles.container, isFormOpen && styles.container_open)}>
				<form className={styles.form} onSubmit={applyStyles} ref={formRef}>
					<Text as='h2' size={31} weight={800} align='left' family='open-sans'>
						Задайте параметры
					</Text>

					<Select
						selected={formState.fontFamilyOption}
						onChange={(value) =>
							setFormState({ ...formState, fontFamilyOption: value })
						}
						options={fontFamilyOptions}
						title='ШРИФТ'
					/>

					<RadioGroup
						selected={formState.fontSizeOption}
						name='radio'
						onChange={(value) =>
							setFormState({ ...formState, fontSizeOption: value })
						}
						options={fontSizeOptions}
						title='РАЗМЕР ШРИФТА'
					/>
					<Select
						selected={formState.fontColor}
						onChange={(value) =>
							setFormState({ ...formState, fontColor: value })
						}
						options={fontColors}
						title='ЦВЕТ ШРИФТА'
					/>
					<Separator />
					<Select
						selected={formState.backgroundColor}
						onChange={(value) =>
							setFormState({ ...formState, backgroundColor: value })
						}
						options={backgroundColors}
						title='ЦВЕТ ФОНА'
					/>
					<Select
						selected={formState.contentWidth}
						onChange={(value) =>
							setFormState({ ...formState, contentWidth: value })
						}
						options={contentWidthArr}
						title='ШИРИНА КОНТЕНТА'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetForm} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
