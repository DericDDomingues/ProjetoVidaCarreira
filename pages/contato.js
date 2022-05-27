import Head from 'next/head'
import Link from 'next/link'

function Contato(){
    return (
        <div>
            <Head>
                <title>NomeProjeto</title>
            </Head>
            <nav>
                <div>
                    <Link href="/">
                        <h1>NomeProjeto</h1>
                    </Link>
                </div>
                <div class='Menu'>
                    <Link href="/">
                        <a>Inícior</a>
                    </Link>
                    <Link href="/ensinoSuperior">
                        <a>Ensino Superior</a>
                    </Link>
                    <Link href="/enemVestibular">
                        <a>Enem/Vestibular</a>
                    </Link>
                    <Link href="/referencias">
                        <a>Referências</a>
                    </Link>
                    <Link href="/sugestoes">
                        <a>Sugestões</a>
                    </Link>
                    <Link href="/contato">
                        <a class='paginaAtual'>Contato</a>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Contato;