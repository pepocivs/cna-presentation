/** Containers */
import HomeContainer from "components/Containers/HomeContainer";
import NotFound from 'components/Containers/NotFound';

const components = {
  inicio: HomeContainer,
};

const route = route => components[route] || NotFound;

export default route;