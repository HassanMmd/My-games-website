import myGames from "../../Assets/videos/My-games.mp4"

function AllGames() {
    return (
        <div>
            <video width="750" height="500" controls>
                <source src={myGames} type="video/mp4" />
            </video>
        </div>
    );
}
export default AllGames;