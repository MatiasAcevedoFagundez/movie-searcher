import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 1px solid lightgray;
  margin: 20px 50px;
  border-radius: 15px;
  padding: 20px 13px;
  @media screen and (max-width: 800px) {
    margin: 20px 0px;
    display: block;
  }
`;

export default Container;
