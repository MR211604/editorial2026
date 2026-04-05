import AppRouter from "./AppRouter";
import DefaultLayout from "./components/layouts/DefaultLayout";
import "@justinribeiro/lite-youtube";

function App() {
  return (
    <DefaultLayout>
      <AppRouter />
    </DefaultLayout>
  );
}

export default App;
