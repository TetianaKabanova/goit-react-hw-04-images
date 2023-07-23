import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Button } from './Button/Button.jsx';
import { Loader } from './Loader/Loader.jsx';
import * as API from '..//components//api/PixabayApi.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  errorMessage,
  notificationOptions,
} from './Notification/Notification.jsx';
import { Message } from './Message/Message.jsx';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fetchImages() {
      try {
        setIsLoading(true);

        const data = await API.getImages(searchQuery, currentPage);

        if (data.hits.length === 0) {
          toast.warn(`${errorMessage}`, notificationOptions);
        } else {
          const normalizedImages = API.normalizedImages(data.hits);
          setImages(images => [...images, ...normalizedImages]);
          setIsLoading(false);
          setError('');
          setTotalPages(Math.ceil(data.totalHits / 12));
        }
      } catch (error) {
        setError(error.message);
        toast.error(
          `Oops, something went wrong. Please try again.`,
          notificationOptions
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [currentPage, searchQuery]);

  const loadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  const handleSubmit = query => {
    setSearchQuery(query);
    setImages([]);
    setCurrentPage(1);
    setError(null);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 ? (
        <ImageGallery images={images} />
      ) : (
        <Message>{'Let`s find interesting images!'}</Message>
      )}
      {isLoading && <Loader />}
      {images.length > 0 && totalPages !== currentPage && !isLoading && (
        <Button onClick={loadMore} />
      )}
      <ToastContainer />
    </>
  );
};
