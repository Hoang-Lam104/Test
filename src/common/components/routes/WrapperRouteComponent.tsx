import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

export interface WrapperRouteProps extends PathRouteProps {
  titleId: string;
  auth?: boolean;
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ titleId, ...props }) => {
  if (titleId) {
    document.title = titleId;
  }

  return <PrivateRoute {...props} />
};

export default WrapperRouteComponent;
