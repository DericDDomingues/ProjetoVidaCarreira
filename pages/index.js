import Head from 'next/head'
import Link from 'next/link'

function Home(){
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
                        <a class='paginaAtual'>Início</a>
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
                        <a>Contato</a>
                    </Link>
                </div>
            </nav>
            <div>
                <div class='imgHome'></div>
                <div class='sobre'>
                    <div class="imgSobre">
                        <img src='/images/equipe.jpg' class='imageS'/>
                    </div>
                    <div class="descSobre">
                        <h2 class="h2s">Sobre Nós</h2>
                        <h3 class="h3s">O que nós fazemos?</h3>
                        <div class="linhaS"></div>
                        <p class="ps">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius, animi eveniet vel iusto fuga quidem vero aliquid dolorem, molestias voluptate fugiat expedita placeat. Autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius, animi eveniet vel iusto fuga quidem vero aliquid dolorem, molestias voluptate fugiat expedita placeat. Autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius, animi eveniet vel iusto fuga quidem vero aliquid dolorem, molestias voluptate fugiat expedita placeat. Autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius, animi eveniet vel iusto fuga quidem vero aliquid dolorem, molestias voluptate fugiat expedita placeat. Autem.</p>
                    </div>
                    <p className='palavraGrande1'>S O B R E</p>
                </div>
                <div class='features'>
                    <div class='descFeatures'>
                        <h2 class="h2f">Nossas Ferramentas</h2>
                        <h3 class="h3f">Como nós te ajudamos?</h3>
                        <div class="linhaF1"></div>
                        <p class="pf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius, animi eveniet vel iusto fuga quidem vero aliquid dolorem, molestias voluptate fugiat expedita placeat. Autem.</p>
                        <div>
                            <div className='blocoFeatures'>
                                <div class='asFeatures'>
                                    <div class='divF'>
                                        <div class='iconeFeatures'></div>
                                        <h2 class='h2F'>Como se Preparar</h2>
                                    </div>
                                    <p class='pf1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius.</p>
                                </div>
                                <div class='asFeatures'>
                                    <div class='divF'>
                                        <div class='iconeFeatures'></div>
                                        <h2 class='h2F'>ENEM/Vestibular</h2>
                                    </div>
                                    <p class='pf1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius.</p>
                                </div>
                            </div>
                            <div className='blocoFeatures'>
                                <div class='asFeatures'>
                                    <div class='divF'>
                                        <div class='iconeFeatures'></div>
                                        <h2 class='h2F'>Guia</h2>
                                    </div>
                                    <p class='pf1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius.</p>
                                </div>
                                <div class='asFeatures'>
                                    <div class='divF'>
                                        <div class='iconeFeatures'></div>
                                        <h2 class='h2F'>Sugestões</h2>
                                    </div>
                                    <p class='pf1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='imgFeatures'>
                        <div class="linhaF2"></div>
                    </div>
                    <p className='palavraGrande2'>F E R R A M E N T A S</p>
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

export default Home;