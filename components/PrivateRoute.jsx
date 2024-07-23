import { Navigate, Outlet } from 'react-router-dom';
function PrivateRoute({ auth }) {
    return auth ? <Outlet /> : <Navigate to="/auth/sign-in" />;
}
export default PrivateRoute;