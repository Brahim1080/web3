import { ProviderWrapper as OpinionProviderWrapper } from "contexts/opinionContext";
import App from "components/App/App.jsx";

const AppLoader = () => {
  return (
    <OpinionProviderWrapper>
      <App />
    </OpinionProviderWrapper>
  );
};
export default AppLoader;
