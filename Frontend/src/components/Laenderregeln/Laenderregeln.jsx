import React from 'react'
import './Laenderregeln.css'
import Deutschland from '../../assets/Deutschland.png'
import Daenemark from '../../assets/Daenemark.jpeg'
import Tschechien from '../../assets/Tschechien.jpeg'
import Polen from '../../assets/Polen.jpeg'
import Österreich from '../../assets/Österreich.jpeg'
import Schweiz from '../../assets/Schweiz.png'
import Belgien from '../../assets/Belgien.png'
import Niederlande from '../../assets/Niederlande.jpeg'
import Luxembourg from '../../assets/Luxembourg.jpeg'

const Laenderregeln = () => {
  return (
    <div className='laender'>
    <div className="land">
        <img src={Deutschland} />
        <div className="caption">
            <h3>Deutschland</h3>
            <p>Campen <br />
            - an sich ist erlaubt, unter einigen regeln <br />
            Wildcampen <br />
            - ist in deutschland verboten, wird mit einer strafe ab 100 euro berechnet <br />
            Campen auf offiziellen campingstellen <br />
            Freistehen : Es ist erlaubt auf öffentlichen KFZ-Parkplätzen zu stehen um die Fahrtüchtigkeit wieder zu gewährleiten zu können. </p>
        </div>
    </div>
    <div className="land">
        <img src={Daenemark} />
        <div className="caption">
            <h3>Dänemark</h3>
            <p>Wildcampen und frei stehen mit dem Wohnmobil ist in Dänemark leider offiziell nicht erlaubt. <br />
                Es gibt jedoch einige Wälder so es grundlegend erlaubt ist für eine Nacht <br />
                Der Aufenthalt ist auf eine Nacht begrenzt <br />
                Es dürfen maximal sechs Personen oder 2 Zelte aufgestellt werden <br />
                Feuer ist nur an ausgewiesenen Stellen erlaubt</p>
        </div>
    </div>
    <div className="land">
        <img src={Tschechien} />
        <div className="caption">
            <h3>Tschechien</h3>
            <p>Campen in Tschechien ist nicht erlaubt</p>
        </div>
    </div>
    <div className="land">
        <img src={Polen} />
        <div className="caption">
            <h3>Polen</h3>
            <p>Campen in Polen ist nicht erlaubt</p>
        </div>
    </div>
    <div className="land">
        <img src={Österreich} />
        <div className="caption">
            <h3>Österreich</h3>
            <p>Campen in Österreich ist nicht erlaubt</p>
        </div>
    </div>
    <div className="land">
        <img src={Schweiz} />
        <div className="caption">
            <h3>Schweiz</h3>
            <p>Campen in Schweiz ist nicht erlaubt</p>
        </div>
    </div>
    <div className="land">
        <img src={Belgien} />
        <div className="caption">
            <h3>Belgien</h3>
            <p>Campen in Belgien ist nicht erlaubt</p>
        </div>
    </div>
    <div className="land">
        <img src={Niederlande} />
        <div className="caption">
            <h3>Niederlande</h3>
            <p>Campen in Niederlande ist nicht erlaubt</p>
        </div>
    </div>
    <div className="land">
        <img src={Luxembourg} />
        <div className="caption">
            <h3>Luxembourg</h3>
            <p>Campen in Luxembourg ist nicht erlaubt</p>
        </div>
    </div>


</div>
  )
}

export default Laenderregeln
