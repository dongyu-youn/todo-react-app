import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Searchbar from "./components/Searchbar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Searchbar></Searchbar>
      <QueryClientProvider client={queryClient}>
        <Outlet></Outlet>
      </QueryClientProvider>
    </>
  );
}

export default App;
