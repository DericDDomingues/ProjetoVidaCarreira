import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

function Home(){
    return (
        <div>
            <Head>
                <title>NomeProjeto</title>
            </Head>
            <nav>
                <div>
                    <h1>NomeProjeto</h1>
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
                        <a>Contato</a>
                    </Link>
                </div>
            </nav>
            <div class='Corpo'>
                <div class='imgHome'></div>
                <div class='sobre'>
                    <div class="imgSobre">
                        <img src='/public/img/equipe.jpeg' width='300px' height='250px' />
                    </div>
                    <div class="descSobre">
                        <h2 class="h2s">Sobre Nós</h2>
                        <h3 class="h3s">O que nós fazemos?</h3>
                        <div class="linhaS"></div>
                        <p class="ps">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius, animi eveniet vel iusto fuga quidem vero aliquid dolorem, molestias voluptate fugiat expedita placeat. Autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius, animi eveniet vel iusto fuga quidem vero aliquid dolorem, molestias voluptate fugiat expedita placeat. Autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius, animi eveniet vel iusto fuga quidem vero aliquid dolorem, molestias voluptate fugiat expedita placeat. Autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo nisi quasi, nihil autem eius, animi eveniet vel iusto fuga quidem vero aliquid dolorem, molestias voluptate fugiat expedita placeat. Autem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;