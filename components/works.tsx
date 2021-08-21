import style from "../styles/components/works.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import WorkCard from "../components/workcard";
import { Works as typeWorks } from "../types/work.type"

function Works() {
  const [works, setWorks] = useState<typeWorks>([]);
  const getWorks = () => {
    axios.get('/api/works')
    .then((res)=>{
      setWorks(res.data);
    })
  }
  useEffect(() => {
    getWorks();
  }, []);
  return(
    <div className={style.whole}>
      <h2 className={style.title}>Works</h2>
      <div className={style.cards}>
        {works.map((work) => {
          return <WorkCard info={work}/>
        })}
      </div>
    </div>
  )
}

export default Works