import { Navigate, Route } from 'react-router-dom';

export const NonAuthenticatedRoutes = () => {
  const routes = [
    <Route
      path="/authentication/login"
      element={<div>Not Authenticated</div>}
    />,

    <Route path="*" element={<Navigate to="/authentication/login" />} />,
  ];

  return routes;
};
