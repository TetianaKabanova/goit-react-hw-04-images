import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import { useState } from 'react';

export const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <GalleryItem>
        <GalleryImage
          src={image.webformatURL}
          alt={image.tags}
          onClick={toggleModal}
        ></GalleryImage>
        {showModal && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={toggleModal}
          />
        )}
      </GalleryItem>
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
