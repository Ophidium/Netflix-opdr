import Featured from "../components/featured/Featured"
import Navbar from "../components/navbar/Navbar"
import "./home.scss"
import List from "../components/list/List"

export default function home() {
  return (
    <div className='home'>
      <Navbar/>
      {/* <img width="100%" src="https://i.imgur.com/r8PaTmf.png" alt="" /> */}
      <Featured type="movie"/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}
