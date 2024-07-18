import Image from "next/image";
import styles from './index.module.css'
import RedButton from "./components/RedButton";
import ExecCard from "./components/ExecCard";
import execImages from "./components/ExecCard/execData.json"

export default function Home() {
  return (
    <main className={styles.main}>

      <h1>Northwestern KASA</h1>
      <RedButton Text="Submit"/>
      <ExecCard images={execImages.execImages}/>
    </main>
  );
}
