import React, { useState, createContext } from 'react';
export const AppContext = createContext();
function AppProvider({ children }) {
    const [data, setData] = useState({
        ip: "172.16.71.52",
        API_VE_ADDRESS: "http://" + "172.16.71.52" + ":8484/api/ve",
        API_IMAGE: "http://" + "172.16.71.52" + ":8484"
    });
    return (<AppContext.Provider value={{ data }}>
        {children}
    </AppContext.Provider>);
}

export default AppProvider;