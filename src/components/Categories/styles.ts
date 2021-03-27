import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  padding: 1rem 2rem;
`

export const CatalogContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
`