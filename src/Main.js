import "./Main.css"
import companyImage from "./Assets/images/image.png"
import game1 from "./Assets/images/game1.png"
import game2 from "./Assets/images/game2.png"
import game3 from "./Assets/images/game3.png"
import game4 from "./Assets/images/game4.png"
import React from "react"
import GamesList from "./components/GamesList"


function Main() {
    return (
        <main className="main">
            <section className="company-description">
                <article className="title">
                    <div>
                        <div className="title-companyName">HMM GAMES</div>
                        <p className="title-description">
                            We care about making new games, 3D and 2D games.<br />
                            Started in 2020, you can download our games and enjoy playing the games.
                        </p>
                    </div>
                    <img className="company-img" src={companyImage} alt="company-img" />
                </article>
            </section>
            <h2>Our Games</h2>
            <section className="company-games">
                <article className="games">
                    <img className="game-img" src={game1} alt="game-img"></img>
                    <p>Bounicing Orb: is one of our games. Handle the ball and collect stars.</p>
                </article>
                <article className="games">
                    <img className="game-img" src={game2} alt="game-img"></img>
                    <p>Ballon: is a really nice game. Keep the balloon safe and don't forget the time.</p>
                </article>
                <article className="games">
                    <img className="game-img" src={game3} alt="game-img"></img><p>Monkey: nice game for kids. Help the monkey eating bananas and jumping safe.
                    </p>
                </article>
                <article className="games">
                    <img className="game-img" src={game4} alt="game-img"></img>
                    <p>Caveman: is an adventure game. Caveman hunts birds and collect apples.</p>
                </article>
            </section>
            <section className="games-video">
                <article>
                <h2>Our Videos</h2>
                <GamesList />
                </article>
            </section>
            <section>
                <article id="aboutus" className="aboutus">
                    <div>
                        We are glad to see you here.
                        3 years of success, year after year we are growing.
                        Making games is something creative, if you enjoy that and you like
                        this field join us and Be one of us
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Main;