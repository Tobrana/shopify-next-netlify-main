import React, {useState} from 'react'

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        {
          id: 1,
          imgUrl: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80',
          caption: 'Slide 1',
        },
        {
          id: 2,
          imgUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
          caption: 'Slide 2',
        },
        {
          id: 3,
          imgUrl: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          caption: 'Slide 3',
        },
      ];
      const nextSlide = () => {
        setActiveIndex((activeIndex + 1) % slides.length);
      };
    
      const prevSlide = () => {
        const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      };
    
      const carouselStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '400px',
        position: 'relative',
      };
    
      const slideStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'opacity 1s ease-in-out',
        opacity: '0',
      };
    
      const activeSlideStyle = {
        ...slideStyle,
        opacity: '1',
      };
    
      const captionStyle = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        padding: '10px',
        fontSize: '1.2rem',
        textAlign: 'center',
      };
    
      const buttonStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'transparent',
        color: 'white',
        border: 'none',
        fontSize: '2rem',
        cursor: 'pointer',
        zIndex: '10',
      };
    
      const prevButtonStyle = {
        ...buttonStyle,
        left: '20px',
      };
    
      const nextButtonStyle = {
        ...buttonStyle,
        right: '20px',
      };

      return (
        <div style={carouselStyle}>
      {slides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.imgUrl}
          alt={slide.caption}
          style={index === activeIndex ? activeSlideStyle : slideStyle}
        />
      ))}
      <button onClick={prevSlide} style={prevButtonStyle}>Prev</button>
      <button onClick={nextSlide} style={nextButtonStyle}>Next</button>
      <div style={captionStyle}>{slides[activeIndex].caption}</div>
    </div>
      );
      
}



