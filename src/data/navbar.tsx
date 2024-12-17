import { NavbarType } from "@/types/navbarType";
import logo from "/public/BlueStreamlineLOGO.png";
import { PageType } from "@/enums/page-type";

export const NavbarData: NavbarType = {
  logoPath: logo.src,
  pages: [
    { 
        pageTitleEN:"Racing",
        pageTitleRO:"Curse",
        pageType: PageType.racing, 
        link: "/#/racing",
    },
    { 
        pageTitleEN:"History",
        pageTitleRO:"Istorie",
        pageType: PageType.history, 
        link: "/#/history",
    },
    { 
        pageTitleEN:"Team & \n Sponsors",
        pageTitleRO:"Echipă & \n Sponsori",
        pageType: PageType.team, 
        link: "/#/team",
    },
    { 
        pageTitleEN:"News",
        pageTitleRO:"Noutăți",
        pageType: PageType.news, 
        link: "/#/news",
    },
    { 
        pageTitleEN:"Contact us",
        pageTitleRO:"Contactează-ne",
        pageType: PageType.contact, 
        link: "/#/contact",
    },
],
};
