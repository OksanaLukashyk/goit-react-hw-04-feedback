import css from './Statictics.module.css'

export const Statictics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={css.statsList}>
            <li className={css.statsListItem}>Good: {good}</li>
            <li className={css.statsListItem}>Neutral: {neutral}</li>
            <li className={css.statsListItem}>Bad: {bad}</li>
            <li className={css.statsListItem}>Total: {total}</li>
            <li className={css.statsListItem}>Positive feedback: {positivePercentage}%</li>
        </ul>
    )
}