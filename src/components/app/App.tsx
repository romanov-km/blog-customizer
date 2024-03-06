import { useState, CSSProperties } from 'react';
import styles from './App.module.scss';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';
import '../../styles/index.scss';

export const App = () => {
	const [selectedStyles, setSelectedStyles] = useState(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': selectedStyles.fontFamilyOption.value,
					'--font-size': selectedStyles.fontSizeOption.value,
					'--font-color': selectedStyles.fontColor.value,
					'--container-width': selectedStyles.contentWidth.value,
					'--bg-color': selectedStyles.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setSelectedStyles={setSelectedStyles} />
			<Article />
		</main>
	);
};
