import styled from 'styled-components';

const Container = styled.div`
  height: 32px;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px;
  flex: 1;
  align-self: center;
  margin-left: auto;
  margin-right: 25px;

  @media screen and (max-width: 800px) {
    max-width: none;
    margin: 0px;
  }
`;

export default Container;
