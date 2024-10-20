import { useEffect, useState } from 'react'
import './styles.css'
import CardCharacter from '../../components/CardCharacters';
import Pagination from '../../components/Pagination';

export default function Characters() {
    const [conteudo, setConteudo] = useState(<>Carregando...</>);
    const [busca, setBusca] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    async function getCharacter() {
        const reqOptions = {
            method: "GET",
            redirect: "follow"
        }

        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${page}${busca}`,
            reqOptions
        )

        if (!response.ok) {
            throw new Error("HTTP Error!");
        }

        const data = await response.json();

        return { info: data.info, char: data.results }
    }

    async function buildCard() {
        const { char: characters, info } = await getCharacter()
        setTotalPages(info.pages)

        return characters.map(character => <CardCharacter data={character} />);
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await buildCard())
        }

        getConteudo()
    }, [page, busca])


    return (
        <>
            <main id="main-characters">
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />
                
                <div id='api-content'>
                    {conteudo}
                </div>
            </main>
        </>
    )
}