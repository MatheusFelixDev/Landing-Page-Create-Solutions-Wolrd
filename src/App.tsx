import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import { Button } from './components/ui/button';
import { Service } from './components/service';

export function App() {
  return(
    <>
      <NavBar />
      <Banner />
      <Service />
      <h1>O sangue de Jesus tem poder</h1>
      <Button>Amém</Button>
    </>
  )
}