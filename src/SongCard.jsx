import React from "react";

const SongCard = ({song}) => {
    return( 
        <div className="songCard">
            <div>
                <p>{song.year}</p>
            </div>

            <div>
                {song && song.album && song.album.cover_medium && 
                  <img className = "albumCover"src={song.album.cover_medium}/>
                }
               
            </div>

            <div>
                <span>{song.artist.name}</span>
                <h3>{song.title}</h3>
            </div>
        </div>


    )

}


export default SongCard