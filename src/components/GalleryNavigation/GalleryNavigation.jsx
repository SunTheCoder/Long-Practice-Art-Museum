import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css"

const GalleryNavigation = (props) => {
    const { galleries } = props;

// console.log('Galleries', galleries ? true : undefined);

    const galleriesList = galleries.map((gallery) => (
        <li key={gallery.id}>
            <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
        </li>
    ));

    return (
        <>
            <h1>Galleries</h1>
            <nav>
            <NavLink to={'/'}>Home</NavLink>
                {galleriesList}
            </nav>
        </>
    )
}

export default GalleryNavigation;