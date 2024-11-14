import React from 'react';
import { useState } from 'react';

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null);

    return (
        <DataContext.Provider value={{ currUser, setCurrUser }}>{children}</DataContext.Provider>
    );
};

export default DataProvider;
