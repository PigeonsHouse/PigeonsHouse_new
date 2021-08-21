import Header from "../components/header"
import Works from "../components/works"
import { NextPage } from "next"
import style from "../styles/home.module.css"

const Home: NextPage = () => {
  return (
    <>
      <head>
        <title>鳩屋敷のお屋敷</title>
      </head>
      <Header/>
      <div className={style.view}>
        <Works/>
      </div>
    </>
  )
}

export default Home
