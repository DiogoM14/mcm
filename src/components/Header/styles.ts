import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: var(--header-background);
  height: 5rem;
  border-bottom: 1px solid var(--line);

  div {
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;

    & img {
      width: 52px;
      height: 52px;
    }
  }

  nav {
    margin: 0 auto;
  }

  nav a {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;

    & + a {
      margin-left: 2.5rem;
    }

    &.active {
      font-weight: 700;
      color: var(--font-highlight);
    }

    &.active::after {
      content: '';
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background: #273c75;
    }
  }
`