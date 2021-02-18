import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default class Education extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Formation" color='#ffffff' />
                <div className="container">
                    <Item
                        time="Mars 2020 - Octobre 2020"
                        name="Formation développeur web et mobile"
                        major="Alaji / Simplon à Metz"
                        color="#3498db"
                    />
                    <Item
                        time="Janvier 2019 - Février 2019"
                        name="Formation CQP-APS et SSIAP 1"
                        major="IESC à Hagondange"
                        color="#e67e22"
                    />
                    <Item
                        time="2016"
                        name="Intervenant sur site nucléaire CQPM 0263"
                        color="#57b26e"
                    />
                    <Item
                        time="2014"
                        name="CQPM Soudeur Industriel"
                        major="IPS à Forbach"
                        color="#3498db"
                    />
                    <Item
                        time="2004"
                        name="Formation maintenance informatique et infographie"
                        major="Efic Partenaires Industrie"
                        color="#e67e22"
                    />
                    <Item
                        time="2003"
                        name="Baccalauréat Comptabilité et Gestion"
                        major="Lycée Félix Mayer à Creutzwald"
                        color="#57b26e"
                    />

                </div>

                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/formation_background_2.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}