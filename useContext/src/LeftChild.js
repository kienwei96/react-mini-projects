import React, { useContext } from 'react';
import LeftGrandChild from './LeftGrandChild';
import DataContext from './DataContext';

export default function LeftChild() {

  const dataContext=useContext(DataContext)
  console.log(dataContext);
  

  return (
    <div >
      <p style={dataContext}> Left Child</p>
      <LeftGrandChild />
    </div>
  );
}
