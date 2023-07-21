import PropTypes from 'prop-types';
import { Alert } from './Message.styled';

export function Message({ children }) {
  return (
    <Alert role="alert">
      <p>{children}</p>
    </Alert>
  );
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
};
