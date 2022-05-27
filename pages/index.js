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
                        <a class='paginaAtual'>Inícior</a>
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
            <div class='Corpo'>
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
                    <p className='palavraGrande'>S O B R E</p>
                </div>
                <div class='features'>
                    <div class='descFeatures'>
                    <h2 class="h2f">Sobre Nós</h2>
                        <h3 class="h3f">O que nós fazemos?</h3>
                        <div class="linhaF1"></div>
                        <p class="pf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius, animi eveniet vel iusto fuga quidem vero aliquid dolorem, molestias voluptate fugiat expedita placeat. Autem.</p>
                    </div>
                    <div class='imgFeatures'>
                        <div class="linhaF2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;