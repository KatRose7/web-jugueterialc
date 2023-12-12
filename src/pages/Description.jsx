import perfil from "../Images/perfil2.jpeg";
import React from "react";
import './description.css';
import video from '../Images/video.mp4';
import ReactPlayer from "react-player";
const Descripcion = () => {
    return (
        <section id="inicio" class="inicio">
            <div class="contenido-banner">
                <div class="contenedor-img">
                    <img src={perfil} alt="Perfil" />
                </div>
                <h1>Univ. Rosa Gonzales Choque</h1>
                <h2>Estudiante de Informatica - Developer Web</h2>
                <div class="redes">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-skype"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i class="fa-solid fa-rss"></i></a>
                </div>
            </div>
            <div class="contenido-video">
                <ReactPlayer url={video} controls loop />
            </div>
        </section>



    );
};

export default Descripcion;
