import React, {useEffect, useState} from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import s from './blockImages.module.sass'
import img1 from '../../../assets/images/warm-light.png'
import img2 from '../../../assets/images/days-light.png'
import img3 from '../../../assets/images/cold-light.png'

export const BlockImages = ({slide}) => {
  
  let image = React.createRef()
  useEffect(() => {
    image.slideToIndex(slide)
  }, [slide])
  
  const images = [img1, img2, img3].map(photo => {
    return {original: photo, thumbnail: photo}
  });
  
  return (
    <div className={s.content}>
      <div className={s.content__images}>
        <ImageGallery
          sizes={500}
          ref={i => image = i}
          items={images}
          showBullets={true}
          showIndex={false}
          showThumbnails={false}
          lazyLoad={false}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
        />
      </div>
    </div>
  );
};

