import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50x
  `

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
        <h2>Posts</h2>
        <article className="postsContainer_posts">
             <a href="/">
              Titulo do Post
             </a>
            <p>
              Resumo do Post
            </p>
        </article>

        <article className="postsContainer_posts">
             <a href="/">
              Titulo do Post
             </a>
            <p>
              Resumo do Post
            </p>
        </article>
      </section>
    
    
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