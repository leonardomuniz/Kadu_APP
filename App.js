import React, { useEffect, useState, useContext } from 'react';

import { UserProvider } from './src/context/User';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

