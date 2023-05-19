import CavemanVideo from "../../Assets/videos/games/Caveman.mp4"

function Caveman() {
    return (
        <div>
            <section >
                <article>
                    <div>
                        <video width="750" height="500" controls>
                            <source src={CavemanVideo} type="video/mp4" />
                        </video>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Caveman;