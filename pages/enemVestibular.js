import Head from 'next/head'
import Link from 'next/link'

function enemVestibular(){
    return (
        <div>
            <Head>
                <title>Enem/Vestibular</title>
            </Head>
            <nav>
                <div>
                    <Link href="/">
                        <h1>Universomos</h1>
                    </Link>
                </div>
                <div class='Menu'>
                    <Link href="/">
                        <a>Início</a>
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
                <div class='linhaEnem'></div>
                <div class='materiaEnem'>
                    <div>
                        <h2 class='h2me'> Materias que mais caem no ENEM</h2>
                        <div class='categoriasEnem'>
                            <div class='CHT'>
                                <h2 class='nomeCategoria'>Ciências Humanas e suas Tecnologias</h2>
                                <h3 class='nomeMateria'>História</h3>
                                <img class='imgMateria' src='/images/história.jpg'/>
                                <h3 class='nomeMateria'>Geografia</h3>
                                <img class='imgMateria' src='/images/Geografia.webp'/>
                                <h3 class='nomeMateria'>Filosofia</h3>
                                <img class='imgMateria' src='/images/Filosofia.webp'/>
                                <h3 class='nomeMateria'>Sociologia</h3>
                                <img class='imgMateria' src='/images/sociologia.webp'/>
                            </div>
                            <div class='CNT'>
                                <h2 class='nomeCategoria'>Ciências da Natureza e suas Tecnologias</h2>
                                <h3 class='nomeMateria'>Biologia</h3>
                                <img class='imgMateria' src='/images/Biologia.webp'/>
                                <h3 class='nomeMateria'>Química</h3>
                                <img class='imgME' src='/images/química.jpg'/>
                                <h3 class='nomeMateria'>Física</h3>
                                <img class='imgMateria' src='/images/física.jpg'/>
                            </div>
                            <div class='LCT'>
                                <h2 class='nomeCategoria'>Linguagens, Códigos e suas Tecnologias</h2>
                                <h3 class='nomeMateria'>Português</h3>
                                <img class='imgMateria' src='/images/portuges 1.webp'/>
                                <h3 class='nomeMateria'>Interpretação</h3>
                                <img class='imgMateria' src='/images/interpretação.jpg'/>
                                <h3 class='nomeMateria'>Educação</h3>
                                <img class='imgMateria' src='/images/Educação.jpg'/>
                                <h3 class='nomeMateria'>Artes</h3>
                                <img class='imgMateria' src='/images/Artes.webp'/>
                            </div>
                            <div class='MT'>
                                <h2 class='nomeCategoria'>Matemática e suas Tecnologias</h2>
                                <h3 class='nomeMateria'>Matemática</h3>
                                <img class='imgME2' src='/images/matemática(1).jpg'/>
                            </div>
                        </div>
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