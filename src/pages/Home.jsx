import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import { TextField, IconButton } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../data/projectData";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import useAuth from "../hooks/useAuth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import "../Footer.css";
import "../Home.css";

const Home = () => {
  const { auth } = useAuth();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 projects at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 project on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <TopBar pageName="Home" register={true} login={!auth.organistion} logout={auth.organistion} />
      <div className="banner">
      </div>
      <div className="flex">
        <div className="flex-col justify-center w-full">
          <div className="flex mt-2">
            <TextField
              sx={{ width: 740, m: 1 }}
              label="Search"
              variant="filled"
              size="small"
            />
            <div>
              <div className="flex m-3 p-2 rounded-md drop-shadow-lg bg-[#adc4ce]">
                <SearchIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1"><b>Search</b></h1>
              </div>
            </div>
            <div>
              <Link to="/filter" className="flex m-3 p-2 rounded-md drop-shadow-lg bg-[#adc4ce]">
                <FilterAltIcon sx={{ fontSize: "30px" }} />
                <h1 className="m-1"><b>Filter</b></h1>
              </Link>
            </div>
            <div>
            <Link to="/help" className="flex m-3 p-2 rounded-md drop-shadow-lg bg-[#adc4ce]">
              <HelpIcon sx={{ fontSize: "30px" }} />
              <h1 className="m-1"><b>FAQ</b></h1>
            </Link>
            </div>
            <div>
            <div className="flex m-3 p-2 rounded-md drop-shadow-lg bg-[#adc4ce]">
              <InfoIcon sx={{ fontSize: "30px" }} />
              <h1 className="m-1"><b>Info</b></h1>
            </div>
            </div>
          </div>

          <Slider {...settings} className="projects">
            {projectData.map((item, index) => (
              <div key={index}>
                <ProjectCard data={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
