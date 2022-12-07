import React, { useState, createContext } from 'react';
export const AppContext = createContext();
function AppProvider({ children }) {
    const [data, setData] = useState({
        ip: "localhost",
        API_VE_ADDRESS: "http://" + "localhost" + ":8484/api/ve",
        API_IMAGE: "http://" + "localhost" + ":8484"
    });
    return (<AppContext.Provider value={{ data }}>
        {children}
    </AppContext.Provider>);
}

export default AppProvider;