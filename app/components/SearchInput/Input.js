import styled from 'styled-components';

const Title = styled.input`
  display: flex;
  align-items: center;
  width: 320px;
  border: none;
  background: #f1f1f1;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export default Title;
