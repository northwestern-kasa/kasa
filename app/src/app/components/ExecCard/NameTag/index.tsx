import styles from './nametag.module.css'

export default function NameTag(props: object) {
    return (
        <div className={styles.nametag}>
            <p className={styles.text}>{props.name}</p>
        </div>
    )
}