import { HeaderContainer } from './styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <div>
          <img src="/logo2.svg" alt=""/>
          <nav>
            <a className="active">Início</a>
            <a>Produtos</a>
            <a>Sobre</a>
          </nav>
        </div>
      </HeaderContainer>
    </>
  )
}