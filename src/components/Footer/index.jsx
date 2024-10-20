import './styles.css'
import linkedin from './../../assets/linkedin.png'
import github from './../../assets/github.png'

export default function Footer(){
    return(
        <>
            <footer id='footer'>
                <div id='contact'>
                    <span>&copy;Feito por Victor Ezaki</span>
                    <a href="https://www.linkedin.com/in/victor-ezaki/"><img src={ linkedin } alt="" /></a>
                    <a href="https://github.com/VictorEzaki/"><img src={ github } alt="" /></a>
                </div>
            </footer>
        </>
    )
}