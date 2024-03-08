/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { Title, Input, DivHeader, StyledFaSearch, Button } from './styled';

export default function Header() {
  return (
    <>
      <Title> Task-List</Title>
      <DivHeader>
        <Input type="text" placeholder="Search" />
        <Button>
          <StyledFaSearch />
        </Button>
      </DivHeader>
    </>
  );
}
