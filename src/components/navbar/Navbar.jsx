// there is apperantly a more recent verion of Material-ui called @mui might need to upgade to that later
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import "./navbar.scss"

const Navbar = () => {
    // const [isScrolled, setIsScrolled] = useState(false)

    // console.log(window.pageYOffset)
    return (
        <div className='navbar'>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt=""
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img
                        src="https://i.imgur.com/m808mce.png"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Setting</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* navbar */}
        </div>
    )
}

export default Navbar