import React, { useContext } from 'react';
import DataContext from './DataContext';

export default function RightGrandChild(props) {

  const dataContext=useContext(DataContext)
  console.log(dataContext);
  
  return (
    <div style={dataContext}>
      Right Grandchild
    </div>
  );
}
