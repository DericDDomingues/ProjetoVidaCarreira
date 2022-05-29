import Head from 'next/head'
import Link from 'next/link'
import {useState} from 'react';

function Contato(){

    const [dataForm, definirDataForm] = useState({
        nome: '',
        email: '',
        assunto: '',
        conteudo: ''
    });

    const entradaAlteracao = e => definirDataForm({...dataForm, [e.target.name]: e.target.value});

    const enviarContato = async e =>{
        e.preventDefault(),
        console.log(dataForm.nome)
    };

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
                <form onSubmit={enviarContato}>
                    <input class='inputS' type='text' name='nome' placeholder='Nome completo . . .' onChange={entradaAlteracao} value={dataForm.nome}/>
                    <input class='inputS' type='email' name='email' placeholder='Email que mais usa . . .' onChange={entradaAlteracao} value={dataForm.email}/>
                    <input class='inputS' type='text' name='assunto' placeholder='Assunto . . .' onChange={entradaAlteracao} value={dataForm.assunto}/>
                    <textarea class='inputT' type='text' name='conteudo' placeholder='Mensagem . . .' onChange={entradaAlteracao} value={dataForm.conteudo}/>
                    <button class='Button' type='submit'>Enviar</button>
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