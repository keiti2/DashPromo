
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import Promocao from "views/Promocao.jsx";
import ValidarPromocao from "views/ValidarPromo.jsx";
import Cliente from "views/Cliente.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/promocao",
    name: "Promoção",
    icon: "pe-7s-ticket",
    component: Promocao,
    layout: "/admin"
  },
  {
    path: "/ValidarPromo",
    name: "Validar Promoção",
    icon: "pe-7s-download",
    component: ValidarPromocao,
    layout: "/admin"
  },
  {
    path: "/cliente",
    name: "Cliente",
    icon: "pe-7s-users",
    component: Cliente,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Configuração",
    icon: "pe-7s-config",
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
/*
{
  path: "/icons",
  name: "Icons",
  icon: "pe-7s-science",
  component: Icons,
  layout: "/admin"
}
*/