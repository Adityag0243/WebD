// import styles from './button.module.css'

export default function Home() {
  console.log("Inside home..... ");
  
  const role = 'user1';
  return (
    <div className="">
      <main className="">
        {role=="admin"? <button className='bg-blue-600 text-white text-lg p-2 rounded-xl'>Admin</button>:role == "user"? 
        <button className='bg-blue-600 text-white text-lg p-2 rounded-xl'>User</button>:<h4>Nothing</h4>}
      </main>
    </div>
  );
}