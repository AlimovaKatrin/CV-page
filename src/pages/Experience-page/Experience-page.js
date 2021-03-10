import style from './Experience-page.module.scss';
import experience from '../../utils/experience.json';
import Card from '../../components/CompanyCard/Card';

function ExperiencePage ( props ) {
    return (
        <div className={style.experienceList}>
            {experience.map(( el, i ) => <li key={i}>
                <Card job={el}/>
            </li>)}
        </div>
    );
}

export default ExperiencePage;