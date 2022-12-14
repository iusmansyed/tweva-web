const routes = [
  {
    collapse: false,
    name: "Dashboard",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    layout: "/account",
    path: "/",
  },
  {
    collapse: false,
    name: "Social Feed",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    path: "/social-feed",
    layout: "/account",
  },
  {
    collapse: false,
    name: "Designer",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    path: "/designer",
    layout: "/account",
  },
  {
    collapse: false,
    name: "My Tweva",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    layout: "/account",
    path: "/my-tweva",
  },
  {
    collapse: false,
    name: "Network",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    layout: "/account",
    path: "/network",
  },
  {
    collapse: false,
    name: "Advertise",
    icon: "ni ni-shop text-primary",
    path: "/advertise-new",
    layout: "/account",
  },
  {
    collapse: true,
    name: "Social Media",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    views: [
      {
        name: "New Post",
        miniName: "P",
        layout: "/account",
        path: "/social/new",
      },
      {
        name: "Calendar",
        miniName: "P",
        layout: "/account",
        path: "/social/calendar",
      },
      {
        name: "Timeline",
        miniName: "T",
        layout: "/account",
        path: "/social/timeline",
      },
    ],
  },
  {
    collapse: true,
    name: "Manager",
    icon: "ni ni-ungroup text-orange",
    state: "managerCollapse",
    views: [
      {
        name: "Dashboard",
        miniName: "P",
        path: "/dash",
        layout: "/account/manager",
      },
      {
        name: "Approve",
        miniName: "P",
        layout: "/account/manager",
        path: "/approve",
      },
      {
        name: "Invite",
        miniName: "T",
        layout: "/account/manager",
        path: "/invite",
      },
    ],
  },
];

/*
const routes = [
  {
    collapse: true,
    name: "Dashboards",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        miniName: "D",
        layout: "/admin",
      },
      {
        path: "/alternative",
        name: "Alternative",
        miniName: "A",
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Examples",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    views: [
      {
        path: "/pricing",
        name: "Pricing",
        miniName: "P",
        layout: "/auth",
      },
      {
        path: "/login",
        name: "Login",
        miniName: "L",
        layout: "/auth",
      },
      {
        path: "/register",
        name: "Register",
        miniName: "R",
        layout: "/auth",
      },
      {
        path: "/lock",
        name: "Lock",
        miniName: "L",
        layout: "/auth",
      },
      {
        path: "/timeline",
        name: "Timeline",
        miniName: "T",
        layout: "/admin",
      },
      {
        path: "/profile",
        name: "Profile",
        miniName: "P",
        layout: "/admin",
      },
      {
        path: "/rtl-support",
        name: "RTL Support",
        miniName: "RS",
        layout: "/rtl",
      },
    ],
  },
  {
    collapse: true,
    name: "Components",
    icon: "ni ni-ui-04 text-info",
    state: "componentsCollapse",
    views: [
      {
        path: "/buttons",
        name: "Buttons",
        miniName: "B",
        layout: "/admin",
      },
      {
        path: "/cards",
        name: "Cards",
        miniName: "C",
        layout: "/admin",
      },
      {
        path: "/grid",
        name: "Grid",
        miniName: "G",
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "Notifications",
        miniName: "N",
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "Icons",
        miniName: "I",
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Typography",
        miniName: "T",
        layout: "/admin",
      },
      {
        collapse: true,
        name: "Multi Level",
        miniName: "M",
        state: "multiCollapse",
        views: [
          {
            path: "#pablo",
            name: "Third level menu",
            layout: "/",
          },
          {
            path: "#pablo",
            name: "Just another link",
            layout: "/",
          },
          {
            path: "#pablo",
            name: "One last link",
            layout: "/",
          },
        ],
      },
    ],
  },
  {
    collapse: true,
    name: "Forms",
    icon: "ni ni-single-copy-04 text-pink",
    state: "formsCollapse",
    views: [
      {
        path: "/elements",
        name: "Elements",
        miniName: "E",
        layout: "/admin",
      },
      {
        path: "/components",
        name: "Components",
        miniName: "C",
        layout: "/admin",
      },
      {
        path: "/validation",
        name: "Validation",
        miniName: "V",
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Tables",
    icon: "ni ni-align-left-2 text-default",
    state: "tablesCollapse",
    views: [
      {
        path: "/tables",
        name: "Tables",
        miniName: "T",
        layout: "/admin",
      },
      {
        path: "/sortable",
        name: "Sortable",
        miniName: "S",
        layout: "/admin",
      },
      {
        path: "/react-bs-tables",
        name: "React BS Tables",
        miniName: "RBT",
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Maps",
    icon: "ni ni-map-big text-primary",
    state: "mapsCollapse",
    views: [
      {
        path: "/google",
        name: "Google",
        miniName: "G",
        layout: "/admin",
      },
      {
        path: "/vector",
        name: "Vector",
        miniName: "V",
        layout: "/admin",
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    icon: "ni ni-archive-2 text-green",
    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    icon: "ni ni-chart-pie-35 text-info",
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-calendar-grid-58 text-red",
    layout: "/admin",
  },
];
*/

export default routes;
