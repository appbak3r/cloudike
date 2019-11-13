import { environment } from "../config/environment";

export const parseLink = (link: { href: string } | null) => {
  return link ? link.href.split(environment.apiUrl)[1] : null;
};
