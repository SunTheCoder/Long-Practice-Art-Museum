import { Link } from "react-router-dom"
import "./ArtImageTile.css"



const ArtImageTile = ({art}) => {


    const firstImage = art.images && art.images[0];
    
    if (!firstImage) {
        return <div>No image available</div>;
    }

    return (
        <div>
            
            <Link to={`art/${art.id}`}>
                <img className='artImage' src={firstImage.baseimageurl} alt="" />
            </Link>
        </div>
    )
}

export default ArtImageTile;