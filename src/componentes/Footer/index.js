import React from "react";
import './style.css';

function Footer() {
  return (
    <footer className="footerApp">
        <div className="frase">
            "CONTE COM NOSSA EXPERTISE EM SUPORTE TÉCNICO, SOLUÇÕES DE TI E ASSISTÊNCIA ADMINISTRATIVA, GARANTINDO PRATICIDADE E EFICIÊNCIA PARA O SEU DIA A DIA."
            <p>- Equipe Mello4All</p>
        </div>
        <p className="contato">
            <a href="mailto:contato@mello4all.com.br">contato@mello4all.com.br</a> / Telefone (11) 96631-5654
        </p>
    </footer>
  );
}

export default Footer;