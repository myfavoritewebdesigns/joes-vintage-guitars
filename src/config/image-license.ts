// Compatibility bridge for the Gibson guide components. The production site
// keeps all photo-license fields in site.ts; these pages reuse that single
// source of truth while retaining the approved preview components unchanged.
import { SITE_URL, imageLicense } from "./site";

export const imageOrigin = SITE_URL;
export { imageLicense };
