import { useEffect } from "react";
import { Route, Routes, type RouteProps } from "react-router-dom";
import TestCharkra from "@pages/test-charkra";
import NotFound from "@components/404-custom";
import WorkPage from "@pages/work-page";
import WorkDetailPage from "@pages/work-details-page";
import Layout from "@pages/layout";
import Contacts from "@pages/Contacts";
import Blog from "@pages/Blog";
import BlogDetail from "@pages/Blog/component/blog-detail";
import AboutUs from "@pages/AboutUs";
import HomePage from "@pages/home-page";
import ServicePage from "@pages/Services/services-page";
import ArVrPage from "@pages/Services/ar-vr";
import Game3DPage from "@pages/Services/game-3d";
import TrainingPage from "@pages/Services/training";
import WebAppPage from "@pages/Services/web-app";
import VisualizationPage from "@pages/Services/visualization";
import MarketingPage from "@pages/Services/marketing";

const dashboardRoutersClient: RouteProps[] = [
  {
    path: "/test",
    element: <TestCharkra />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
  {
    path: "/work/:id",
    element: <WorkDetailPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetail />,
  },
  {
    path: "/services",
    element: <ServicePage />,
  },
  {
    path: "/services/ar-vr",
    element: <ArVrPage />,
  },
  {
    path: "/services/game-3d",
    element: <Game3DPage />,
  },
  {
    path: "/services/training",
    element: <TrainingPage />,
  },
  {
    path: "/services/web-app",
    element: <WebAppPage />,
  },
  {
    path: "/services/visualization",
    element: <VisualizationPage />,
  },
  {
    path: "/services/marketing",
    element: <MarketingPage />,
  },
];

const RouterContainer = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual"; // Ngăn trình duyệt nhớ vị trí scroll
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="" element={<Layout />}>
        {dashboardRoutersClient.map((route) => (
          <Route key={route.path} {...route}></Route>
        ))}
      </Route>
      {/* Route 404 - phải đặt ở cuối cùng */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterContainer;