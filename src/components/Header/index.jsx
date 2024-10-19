import './styles.css'
import title from './../../assets/title-rick-and-morty.webp'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header id="header-container">
                <img src={title} alt="" />
                <nav id='nav'>
                    <Link to='/'>home</Link>
                    <Link to='/personagens'>personagens</Link>
                    <Link to='/episodios'>episódios</Link>
                </nav>
            </header>
        </>
    )
}