import Link from 'next/link';

function Title(props) {
   //style="color: red;"
   return (
      <h1 style={{ color: props.color}}>{props.children}</h1>
   )
}

export default function Home() {
    return (
    <div>
      <header>
        <Title color="red">Página Sobre</Title>
        <img src="..." />
      </header>
    
    <Link href="/">
      <a>
       Link para home!
      </a>
    </Link>
    </div>
    )
  }
  