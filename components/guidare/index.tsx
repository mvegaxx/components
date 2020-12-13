import {
  CardContainer,
  CardButton,
  CardContent,
  CardIcon,
  CardIconContainer,
  CardTitle
} from "./index.styles"

export const Card = (): JSX.Element => (

  <CardContainer>
    <CardIconContainer>
      <CardIcon src="balanza.svg" />
    </CardIconContainer>
    <CardTitle>Este es el titulo</CardTitle>
    <CardContent>Este es el contenido de la tarjeta, aqui debe ir un parrafo pequeño</CardContent>
    <CardButton >hola</CardButton>
  </CardContainer>
)

export default Card
