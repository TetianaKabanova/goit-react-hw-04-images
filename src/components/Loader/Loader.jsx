import { ProgressBar } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export function Loader() {
  return (
    <Wrapper>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#51E5FF"
        barColor="#51E5FF"
      />
    </Wrapper>
  );
}
