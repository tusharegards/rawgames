import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
function App() {
  return (
    <>
     <Grid templateAreas={`"nav nav" "aside main"`}>
      <GridItem area='nav'><NavBar/></GridItem>
      <GridItem area='aside'  bg='gold'>aside</GridItem>
      <GridItem area='main'  bg='dodgerBlue'>main</GridItem>
     </Grid>
    </> 
  )
}

export default App
