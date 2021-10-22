import React, { useContext } from 'react';
import DataContext from './DataContext';

export default function LeftGreatGrandChild(props) {

  const dataContext=useContext(DataContext)
  console.log(dataContext);

  return (
    <div style={dataContext}>
      <p >Left Great Grandchild</p>
    </div>
  );
}
