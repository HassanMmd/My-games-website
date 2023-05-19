import MonkeyVideo from "../../Assets/videos/games/Monkey.mp4"

function Monkey() {
    return (
        <div>
            <section >
                <article>
                    <div>
                        <video width="750" height="500" controls>
                            <source src={MonkeyVideo} type="video/mp4" />
                        </video>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Monkey;