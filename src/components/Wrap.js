import React from 'react';

import styled from 'styled-components';

const Wrap = (props) => {
  return (
      <Container>
        {props.children}
      </Container>
    );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Wrap;
