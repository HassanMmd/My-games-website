import BouncingVideo from "../../Assets/videos/games/bouncing.mp4"

function Bounicing() {
    return (
        <div >
            <section >
                <article>
                    <div>
                        <video width="750" height="500" controls>
                            <source src={BouncingVideo} type="video/mp4" />
                        </video>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Bounicing;