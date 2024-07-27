import styles from './memberdircard.module.css'
import pfp_placeholder from './pfp_placeholder.svg'


export default function MemberDirCard_small({
    Picture = pfp_placeholder,
    Name = "John Jeong", 
    Interest = "KASA",
    onClick
}: {
        Picture?: MediaImage;
        Name?: string;
        Interest?: string;
        onClick?: ()=> void; 

    }){
    return (
    <button className={styles.button}>
        <div className={styles.redRectangle}></div> 
        <svg className={styles.circle} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#D9D9D9"/>
            <img className={styles.pfp} src={'./pfp_placeholder.svg'}/>
        </svg> 
        
        <h1 className={styles.h1}>{Name}</h1>
        <p className={styles.h2}>Career/Interest:</p>
        <p className={styles.text}>{Interest}</p>
    </button>
    )
}