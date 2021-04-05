import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-top: 10px;
  box-shadow: 0px 2px 4px rgba(38, 50, 56, 0.16);

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export default Header;
