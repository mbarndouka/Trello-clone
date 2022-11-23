import Link from 'next/link';
import styles from '../../../styles/Card.module.css';
import Users from '../../users';

export default function UserCard({user}) {
  return (
    <div className={styles.card}>
        <div className={styles.container}>
          <h4><b>{user.name}</b></h4> 
          <p>{ user.email}</p> 
          <Link href={`users/${user.id}`} className={styles.button}> Details </Link>
        </div>
    </div>
  )
}
