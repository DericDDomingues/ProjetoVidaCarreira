import Head from 'next/head'
import Link from 'next/link'

function ensinoSuperior(){
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
                        <a class='paginaAtual'>Ensino Superior</a>
                    </Link>
                    <Link href="/enemVestibular">
                        <a>Enem/Vestibular</a>
                    </Link>
                    <Link href="/contato">
                        <a>Contato</a>
                    </Link>
                </div>
            </nav>
            <div>
                <div class='imgHome'>
                    <div class='unaLogoU'>
                        <img src='/images/unaLogo.png' class='UnaUber'/>
                        <p class='UnaUberP'>U b e r l â n d i a</p>
                    </div>
                    <div class='logoGHome1'>
                        <p class='imgHomep3'>O necessario para viver antes e depois do</p>
                        <p class='imgHomep4'>Ensino Superior</p>
                    </div>
                </div>
            </div>
            <footer>
                <div class='descCabeçalho'>
                    <div>
                        <h3>Desenvolvedores do Projeto:</h3>
                        <p>Deric Dantas Domingues</p>
                        <p>Diego Luiz Silva Peixoto</p>
                        <p>Hemilly de Oliveira Tolentino Torres</p>
                        <p>Maria Clara Barbosa do Amaral</p>
                        <p>Thiago Damasceno Siqueira</p>
                    </div>
                    <div>
                        <h3></h3>
                    </div>
                    <div>
                        <h3>Instituição onde o projeto esta sendo executado:</h3>
                        <img src='/images/unaLogo.png' class='unaLogo'/>
                    </div>
                </div>
                <div class='direitosAutorais'>
                <h2>© Todos Direitos Reservados</h2>
                </div>
            </footer>
        </div>
    );
}

export default ensinoSuperior;