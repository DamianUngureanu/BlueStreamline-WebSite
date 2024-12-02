import { PageType } from "@/enums/page-type";

export type NavbarType= {
  logoPath: string;
  pages: {
    pageTitleEN:string,
    pageTitleRO:string,
    pageType: PageType;
    link: string;
  }[];
};
