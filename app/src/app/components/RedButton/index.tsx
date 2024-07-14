import styles from './redbutton.module.css'

export default function RedButton({
    Text = "Submit",
    onClick
}: {
        Text?: string;
        onClick?: () => void;

    }) {
    return (
        <button className={styles.button}>
            <p className={styles.text}>{Text}</p>
        </button>
    )
}