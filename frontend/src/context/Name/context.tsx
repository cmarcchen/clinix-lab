import { createContext } from "react";

export interface AppContextInterface {
  name: string;
}

export const AppCtx = createContext<AppContextInterface | null>(null);

// // Provider in your app

// const sampleAppContext: AppContextInterface = {
//   name: "Marc",
// };

// export const App = () => (
//   <AppCtx.Provider value={sampleAppContext}>...</AppCtx.Provider>
// );
