import React from 'react';
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import StudentStatus from './StudentStatus';
import "./home.css";

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt='' className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <div className="status-container">
                    <h1 className="home__title"><span>I'm Jhet Andrei Dizon.</span> </h1>
                        <StudentStatus />
                    </div>

                    <p className="home__description">
                        Since childhood, I've been captivated by technology. Now, as a software engineering student, I'm channeling that passion into learning and coding. My goal? To shape the future of technology through my creations and contributions.                    
                    </p>

                    <Link to='/about' className='button'>
                        More About Me <span className="button__icon"><FaArrowRight /></span>
                    </Link>
                </div>
            </div>


            <div className="color__block"></div>
        </section>
    )
}

export default Home