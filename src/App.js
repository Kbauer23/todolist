import React from 'react';

import Header from './components/Header';
import List from './components/List';
import GlobalStyles, { Container } from './styles/GlobalStyles';

function App() {
  return (
    <Container>
      <Header />
      <List />
      <GlobalStyles />
    </Container>
  );
}

export default App;
