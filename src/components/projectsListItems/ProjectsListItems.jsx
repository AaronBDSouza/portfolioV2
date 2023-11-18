import './projectsListItems.scss';

export default function ProjectsListItems({id,title,active,setSelected}) {
    return (
    <li className={active ? "projectList active": "projectList"} onClick={() => setSelected(id)}>
        {title}
    </li>
    )
}
