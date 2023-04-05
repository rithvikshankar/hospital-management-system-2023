import React, { useState, createContext } from "react";

export const MessageContext = createContext(null);

export const MessageProvider = ({ children }) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <MessageContext.Provider value={{ showMessage, setShowMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
