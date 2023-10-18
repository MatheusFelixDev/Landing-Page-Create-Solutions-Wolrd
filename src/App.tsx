import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import { Button } from './components/ui/button';
import { Service } from './components/service';
import { Newsletter } from './components/Newsletter';

export function App() {
  return(
    <>
      <NavBar />
      <Banner />
      <Service />
      <Newsletter />
      <h1>O sangue de Jesus tem poder</h1>
      <Button>Amém</Button>
    </>
  )
}