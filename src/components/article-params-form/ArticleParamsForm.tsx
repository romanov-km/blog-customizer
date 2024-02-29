import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Text } from '../text';

import {
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

const {
	fontFamilyOption,
	fontSizeOption,
	fontColor,
	backgroundColor,
	contentWidth,
} = defaultArticleState;

export const ArticleParamsForm = ({ setSelectedStyles, resetStyles }: any) => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [formState, setFormState] = useState({
		selectedFont: fontFamilyOption,
		selectedFontSize: fontSizeOption,
		selectedFontColor: fontColor,
		selectedBackgroundColor: backgroundColor,
		selectedContentWidth: contentWidth,
	});

	const toggleForm = () => {
		setIsFormOpen(!isFormOpen);
	};

	const resetForm = () => {
		setFormState({
			selectedFont: fontFamilyOption,
			selectedFontSize: fontSizeOption,
			selectedFontColor: fontColor,
			selectedBackgroundColor: backgroundColor,
			selectedContentWidth: contentWidth,
		});
		resetStyles();
	};

	const applyStyles = (event: React.FormEvent) => {
		event.preventDefault();
		setSelectedStyles({
			fontFamily: formState.selectedFont.value,
			fontSize: formState.selectedFontSize.value,
			fontColor: formState.selectedFontColor.value,
			contentWidth: formState.selectedContentWidth.value,
			backgroundColor: formState.selectedBackgroundColor.value,
		});
		toggleForm();
	};
	return (
		<>
			<ArrowButton onClick={toggleForm} isFormOpen={isFormOpen} />

			<aside
				className={`${styles.container} ${
					isFormOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form} onSubmit={applyStyles}>
					<Text as='h2' size={31} weight={800} align='left' family='open-sans'>
						Задайте параметры
					</Text>

					<Select
						selected={formState.selectedFont}
						onChange={(value) =>
							setFormState({ ...formState, selectedFont: value })
						}
						options={fontFamilyOptions}
						title='ШРИФТ'
					/>

					<RadioGroup
						selected={formState.selectedFontSize}
						name='radio'
						onChange={(value) =>
							setFormState({ ...formState, selectedFontSize: value })
						}
						options={fontSizeOptions}
						title='РАЗМЕР ШРИФТА'
					/>
					<Select
						selected={formState.selectedFontColor}
						onChange={(value) =>
							setFormState({ ...formState, selectedFontColor: value })
						}
						options={fontColors}
						title='ЦВЕТ ШРИФТА'
					/>
					<Separator />
					<Select
						selected={formState.selectedBackgroundColor}
						onChange={(value) =>
							setFormState({ ...formState, selectedBackgroundColor: value })
						}
						options={backgroundColors}
						title='ЦВЕТ ФОНА'
					/>
					<Select
						selected={formState.selectedContentWidth}
						onChange={(value) =>
							setFormState({ ...formState, selectedContentWidth: value })
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
