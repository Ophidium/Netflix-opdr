import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured(type) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://i.imgur.com/r8PaTmf.png" alt="" />

            <div className="info">
                <img src="https://i.imgur.com/HkTWdEH.png" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusamus, molestiae minus iusto explicabo unde error officia consequatur voluptas necessitatibus dolores dolorem quod fugit ullam reprehenderit commodi id nemo nostrum.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}