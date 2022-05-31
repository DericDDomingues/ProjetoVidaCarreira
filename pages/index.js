import Head from 'next/head'
import Link from 'next/link'

function Home(){
    return (
        <div>
            <Head>
                <title>Universomos</title>
            </Head>
            <nav>
                <div>
                    <Link href="/">
                        <h1>Universomos</h1>
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
                    <div class='logoGHome'>
                        <p class='imgHomep1'>Universomos</p>
                        <p class='imgHomep2'>Para dentro da Universida</p>
                        <p class='pImgHome'>ENEM/Vestibula - Ensino Superior - Guia</p>
                    </div>
                </div>
                <div class='sobre'>
                    <div class="imgSobre">
                        <img src='/images/equipe.jpg' class='imageS'/>
                    </div>
                    <div class="descSobre">
                        <h2 class="h2s">Sobre Nós</h2>
                        <h3 class="h3s">O que nós fazemos?</h3>
                        <div class="linhaS"></div>
                        <p class="ps">Olá, nós somos a Universomos, um grupo de estudantes do ensino superior focados em ajudar as pessoas que queiram entrar no ensino superior, não importando sua idade. Nosso projeto é uma trabalho da faculdade que tem o objetivo de ajudar os interessados a ingressar no ensino superior, os ajudando com ferramentas para auxiliar os estudos, o estado emocional e o preparar para a faculdade, explicando como é o ambiente e como é a rotina de estudos para tu já se estar preparado para cursar a universidade de uma forma mais tranquila. Parte do projeto é a construção deste site (que lembre-se, está em desenvolvimento e esse é somente um protótipo!!!!) e elaboração de um guia (que também está em desenvolvimento) para auxiliá-los nessa fase um pouco difícil que é o ensino médio e ensino superior. O projeto só está no início e temos um longo caminho a percorrer, aproveite o site e por favor, nos dê seu feedback na área de <a href='/contato'>Contato</a>, para que nós possamos melhorar e claro, entregar o trabalho. Obrigado desde já por lerem!</p>
                    </div>
                </div>
                <div class='features'>
                    <div class='descFeatures'>
                        <h2 class="h2f">Nossas Ferramentas</h2>
                        <h3 class="h3f">Como nós te ajudamos?</h3>
                        <div class="linhaF1"></div>
                        <p class="pf">Nossas ferramentas para ajudá-los estão divididas em quatro que trabalham em conjunto auxiliando em cada problema que enfrentou ou enfrenta durante o caminho. Eles foram escolhidos a dedo com base em uma pesquisa que fizemos com estudantes do ensino médio e outras pessoas que têm interesse em cursar o ensino superior, mas quais são eles?</p>
                        <div>
                            <div className='blocoFeatures'>
                                <div class='asFeatures'>
                                    <div class='divF'>
                                        <h2 class='h2F'>Como se Preparar</h2>
                                    </div>
                                    <p class='pf1'>Nesse setor iremos te ajudar a se preparar, dando dicas de como se organizar nos estudos, explicando um pouco do ensino superior e suas peculiaridades e também te ajudar a escolher o que deseja cursar com base em você!</p>
                                </div>
                                <div class='asFeatures'>
                                    <div class='divF'>
                                        <h2 class='h2F'>ENEM/Vestibular</h2>
                                    </div>
                                    <p class='pf1'>Aqui seremos clichês e ajudaremos com enem e vestibular com matéria e essas coisas, mas também ajudaremos com a organização desses estudos, programas que te ajuda a entrar na faculdade e como usá-los. </p>
                                </div>
                            </div>
                            <div className='blocoFeatures'>
                                <div class='asFeatures'>
                                    <div class='divF'>
                                        <h2 class='h2F'>Guia</h2>
                                    </div>
                                    <p class='pf1'>Um guia para auxiliá-lo na ingressão ao ensino superior, com toda matéria e auxílio que necessita nesse processo.</p>
                                </div>
                                <div class='asFeatures'>
                                    <div class='divF'>
                                        <h2 class='h2F'>Sugestões</h2>
                                    </div>
                                    <p class='pf1'>E sugestões, para te ajudar nesse processo todo meio que dando uma estrada a seguir sem dor de cabeça.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='imgFeatures'>
                        <img class='imgF' src='/images/estudando-com-laptop.jpg'/>
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

export default Home;