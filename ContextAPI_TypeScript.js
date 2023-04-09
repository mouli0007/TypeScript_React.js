import React, { FC, ReactNode, createContext } from "react";
import "./App.css";
import { PedroTypeScript, HairColor } from "./Pedro/PedroTypeScript";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
  changeName: (name: string) => string;
}
const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue = {
    name: "Pedro",
    age: 24,
    country: "Brazil",
    changeName: (name: string): string => {
      return name;
    },
  };
  return (
    <AppContext.Provider value={contextValue}>
      TypeScript Again with Pedro Tech
    </AppContext.Provider>
  );
};

export default App;
