// src/routes/serviceRoutes.js
import SocialMedia from "../Services/SocialMedia/index/SocialMedia";
import GraphicDesigning from "../Services/Grpahic/index/GraphicDesigning";
import VideoEditing from "../Services/VideoEditing/index/VideoEditing";

export const ServiceRoutes = [
  { path: "/services/social-media", element: <SocialMedia /> },
  { path: "/services/graphic-designing", element: <GraphicDesigning /> },
  { path: "/services/video-editing", element: <VideoEditing /> },
];


