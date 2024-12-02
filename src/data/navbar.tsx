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
        pageType: PageType.racing, 
        link: "/#/history",
    },
    { 
        pageTitleEN:"Team",
        pageTitleRO:"Echipă",
        pageType: PageType.racing, 
        link: "/#/team",
    },
    { 
        pageTitleEN:"Contact us",
        pageTitleRO:"Contactează-ne",
        pageType: PageType.racing, 
        link: "/#/contact",
    }
],
};
