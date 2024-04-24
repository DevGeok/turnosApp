import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h1>Mi Navbar</h1>
      <div className="links">
       <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/create">New Blog</a></li>
       </ul>
      </div>
    </nav>
  );
}

export default Navbar;