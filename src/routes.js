/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";

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