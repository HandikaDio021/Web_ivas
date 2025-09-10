
export const MENUITEMS = [
  {
    menutitle: 'MAIN',
    Items: [
      {
        icon: (<i className="side-menu__icon bx bx-home"></i>),
        type: 'sub',
        Name: '',
        active: false,
        selected: false,
        title: 'Dashboards',
        badge: '',        
        class: 'badge bg-warning-transparent ms-2',
        children: [
          { path: `${import.meta.env.BASE_URL}dashboards/crm`, type: 'link', active: false, selected: false, title: 'SCRUM' },
        ]
      }
    ]
  },
  {
    menutitle: "MENU",
    Items: [
      {
        title: "Planning",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path:  `${import.meta.env.BASE_URL}planning/backlog`,
            title: "Backlog",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `${import.meta.env.BASE_URL}planning/board`,
            title: "Board",
            type: "link",
            selected: false,
            active: false,            
          },
          {
            path: `${import.meta.env.BASE_URL}planning/issues`,
            title: "Issues",
            type: "link",
            selected: false,
            active: false,            
          },
        ],
      },
    ],
  },

];
