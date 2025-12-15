// import Image from "next/image";
import styles from './button.module.css'


export default function Home() {
  const role = 'user1';
  return (
    <div className="">
      <main className="">
        {role=="admin"? <button className={`${styles.button}`}>Admin</button>:role == "user"? 
        <button className={`${styles.button}`}>User</button>:<h4>Nothing</h4>}
      </main>
    </div>
  );
}
