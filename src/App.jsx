import NavBar from './components/NavBar'
import Intro from './components/Intro'

import './App.css'
import Content from './components/Content'
import Article from './components/Article'
import Footer from './components/Footer'

function App() {

  const DummyData = {
    started: [
      {
        title: "Sign Up",
        content: "Buy Bitcoin or Ethereum, then securely store it in your wallet or send it on easily to friend.",
        image: "../../src/images/Frame01.png"
      }, 
      {
        title: "Fund",
        content: "Choose you preferred payment method such as bank transfer or credit card to top up your wallet.",
        image: "../src/images/Frame02.png"
      }, 
      {
        title: "Buy Crypto",
        content: "Sign up for free wallet on web, IOS or Android and follow our easy process to set up your profile.",
        image: "../src/images/Frame03.png"
      }
    ],

  }

  return (
    <div>
      <NavBar />
      <Intro />
      <Content />
      <Article data={DummyData}/>
      <Footer />
    </div>
  )
}

export default App
