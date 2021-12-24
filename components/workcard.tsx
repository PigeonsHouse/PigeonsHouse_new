import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faFileDownload, faCode } from '@fortawesome/free-solid-svg-icons';
import { Work } from "../types/work.type"
import style from "../styles/components/workCard.module.css"

interface Props {
    info: Work;
}

function WorkCard(props: Props) {
	return(
		<>
			<div className={style.whole}>
				<div className={style.for_flex}>
					<div>
						<div className={style.img_flame}>
							<img className={style.thumbnail} src={props.info.thumbnail} alt={props.info.name} />
						</div>
						<p className={style.title}>{props.info.name}</p>
						<span className={style.genre}><span className={style.genre_title}>GENRE: </span>{props.info.genre}</span>
						<p className={style.description}>{props.info.description}</p>
					</div>
					<div>
						<p className={style.created_at}>製作期間: {props.info.created_at}</p>
						<div className={style.info_line}>
							{props.info.url?(
								<a href={props.info.url}><FontAwesomeIcon icon={faWindowRestore} className={style.ico} size="2x" /></a>
							):(
								<FontAwesomeIcon icon={faWindowRestore} size="2x" color="#DDD" />
							)}
							{props.info.download_url?(
								<a href={props.info.download_url} target="_blank"><FontAwesomeIcon icon={faFileDownload} className={style.ico} size="2x" /></a>
							):(
								<FontAwesomeIcon icon={faFileDownload} size="2x" color="#DDD" />
							)}
							{props.info.source_url?(
								<a href={props.info.source_url} target="_blank"><FontAwesomeIcon icon={faCode} className={style.ico} size="2x" /></a>
							):(
								<FontAwesomeIcon icon={faCode} size="2x" color="#DDD" />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default WorkCard