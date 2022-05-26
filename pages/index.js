import Head from 'next/head'

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
                    <a>Inícior</a>
                    <a>Ensino Superior</a>
                    <a>Enem/Vestibular</a>
                    <a>Referências</a>
                    <a>Sugestões</a>
                    <a>Contato</a>
                </div>
            </nav>
            <div class='Corpo'>
                <div class='imgHome'>
                    
                </div>
                <div class='sobre'>
                </div>
            </div>
        </div>
    );
}

export default Home;