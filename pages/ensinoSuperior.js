import Head from 'next/head'
import Link from 'next/link'

function ensinoSuperior(){
    return (
        <div>
            <Head>
                <title>Ensino Superior</title>
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
            <div>
                <div class='descRS'>
                    <h2>Relações Socioemocionais</h2>
                    <p>Uma coisa que nós do ---nome projeto--- entendemos bem, é o quão difícil é esse período entre o ensino médio até o ensino superior (acredite já passamos por isso 😉). Por isso essa parte do nosso projeto é dedicada a ajudar pessoas que estão passando por problemas que, por mais que sejam “pequenos” na visão externa de muita gente, para essas pessoas são na verdade grandes barreiras. Antes de tudo, NÓS NÃO SOMOS ESPECIALISTAS e todos os estudos/pesquisas/notícias que poderemos citar nesta página, foram feitos com muita pesquisa e suas referências poderão ser encontradas no site. Se o seu caso for algo mais extremo como um quadro depressivo ou uma ansiedade que afete seu dia a dia, por favor entre em contato com um terapeuta mais acessível para você, o SUS possui atendimento psicológico gratuito, você precisa apenas do cartão SUS e requisitar o atendimento em uma unidade mais próxima de você (contato na aba “contatos” do site). Nosso objetivo aqui é contar experiências que passamos e que outras pessoas de nossa pesquisa passaram (temos a permissão para isso) com fim de fazer você simpatizar com nosso trabalho e não se sentir sozinho(a).</p>
                </div>
                <div class='sumarioRS'>
                    <h2>Sumário</h2>
                    <ul>O poder do 'NÃO'</ul>
                    <ul>Relações acadêmicas</ul>
                    <ul>Relações familiares</ul>
                    <ul>Um ambiente nada receptivo</ul>
                    <ul>Autoconhecimento</ul>
                    <ul>Solitude e a socialização</ul>
                    <ul>A faculdade</ul>
                    <ul>“O que você quer fazer?”</ul>
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