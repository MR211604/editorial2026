import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { env } from "./config/env";

const queryClient = new QueryClient();
const basename = env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
);
