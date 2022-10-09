import { Navigate, Route } from 'react-router-dom';

export const AuthenticatedRoutes = () => {
  const routes = [
    <Route path="/" element={<div>Authenticated</div>} />,
    <Route path="*" element={<Navigate to="/" />} />,
  ];

  return routes;
};
