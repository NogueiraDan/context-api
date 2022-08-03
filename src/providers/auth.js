import React, { useEffect } from "react";

// É possivel criar diversos contextos requeridos, neste caso o contexto é um Objeto.
export const AuthContext = React.createContext({});

// Hook customizado
export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = (props) => {
  const [user, setUser] = React.useState({
    name: "",
  });

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({
        name: "",
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* / Injetando o alvo dentro do provider, neste caso, a aplicação como um todo */}
      {props.children}
    </AuthContext.Provider>
  );
};
