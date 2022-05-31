import Head from 'next/head'
import Link from 'next/link'

function Contato(){

    return (
        <div>
            <Head>
                <title>Contato</title>
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
                        <a>Enem/Vestibular</a>
                    </Link>
                    <Link href="/contato">
                        <a class='paginaAtual'>Contato</a>
                    </Link>
                </div>
            </nav>
            <div class='formulario'>
                <div class='descForm'>
                    <h2>Quer entrar em contato conosco?</h2>
                    <p>Olá, precisa entrar em contato conosco? Bem, esse campo é totalmente para você, nele você pode nos mandar mensagem sua mensagem sobre dúvidas, reclamações, feedback e muitas outras coisas que desejar, mas pedimos que siga algumas regrinhas ok? Todas as informações contidas nesta mensagem não serão passada a terceiros, somente nós do grupo veremos, então não se preocupe.</p>
                    <div class='divExpli'>
                        <p>Coloque seu nome completo para a gente te ajudar e identificar mais fácil.</p>
                    </div>
                    <div class='divExpli'>
                        <p>Coloque o e-mail que mais usa para conseguirmos entrar em contato contigo.</p>
                    </div>
                    <div class='divExpli'>
                        <p>Coloque o assunto para sabermos de que se trata a mensagem.</p>
                    </div>
                    <div class='divExpli'>
                        <p>Não seja mal educado, estamos aqui para ajudar e melhorarmos, mesmo que tenha uma péssima experiência não é necessário xingamento, ofensas ou outros tipos de coisas que seja para diminuir ou ofender alguém.</p>
                    </div>
                    <p>De acordo com essas regras vá em frente e mande sua mensagem que receberemos de braços abertos e faremos o melhor para te ajudar! Obrigado desde já por ter lido.</p>
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