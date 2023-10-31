import { ProviderWrapper as CounterProviderWrapper } from "contexts/countersContext";
import App from "components/App/App.jsx";

const AppLoader = () => {
  return (
    <CounterProviderWrapper>
      <App />
    </CounterProviderWrapper>
  );
};
export default AppLoader;
