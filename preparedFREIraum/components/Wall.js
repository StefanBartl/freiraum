import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Wall(props) {
  return (
    <section className={`${styles.wall}`}>
      <div className={`${styles.newpost}`}>
        <img src="./graphics/images/sonnenbild.jpg" alt="Profilbild"></img>
        <button type="text" title="Schreib einen Post">
          Was machst du gerade?
        </button>
      </div>

      <div className={`${styles.currentwall}`}>
        <h2>Wall</h2>
      </div>
    </section>
  );
}
