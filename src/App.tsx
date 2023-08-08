import Wrapper from "./helpers/Wrapper"
import Navigation from "./components/Navigation"
import Hero from "./layout/Hero"
import Features from "./layout/Features"
import Card from "./components/FirstCard"
import Footer from "./layout/Footer"
import SecondCard from "./components/SecondCard"

function App() {
  return (
    <Wrapper>
      <div className="space-y-8 bg-gradient-to-t from-white to-gray-100">
        <Navigation />
        <Hero />
      </div>
      <SecondCard />
      <Features />
      <Card />
      <Footer />
    </Wrapper>
  )
}

export default App
