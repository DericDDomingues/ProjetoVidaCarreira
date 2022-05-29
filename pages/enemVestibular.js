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
                        <p class='imgHomep3'>O necessario para gabaritar o</p>
                        <p class='imgHomep4'>ENEM</p>
                    </div>
                </div>
                <div class='dataEnem'>
                    <div class='dataenem'>
                        <h2 class="h2s">Data ENEM</h2>
                        <h3 class="h3s">Quando vai acontecer?</h3>
                        <div class='infoData'>
                            <p>Data do evento não divulgada ainda!</p>
                        </div>
                    </div>
                </div>
                <div class='linhaS'></div>
                <div class='materiaEnem'>
                    <h2> Materias que mais caem no ENEM</h2>
                    <div class='CHT'>
                        <h3>História</h3>
                        <img src='/images/história.jpg'/>
                        <h3>História</h3>
                        <img src='/images/Geografia.webp'/>
                        <h3>História</h3>
                        <img src='/images/Filosofia.webp'/>
                        <h3>História</h3>
                        <img src='/images/sociologia.webp'/>
                    </div>
                    <div class='CNT'>
                        <h3>História</h3>
                        <img src='/images/Biologia.webp'/>
                        <h3>História</h3>
                        <img src='/images/química.jpg'/>
                        <h3>História</h3>
                        <img src='c/images/física.jpg'/>
                    </div>
                    <div class='LCT'>
                        <h3>História</h3>
                        <img src='/images/portuges 1.webp'/>
                        <h3>História</h3>
                        <img src='/images/interpretação.jpg'/>
                        <h3>História</h3>
                        <img src='/images/Educação.jpg'/>
                        <h3>História</h3>
                        <img src='/images/Artes.webp'/>
                    </div>
                    <div class='MT'>
                        <h3>História</h3>
                        <img src='/images/matemática(1).jpg'/>
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

export default enemVestibular;