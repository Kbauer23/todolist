/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

import { FcPlus } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { FaTrashAlt } from 'react-icons/fa';
import { DivList, Li, Ul, DivLi, DivIcons } from './styled';

export default function List() {
  return (
    <DivList>
      <Ul>
        <DivLi className="DivLi">
          <Li>Item 1</Li>
          <IconContext.Provider value={{ size: '50px' }}>
            <DivIcons className="DivIcons">
              {' '}
              <FcPlus />
              <FaTrashAlt />
            </DivIcons>
          </IconContext.Provider>
        </DivLi>
        <DivLi className="DivLi">
          <Li>Item 1</Li>
          <IconContext.Provider value={{ size: '50px' }}>
            <DivIcons className="DivIcons">
              {' '}
              <FcPlus />
              <FaTrashAlt />
            </DivIcons>
          </IconContext.Provider>
        </DivLi>
        <DivLi className="DivLi">
          <Li>Item 1</Li>
          <IconContext.Provider value={{ size: '50px' }}>
            <DivIcons className="DivIcons">
              {' '}
              <FcPlus />
              <FaTrashAlt />
            </DivIcons>
          </IconContext.Provider>
        </DivLi>
      </Ul>
    </DivList>
  );
}
