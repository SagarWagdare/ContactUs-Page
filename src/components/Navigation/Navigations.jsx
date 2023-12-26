import styles from "./Navigation.module.css"
const Navigations = () => {
  return (
    <nav className={styles.navigation}>
      <img src="images/contactus.png" className={styles.logo} alt="contactus" />
      <ul><li>Home</li>
      <li>About</li>
      <li>Contact</li></ul>
    </nav>
  )
}

export default Navigations