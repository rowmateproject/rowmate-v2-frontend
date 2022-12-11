import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiShipWheel,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
  mdiFerry,
  mdiAccountGroup,
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
    role: "User"
  },
  {
    to: "/boats",
    label: "Boats",
    icon: mdiFerry,
    role: "Admin"
  },
  {
    to: "/users",
    label: "Users",
    icon: mdiAccountGroup,
    role: "Admin"
  },
  {
    to: "/forms",
    label: "Forms",
    icon: mdiSquareEditOutline,
    role: "User"
  }
];
