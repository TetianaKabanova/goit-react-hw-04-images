import styled from '@emotion/styled';

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  font-size: ${props => props.theme.fontSize.l};
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  margin-top: ${props => props.theme.spacing(15)};
`;
