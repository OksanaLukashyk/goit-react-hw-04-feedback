// import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.btnList}> {
            options.map(option => (
                <li key={option} className = {css.btnListItem}>
                    <button
                        type="button"
                        className={css.btnFeedBack}
                        onClick={() => {
                            onLeaveFeedback(option);
                            // Report.success(
                            //     'Feedback was successfully added',  'Your opinion is very valuable. With many thanks, your cafe "Expresso"', 'Ok',
                        Notify.success(
                            'Your opinion is very valuable for us - With many thanks💜, your cafe "Expresso"',
  {
    timeout: 6000,
  },
);
                        }}
                    >
                        {option}
                    </button>
                </li>
            ))
        }
        </ul>
    )
}
