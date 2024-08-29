import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Fussleiste from './components/Fussleiste/Fussleiste'
import Title from './components/Title/Title'
import Laenderregeln from './components/Laenderregeln/Laenderregeln'
import Contact from './components/Contact/Contact'
import Def from './components/Def/Def'
import Map from './components/Map/Map'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Suche deinen nächsten Stellplatz' title='Stellplatz sucher'/>
        <Map/>

        <Contact/>
        <Title subtitle='Du willst wissen wo es erlaubt ist zu stehen?' title='Länder und ihre Regeln'/>
        <Def/>
        <Laenderregeln/>

      </div>
      <Fussleiste />
    </div>
  )
}

export default App
