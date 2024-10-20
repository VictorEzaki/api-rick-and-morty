import './styles.css'
import rick from './../../assets/rick.png'
import morty from './../../assets/image.png'
import justin from './../../assets/Justin.jpg'
import james from './../../assets/james.webp'

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
                            <a href="#section-create">Criadores</a>
                        </div>
                    </div>
                    <img src={ rick } alt="" id='rick' />
                </div>

                <section id='section-create'>
                    <div id="container">
                        <div className="create">
                            <img src={ justin } alt="" id='justin' />
                            <h1 className='title-create'>Justin Roiland</h1>
                            <p className='text-create'>Mark Justin Roiland é um ator, dublador, animador, escritor, produtor, diretor, e comediante americano.</p>
                        </div>
                        <div className="create">
                            <img src={ james } alt="" />
                            <h1 className='title-create'>Dan Harmon</h1>
                            <p className='text-create'>Daniel James Harmon é um roteirista e produtor americano.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}