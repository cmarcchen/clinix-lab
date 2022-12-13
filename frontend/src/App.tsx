import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { AuthProvider } from "./context/Auth";
import { AppCtx } from "./context/Name";

export default function App() {
  return (
    <AuthProvider>
      <AppCtx.Provider value={{ name: "Marc" }}>
        <RouterProvider router={router} />
      </AppCtx.Provider>
    </AuthProvider>
  );
}
