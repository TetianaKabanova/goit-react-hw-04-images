import styled from '@emotion/styled';

export const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${props => props.theme.spacing(8)};
  margin: 1vh auto;
`;

export const Text = styled.p`
  max-width: 80%;
  color: ${props => props.theme.colors.danger};
  text-align: center;
  font-weight: 700;
  font-size: ${props => props.theme.fontSize.l};
  margin-top: ${props => props.theme.spacing(15)};
`;
