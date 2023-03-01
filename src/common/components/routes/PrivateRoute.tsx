import { RouteProps } from 'react-router';

const PrivateRoute: React.FC<RouteProps> = props => {
  return props.element as React.ReactElement;
};

export default PrivateRoute;
