import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
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
    icon: mdiTable,
    role: "Admin"
  },
  {
    to: "/forms",
    label: "Forms",
    icon: mdiSquareEditOutline,
    role: "User"
  }
];
