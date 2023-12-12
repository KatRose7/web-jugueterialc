import React from "react";
import './description.css';
import video from '../Images/video.mp4';
import ReactPlayer from "react-player";
const Descripcion = () => {
    return (
        <section id="inicio" class="inicio">
            <div class="contenido-banner">
                <ReactPlayer url={video} controls loop   />
            </div>
        </section>
       

        
    );
};

export default Descripcion;
