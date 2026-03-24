import AppRouter from "./AppRouter";
import DefaultLayout from "./components/layouts/DefaultLayout";

function App() {
  return (
    <DefaultLayout>
      <AppRouter />
    </DefaultLayout>
  );
}

export default App;
