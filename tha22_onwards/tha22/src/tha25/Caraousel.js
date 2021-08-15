import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://cdn.mos.cms.futurecdn.net/9Y6mP2LbsJnTsbq4p9Ri9C.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://lh3.googleusercontent.com/proxy/LQVdWi0WOR5o0_hAU43tSopInGUb8oY7_lczPk3UWgA-Oo1skCywuimd1v6HAUXdsaVloww7RK20WY0RucghIlBYKJHFFWjOnfBWMRqsszryVanwjFoU2AoTXCzU4kxqanS7Q_g8tsvQOuVJr4kkcJPhllh9rDGRXvy7mY0droka5r4',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://spacehop.com/wp-content/uploads/2020/09/best-rose-gold-laptop.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Caraousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{width:1550,height:600,backgroundSize:"cover"}}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      style={{width:900}}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} style={{width:350}} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    
  );
}

export default Caraousel;