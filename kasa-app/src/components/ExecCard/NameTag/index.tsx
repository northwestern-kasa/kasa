
export default function NameTag(props: object) {
    return (
        // <div className={styles.nametag}>
        <div className="absolute w-3/4 h-13 bg-[#2B3467] rounded-tl-[40px] rounded-tr-0 rounded-br-[40px] rounded-bl-0 left-0 p-3">
            <p className="text-center text-white text-2xl font-extrabold">{props.name}</p>
        </div>
    )
}