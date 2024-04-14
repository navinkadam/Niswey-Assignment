import Home from "../pages/Home";
import UploadContact from "../pages/UploadContact";

const commonRoutes = [
  { label: "Home", to: "/", Component: Home },
  { label: "Upload Contact", to: "/upload-contact", Component: UploadContact },
];

export { commonRoutes };
