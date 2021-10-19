import NavBar from './NavBar'
import styles from '../../styles/Home.module.css'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <NavBar />

            {children}

            <footer className={styles.footer}>
                <a
                    href="https://www.discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Discord
                </a>
                <a
                    href="https://www.github.com/NonFungibleSequences"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </footer>
        </>
    )
}

export default Layout
