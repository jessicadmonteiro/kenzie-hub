import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import RoutesMain from "./routes";
import { AuthProvider } from "./contexts/ContextAPI/ContextAPI";
import { AuthProviderTech } from "./contexts/ContextTech/ContextTech";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle />
      <AnimatePresence>
        <AuthProvider>
          <AuthProviderTech>
            <RoutesMain />
          </AuthProviderTech>
        </AuthProvider>
      </AnimatePresence>
    </div>
  );
}

export default App;
