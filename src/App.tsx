import { Provider } from "react-redux";
import { ThemeProvider } from "providers/ThemeProvider";
import { Layout } from "components/Layout";
import { Loader } from "components/Loader";
import { Notification } from "components/Notification";
import { Squad } from "pages/Squad";
import { Lineup } from "pages/Lineup";
import { store } from "state/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <Squad />
          <Lineup />
        </Layout>
        <Notification />
        <Loader />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
