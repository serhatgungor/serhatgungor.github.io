import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Experiences" color='#2c3e50'/>
                <div className="container">
                    <Timeline side="left" time="Avril 2017 - Août 2019" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>Mécanicien</h4>
                        <p>
                            <i className="position">Intérimaire</i><br/>
                            Mécanicien de maintenance industrielle préventive et curative <br/>Centrale thermique et nucléaire
                        </p>
                    </Timeline> 
                    <Timeline side="right" time="2008 - 2017" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Soudeur</h4>
                        <p>
                            <i className="position">Intérimaire</i><br/>
                            Soudure TIG/ MAG / SAEE <br/> Acier de toutes épaisseur, toutes positions. <br/>Frontalier et grand déplacement national
                        </p>
                    </Timeline> 
                    <Timeline side="left" time="2004 - 2007" color="#57b26e">
                        <h4 style={{'color': '#57b26e'}}>Employé du Bâtiment</h4>
                        <p>
                            <i className="position">Gungor Crépissage</i><br/>
                            Travaux d'isolation et embellissement de façades
                        </p>
                    </Timeline> 
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}