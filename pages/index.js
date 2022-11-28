import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

import Footer from '../components/Footer';

const SubTitle = styled.h2`
  backgorund-color: var(--primary);
  color: black;
  display: inline-block;
  padding: 5px
  `;

  export default function Home(props) {
  console.log(props);
  return (
    <div>
      <header className="headerContainer">
          <img src ={props.avatar_url} />
        <Link href="/sobre">
            Bill Gates's Blog
        </Link>
      </header>

      <section className="postsContainer">
       <SubTitle>Posts</SubTitle>
        <article className="postsContainer_posts">
             <a href="/">
              Biografia
             </a>
            <p>
            William Henry Gates nasceu em 28 de outubro de 1955, em Seattle, Washington. Como o principal fundador da Microsoft, Bill Gates é uma das pessoas mais influentes e ricas do planeta. Estimativas recentes de sua riqueza a colocam em US $ 84,2 bilhões (janeiro de 2017); isto é o equivalente ao PIB combinado de várias economias africanas. Nos últimos anos, ele se aposentou do trabalho em tempo integral na Microsoft e, em vez disso, concentrou-se em trabalhar com sua fundação de caridade “The Bill and Melinda Gates Foundation”.

Seu pai, William Gates Sr., era um advogado sênior, e sua mãe, Mary, atuou como executiva de um grande banco. A família era rica, mas, lembrando-se dos desafios da Grande Depressão, incentivou os filhos a trabalhar duro e não dar valor a nada.

Aos 13 anos, Gates frequentou a escola particular de Lakeside. Foi aqui que Gates teve sua primeira introdução aos computadores. Ele aprendeu sozinho a programar no Básico, fazendo um jogo simples de 'Tic-Tac-Toe'. Gates gostou do processo de trabalhar com computadores e combinou com uma empresa Computer Center Corporation (CCC) para passar o tempo em seus computadores - aprendendo código-fonte, como Fortran, Machine Code e Lisp.

Em 1973, Gates se matriculou em Harvard, onde estudou matemática e ciência da computação. No entanto, Gates estava mais interessado em seguir sua própria codificação e, quando viu uma oportunidade de fundar sua própria empresa, abandonou Harvard sem terminar o curso.
            </p>
        </article>

        <article className="postsContainer_posts">
             <a href="/">
              Microsoft
             </a>
            <p>
            Bill Gates fundou a Microsoft em 1976, quando firmou um contrato com a MITS (Micro Instrumentation and Telemetry Systems) para desenvolver um sistema operacional básico para seus novos microcomputadores. Nos primeiros dias, Bill Gates revisava cada linha de código. Ele também estava envolvido em vários aspectos dos negócios da Microsoft, como embalagem e envio de pedidos.

A grande oportunidade para a Microsoft veio em 1980, quando a IBM os procurou para um novo sistema operacional BASIC para seus novos computadores. No início dos anos 1980, a IBM era de longe o principal fabricante de PCs. No entanto, cada vez mais, desenvolveram-se muitos clones do IBM PC; (PCs produzidos por outras empresas compatíveis com os da IBM). A Microsoft trabalhou duro para vender seu sistema operacional para essas outras empresas. Assim, a Microsoft conseguiu obter a posição dominante na fabricação de software no momento em que o mercado de computadores pessoais começou a crescer. Desde seu domínio inicial, outras empresas lutaram para substituir a Microsoft como fornecedora dominante de software operacional para computadores. Programas como Microsoft Word e Excel tornaram-se o padrão da indústria.
            </p>
        </article>

        <article className="postsContainer_posts">
             <a href="/">
             Windows
             </a>
            <p>
            Em 1990, a Microsoft lançou sua primeira versão do Windows. Este foi um avanço no software operacional, pois substituiu as interfaces de texto por interfaces gráficas. Ele logo se tornou um best-seller e conseguiu capturar a maior parte do mercado de sistemas operacionais. Em 1995, o Windows 95 foi lançado, estabelecendo novos padrões e recursos para sistemas operacionais. Esta versão do Windows tem sido a espinha dorsal de todos os lançamentos futuros do Windows 2000 até os últimos XP e Vista.

Ao longo de seu mandato, Bill Gates tem se empenhado em diversificar os negócios da Microsoft. Por exemplo, o Internet Explorer da Microsoft se tornou o navegador da Web dominante, embora isso ocorresse principalmente porque ele vinha pré-instalado na maioria dos novos computadores. Nos últimos anos, o Internet Explorer viu sua participação no mercado cair.

Uma área em que a Microsoft nunca foi bem-sucedida é a dos mecanismos de busca. A busca ao vivo do MSN tem lutado para ganhar mais de 5% de participação no mercado. A esse respeito, a Microsoft foi ofuscada pelo Google. No entanto, o sucesso da Microsoft em controlar vários aspectos do mercado de software levou a vários casos antitruste. Em 1998 EUA x Microsoft, a Microsoft quase foi dividida em três empresas menores. No entanto, após apelação, a Microsoft conseguiu sobreviver como uma única empresa. Embora a Microsoft tenha sido a empresa de computadores dominante nas décadas de 1980 e 1990, ela agora é vista como uma empresa envelhecida e decadente – em comparação com o Google e a Apple, mais dinâmicos.
            </p>
        </article>

      </section>
    
    <Footer />
    </div>
  )
}

export async function getStaticProps(){
  return {
    props: {
      avatar_url: "https://s2.glbimg.com/PUZaxeH10sfPu59n7vGYVEhii40=/620x430/e.glbimg.com/og/ed/f/original/2022/07/25/bill-gates.png",
    }
  }
}