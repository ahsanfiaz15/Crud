import React, { useState } from 'react';
import Navbaar from './Navbaar';
import Home from './Home';

function ParentComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Navbaar setSearchTerm={setSearchTerm} />
      <Home searchTerm={searchTerm} />
    </div>
  );
}

export default ParentComponent;
