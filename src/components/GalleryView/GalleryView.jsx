import { useParams, Navigate } from "react-router-dom";
import harvardArt from "../../data/harvardArt";
import ArtImageTile from "../ArtImageTile";

function GalleryView() {
    const { galleryId } = useParams();
    console.log('Gallery ID', galleryId);
    const gallery = harvardArt.records.find(gallery => gallery.galleryid === parseInt(galleryId))
    const artObjects = gallery.objects

    const ArtImageTiles = artObjects.map((object, i) => (
        <ArtImageTile key={i} art={object} />
        ) 
    );


   
    
     // If the gallery isn't found, navigate back to home
    if (!gallery) {
        console.log("Gallery not found. Redirecting to home.");
        return <Navigate to="/" />;
    }

    console.log(gallery.name)
    return (
        <>
            <h1>Hello from {gallery.name}</h1>
            <div className="art-gallery">
                {ArtImageTiles} {/* Display the ArtImageTiles here */}
            </div>
        </>
    )
}

export default GalleryView;