import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.jsx';
import './MainPage.css'

function MainPage() {
  const { i18n } = useTranslation();

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('../../../SliderImgText.json');
        const data = await response.json();
        setSlides(data[i18n.language] || []);
      } catch (error) {
        console.error('Error fetching the slides data:', error);
      }
    };

    fetchSlides();
  }, [i18n.language]);


  return (
    <div id='body'>
      <section className="sectionslider">
        {slides.length > 0 ? <ImageSlider slides={slides} /> : <p>Loading...</p>}
      </section>
    </div>
  );
}

export default MainPage;