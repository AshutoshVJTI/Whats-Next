import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";

import SingleContent from "../../components/SingleContent/SingleContent";


const Gallery = ({ id, media_type }) => {
  const [alternatives, setAlternatives] = useState([]);

  const items = alternatives.map((c) => (
    <div className="carouselItem">
      <SingleContent
        className="caraouselItem__singlecontent"
        key={c.id}
        id={c.id}
        poster={c.poster_path}
        title={c.title || c.name}
        date={c.first_air_date || c.release_date}
        media_type={"movie" || "tv"}
      />
    </div>
  ));

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 2,
    },
    1024: {
      items: 4,
    },
  };

  const fetchAlternatives = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=28997f8079bb739de0370738807e5eb7`
    );
    console.log(data);
    setAlternatives(data.results);
  };

  useEffect(() => {
    fetchAlternatives();
    // eslint-disable-next-line
  }, []);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Gallery;
