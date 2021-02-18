import React from 'react'
import Title from './Title'
import Interests from './AboutInterest'

export default class About extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="About me" color='#ffffff'/>
                <div className="columns is-mobile">
                    <div className="column has-text-right-tablet has-text-center is-12-mobile is-6-desktop">
                        <dl>
                            <dt>FULL NAME</dt>
                            <dd>Serhat gungor</dd>
                            <dt>EMAIL</dt>
                            <dd><a href='mailto:serhatgungor01@gmail.com'> serhatgungor01@gmail.com</a></dd>
                            <dd><a href='mailto:serhatgungor@protonmail.com'>serhatgungor@protonmail.com</a></dd>
                            <dt>MOBILE NO.</dt>
                            <dd><a href='tel:+33631958304'>+33 6 31 95 83 04</a></dd>
                        </dl>
                    </div>
                    <div className="column has-text-left">
                        <img src="/static/images/serhat_avatar.png" className="mascot" />
                    </div>
                </div>
                <div className="columns">
                    <div className="column detail is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile">
                        Hello, je suis <b>Serhat Gungor</b>. Débutant dans le développement Web et Web Mobile,j'ai une préférence pour le <b>front-end</b> mais à terme mon souhait est de devenir<i><b>developpeur full-stack</b></i>. Des connaissances en <i>Symfony</i> et <i>Laravel</i>, actuellement je me forme sur <b>JavaScript</b> à travers les framework <i>ReactJS</i>, <i>AngularJS</i>  et <i>VueJS </i>. <br/> <b>Français</b>, <b>Turque</b> et <b>Kurde</b> sont mes langues maternelles, un niveau basique en <b>Allemand</b> et moyennement correct en <b>Anglais</b>.

                    </div>
                </div>
                <Interests />
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #34495e;
                        color: #ffffff;
                        font-size: 1.3em;
                    }
                    dl > dt {
                        color: #ffcc00;
                        font-weight: bold;
                    }
                    dl > dd {
                        margin-bottom: 30px;
                    }
                    dd > a {
                        color: #3498db;
                    }
                    .mascot {
                        margin-left: 20px;
                        width: 300px;
                    }
                    .detail {
                        font-size: 0.95em;
                    }
                    .detail > b {
                        color: #F1A9A0;
                    }
                    .detail > i {
                        color: #00E640;
                    }
                `}</style>
            </section>
        )
    }
}