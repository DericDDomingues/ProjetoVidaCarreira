import Head from 'next/head'
import Link from 'next/link'

function enemVestibular(){
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
                        <a class='paginaAtual'>Enem/Vestibular</a>
                    </Link>
                    <Link href="/referencias">
                        <a>Referências</a>
                    </Link>
                    <Link href="/sugestoes">
                        <a>Sugestões</a>
                    </Link>
                    <Link href="/contato">
                        <a>Contato</a>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default enemVestibular;