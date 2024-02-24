export interface Page {
  title: string;
  path: string;
}

export interface SiteConfig {
  title: string;
  author: string;
  description: string;
  date?: Date;
  pages: Page[];
}
