import React from 'react'

export default class AboutInterest extends React.Component {
    render() {
        return (
            <div>
                <div className="columns topic">
                    <div className="column has-text-left is-6 is-offset-3 is-10-mobile is-offset-1-mobile">
                        Où me trouver
                    </div>
                </div>
                <div className="columns item">
                    <div className="column is-6 is-offset-3 is-8-mobile is-offset-2-mobile">
                        <a
                            href="https://www.linkedin.com/in/serhat-gungor/"
                            target="_blank">
                            <img
                                src="/static/images/icon-linkedin_colored.svg">
                            </img>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100008208821084"
                            target="_blank">
                            <img
                                src="/static/images/icon-facebook_colored.svg">
                            </img>
                        </a>
                        <a
                            href="https://discord.gg/MCJPfW9qxY"
                            target="_blank">
                            <img
                                src="/static/images/icon-discord_colored.svg">
                            </img>
                        </a>
                        <a
                            href="https://twitter.com/_srht01_"
                            target="_blank">
                            <img
                                src="/static/images/icon-twitter_colored.svg">
                            </img>
                        </a>
                        <a
                            href="https://t.me/srht01"
                            target="_blank">
                            <img
                                src="/static/images/icon-telegram_colored.svg">
                            </img>
                        </a>
                        <a
                            href="https://github.com/serhatgungor"
                            target="_blank">
                            <img
                                src="/static/images/icon-github_colored.svg">
                            </img>
                        </a>

                    </div>
                </div>
                <style jsx>{`
                    .topic {
                        font-weight: bold;
                        color: #ffcc00;
                        font-size: 1.2em;
                    }
                    img {
                        margin: 0 30px;
                        height: 80px;
                        transition: all .2s ease-in-out;
                    }
                    img:hover {
                        transform: scale(1.5); 
                    }
                `}</style>
            </div>

        )
    }
}