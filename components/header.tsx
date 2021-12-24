import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faMastodon, faGithub } from '@fortawesome/free-brands-svg-icons';
import style from "../styles/components/header.module.css"

function Header() {
  return (
    <div className={style.header}>
      <a href="/">
        <h1 className={style.title}>PigeonsHouse's Portfolio </h1>
        <h4 className={style.title}>鳩屋敷のお屋敷</h4>
      </a>
      <div className={style.icons}>
        <a href="https://twitter.com/PigeonsHouse" target="_blank"><FontAwesomeIcon icon={faTwitter} className={style.ico} size="2x" color="#fff" /></a>
        <a href="https://mastodon.compositecomputer.club/@Pigeon_house2020" target="_blank"><FontAwesomeIcon icon={faMastodon} className={style.ico} size="2x" color="#fff" /></a>
        <a href="https://github.com/PigeonsHouse" target="_blank"><FontAwesomeIcon icon={faGithub} className={style.ico} size="2x" color="#fff" /></a>
      </div>
    </div>
  )
}

export default Header