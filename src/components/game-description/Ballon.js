import BallonVideo from "../../Assets/videos/games/Ballon.mp4"

function Ballon() {
    return (
        <div>
            <section >
                <article>
                    <div>
                        <video width="750" height="500" controls>
                            <source src={BallonVideo} type="video/mp4" />
                        </video>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Ballon;