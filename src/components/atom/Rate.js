/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { styled } from '@mui/material/styles';

import { ReactComponent as StarSVG } from '../../assets/icons/star.svg';

const RateContainer = styled('div')(() => ({
  padding: 28,
  borderBottom: '1px solid #DEDEDE',
  maxWidth: 774,
  width: '100%',
  textAlign: 'center',
}));

const StarContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 31,
  '& svg': {
    [theme.breakpoints.down('md')]: {
      width: 60,
    },
    [theme.breakpoints.down('sm')]: {
      width: 50,
    },
  },
}));

const Rate = function ({ title, value = 0, onChange }) {
  const [pre, setPre] = React.useState(0);
  return (
    <RateContainer>
      <div>{title}</div>
      <StarContainer onMouseOut={() => setPre(0)}>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div
              style={{ padding: 5, paddingBottom: 0, opacity: pre && i < pre ? 0.6 : 1 }}
              onClick={() => onChange(i + 1)}
              onMouseOver={() => setPre(i + 1)}
              key={i}
            >
              <StarSVG style={{ color: i < pre || i < value ? '#11C4B0' : '#D3D3D3' }} />
            </div>
          ))}
      </StarContainer>
    </RateContainer>
  );
};

export default Rate;
