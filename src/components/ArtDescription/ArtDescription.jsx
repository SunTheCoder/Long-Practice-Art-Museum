import { Link, useParams } from "react-router-dom";
import "./ArtDescription.css"

const ArtDescription = ({galleries}) => {

    const { galleryId, artId } = useParams()
    console.log('Gallery ID', galleryId);
    console.log('Art ID', artId);

    const gallery = galleries.find(gallery => gallery.galleryid === parseInt(galleryId));
    console.log(' gallery', gallery)
    const art = gallery?.objects.find(art => art.id === parseInt(artId));
    console.log('art', art)

    const images = art.images.map((image, i) => {
        return <img className="artImages"key={i} src={image.baseimageurl} alt="bottle image" />
    })

    return (
        <>
            
            <Link to={'..'}>Back to Gallery</Link>
            <div>
                <a href={art.url}>{art.title}</a>
            </div>
            
            {art.description && (  //conditionally show something!
                <>
                <h3>Description</h3>
                <p>{art.description}</p>
                </>
            )}

            <p>{art.signed || art.culture}</p>
            <p>{art.technnique}</p>
            <div id="imageContainer"> 
                
                {images}
            
            </div>
            
        </>
    )
}

export default ArtDescription;