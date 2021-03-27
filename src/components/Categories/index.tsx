import { CategoriesCard } from "./CategoriesCard";
import { Container, CatalogContainer } from "./styles";

export function Categories() {
  return (
    <>
      <Container>
        <h1>Catalogo</h1>

        <CatalogContainer>
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </CatalogContainer>
      </Container>
    </>
  )
}