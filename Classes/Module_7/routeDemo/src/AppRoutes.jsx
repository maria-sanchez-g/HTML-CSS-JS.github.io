import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import DashboardPage from "./Pages/DashboardPage";
import DashboardMessages from "./Pages/DashboardMessages";
import DashboardTasks from "./Pages/DashboardTasks";
import PageNotFound from "./Pages/PageNotFound";
import PostsPage, { PostList, PostExample } from "./Pages/PostsPage";

import Post from "./Pages/Post";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectRoute";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route path="login" element={<Login {...props} />} />
      <Route index element={<Homepage {...props} />} />

      <Route path="dash" element={<ProtectedRoute />}>
        <Route index element={<DashboardPage {...props} />} />
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route
        path="/about"
        element={
          <>
            <AboutPage {...props} />
          </>
        }
      />
      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        <Route path=":postId" element={<Post />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
