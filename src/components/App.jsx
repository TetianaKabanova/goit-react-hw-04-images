import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Button } from './Button/Button.jsx';
import { Loader } from './Loader/Loader.jsx';
import * as API from '..//components//api/PixabayApi.js';
import { Message } from './Message/Message.jsx';
import { ErrorView } from './Error/Error.jsx';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    totalPages: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImages();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handleSubmit = query => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
      error: null,
    });
  };

  fetchImages = async () => {
    const { searchQuery, currentPage } = this.state;
    try {
      this.setState({ isLoading: true });

      const data = await API.getImages(searchQuery, currentPage);

      if (data.hits.length === 0 && !this.state.isLoading) {
        return this.setState({ error: 'Sorry, no images found.' });
      }

      const normalizedImages = API.normalizedImages(data.hits);
      this.setState(state => ({
        images: [...state.images, ...normalizedImages],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'Something went wrong!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, currentPage, totalPages, error } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <>
            {!error && <Message>{'Let`s find interesting images!'}</Message>}
            {error && <ErrorView>{error}</ErrorView>}
          </>
        )}
        {isLoading && <Loader />}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
      </>
    );
  }
}
