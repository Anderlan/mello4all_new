import React, { useState } from "react";
import './style.css';
import Modal from 'react-modal';

import Presentation from "../../assets/presentation.jpg";
import Business from "../../assets/business.jpg";
import Computer from "../../assets/computer.jpg";
import ImgTi from "../../assets/imgleft.jpg";

function Services() {
    const [modalIsOpen, setIsOpen] = useState(false);
    function abrirModal() { setIsOpen(true); }
    function fecharModal() { setIsOpen(false); }
    return (
        <div className="services">
            <h1>Nossos Serviços</h1>
            <p>Potencialize sua rotina com nossos serviços versáteis: suporte técnico, soluções de TI, assistência administrativa e
                elaboração de planilhas personalizadas para o seu negócio ou uso pessoal.</p>

            <div className="cards">
                <button onClick={abrirModal} className="boxCard">
                    <img className="imagemCard" src={Presentation} alt="Presentation" />
                    <div className="textCard">Planilhas Personalizadas</div>
                </button>
                <Modal isOpen={modalIsOpen} onRequestClose={fecharModal} contentLabel='Planilhas Personalizadas' style={{ content: { backgroundColor: 'none', margin: '0', padding: '0', borderRadius: 0 } }}>
                    <button className="buttonModal" onClick={fecharModal}>Fechar</button>
                    <div className="containerService">
                        <div className="containerCard">
                            <div className="leftContainerCard">
                                <h1>Planilhas Personalizadas</h1>
                                <h2>Transforme seus dados em insights valiosos com nossos serviços personalizados!</h2>
                                <p>Você já se deparou com a tarefa árdua de organizar e analisar grandes quantidades de dados?
                                    Nós temos a solução! Nossa equipe de especialistas em planilhas está pronta para criar planilhas personalizadas
                                    que atendam às suas necessidades específicas. Seja para acompanhamento de projetos, controle financeiro ou análise de vendas,
                                    nossas planilhas vão simplificar o processo e melhorar sua eficiência.
                                </p>
                                <ul>
                                    <li>📊 Estrutura inteligente para inserção fácil e atualização de dados;</li>
                                    <li>🔍 Visual atraente e intuitivo para análise rápida;</li>
                                    <li>📚 Aulas particulares de Excel.</li>
                                </ul>
                                <div className="botoes">
                                    <ul>
                                        <li><a href="/" className="saibaMais">Saiba Mais</a></li>
                                        <li><a href="/" className="duvidasFrequentes">Dúvidas Frequentes</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rightContainerCard">
                                <img className="imagesRight" src={ImgTi} alt="ImgTi"></img>
                            </div>
                        </div>
                    </div>
                </Modal>

                <button onClick={abrirModal} className="boxCard">
                    <img className="imagemCard" src={Business} alt="Business" />
                    <div className="textCard">Suporte administrativo</div>
                </button>
                <Modal isOpen={modalIsOpen} onRequestClose={fecharModal} contentLabel='Planilhas Personalizadas' style={{ content: { backgroundColor: 'none', margin: '0', padding: '0', borderRadius: 0 } }}>
                    <button className="buttonModal" onClick={fecharModal}>Fechar</button>
                </Modal>

                <div className="boxCard">
                    <img className="imagemCard" src={Computer} alt="Computer" />
                    <div className="textCard">Suporte de TI</div>
                </div>
            </div>
        </div>
    );
}

export default Services;