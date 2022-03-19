import React from 'react';
import { useDispatch } from 'react-redux';
// import './style.scss';

const CardDescription = ({ id }: { id: string }): JSX.Element => {
  const dispatch = useDispatch();
  console.log(`ID - ${id}`);
  return (
    <div>+</div>

  );
};

export default CardDescription;
