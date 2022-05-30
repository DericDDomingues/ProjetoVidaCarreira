import Head from 'next/head'
import Link from 'next/link'

function Contato(){

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
                        <a>Início</a>
                    </Link>
                    <Link href="/ensinoSuperior">
                        <a>Ensino Superior</a>
                    </Link>
                    <Link href="/enemVestibular">
                        <a>Enem/Vestibular</a>
                    </Link>
                    <Link href="/contato">
                        <a class='paginaAtual'>Contato</a>
                    </Link>
                </div>
            </nav>
            <div class='formulario'>
                <div class='descForm'>
                    <h2>NomeProjeto</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi saepe veniam dolore non! Nisi debitis laudantium ullam voluptas voluptatibus officia minima asperiores numquam veniam consequatur, exercitationem assumenda fugit nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi saepe veniam dolore non! Nisi debitis laudantium ullam voluptas voluptatibus officia minima asperiores numquam veniam consequatur, exercitationem assumenda fugit nostrum?</p>
                    <div class='divExpli'>
                        <div class='imgExpli'></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi saepe veniam dolore non! Nisi debitis laudant.</p>
                    </div>
                    <div class='divExpli'>
                        <div class='imgExpli'></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi saepe veniam dolore non! Nisi debitis laudant.</p>
                    </div>
                    <div class='divExpli'>
                        <div class='imgExpli'></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi saepe veniam dolore non! Nisi debitis laudant.</p>
                    </div>
                    <div class='divExpli'>
                        <div class='imgExpli'></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi saepe veniam dolore non! Nisi debitis laudant.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi saepe veniam dolore non! Nisi debitis laudantium ullam voluptas voluptatibus officia minima asperiores numquam veniam consequatur, exercitationem assumenda fugit nostrum?</p>
                </div>
                <form>
                    <iframe class='formsG' src="https://docs.google.com/forms/d/e/1FAIpQLSf7rWfhIcZO9cOM84m-rkI5JNZGBLxrszEXqzP1UjnghBVJbA/viewform?embedded=true">Carregando…</iframe>
                </form>
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

export default Contato;

/*
<form>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf7rWfhIcZO9cOM84m-rkI5JNZGBLxrszEXqzP1UjnghBVJbA/viewform?embedded=true" width="640" height="905" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
    <input class='inputS' type='text' name='nome' placeholder='Não esta funcionado ainda'/>
    <input class='inputS' type='email' name='email' placeholder='Não esta funcionado ainda'/>
    <input class='inputS' type='text' name='assunto' placeholder='Não esta funcionado ainda'/>
    <textarea class='inputT' type='text' name='conteudo' placeholder='Não esta funcionado ainda'/>
    <Link href=''>
        button class='Button' type='submit'>Clique para ir ao forms e enviar sua mensage!</button>
    </Link>
</form>
*/