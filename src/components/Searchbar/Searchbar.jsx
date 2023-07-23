import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  Header,
  Form,
  Input,
  Span,
  SubmitButton,
  Icon,
} from './Searchbar.styled.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  notificationMassege,
  notificationOptions,
} from 'components/Notification/Notification.jsx';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      toast.error(`${notificationMassege}`, notificationOptions);
    }
    const data = e.target.elements.searchQuery.value.trim();

    onSubmit(data);
    setInputValue('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SubmitButton type="submit">
          <Icon>
            <AiOutlineSearch />
          </Icon>
          <Span>Search</Span>
        </SubmitButton>
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
        <ToastContainer />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
