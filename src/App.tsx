import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import { Service } from './components/service';
import { Newsletter } from './components/Newsletter';
import { Packs } from './components/Packs';
import { Footer } from './components/Footer';

export function App() {
  return(
    <>
      <NavBar />
      <Banner />
      <Service />
      <Newsletter />
      <Packs />
      <Footer />
    </>
  )
}