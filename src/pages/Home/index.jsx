import './styles.css'
import rick from './../../assets/rick.png'
import morty from './../../assets/image.png'

export default function Home(){
    return(
        <>
            <main id="main-home">
                <div id="home-container">
                    <div id="text">
                        <div id="sinopse">
                            <h1>Sinopse</h1>
                            <p>Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto Morty, um adolescente não tão brilhante quanto o avô.</p>
                        </div>
                        <div id="button-watch">
                            <img src={ morty } alt="" id='morty' />
                            <a href="#section-watch">Onde assistir</a>
                        </div>
                    </div>
                    <img src={ rick } alt="" id='rick' />
                </div>
            </main>
        </>
    )
}