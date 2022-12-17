import SideBar from "./components/SideBar";
import { BrowserRouter } from "react-router-dom";
import {ReactQueryDevtools} from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SideBar />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
