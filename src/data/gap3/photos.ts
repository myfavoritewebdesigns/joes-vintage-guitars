import blue from '../../assets/blog/fender-custom-color-authentication-guide/1960-fender-stratocaster-refinished-blue-front.jpg';
import plate from '../../assets/blog/fender-custom-color-authentication-guide/1960s-fender-stratocaster-refin-neck-plate-bulge-grey-primer.jpg';
import family from '../../assets/blog/one-family-1946-martin-d-28/1946-martin-d-28-original-owners-grandson.jpeg';
import paf from '../../assets/blog/gibson-paf-patent-number-pickup-guide/gibson-paf-sticker-1962-es-335.jpg';
import papers from '../../assets/blog/vintage-gibson-hummingbird-history-value-guide/1960s-gibson-hummingbird-original-case-candy-gibson-strings.jpg';
import es355Family from '../../assets/blog/one-family-1959-gibson-es-355/1959-gibson-es-355-original-owners-son.jpg';
import steveMartin from '../../assets/blog/one-owner-1955-martin-d28/steve-minnich-1955-martin-d28.jpeg';
import stratOwner from '../../assets/blog/one-owner-1965-fender-stratocaster/owner-holding-stratocaster.jpg';

import refinishPhotos from './refinishPhotos';

export default {
  ...refinishPhotos,
  es355Family: { image: es355Family, alt: "The original owner's son holding the family's 1959 Gibson ES-355", captionLabel: 'The Handoff', caption: "The original owner's son with the guitar his family kept and played since 1959." },
  steveMartin: { image: steveMartin, alt: 'Steve Minnich smiling while holding the worn 1955 Martin D-28 his father bought new', caption: 'Steve Minnich with the 1955 Martin D-28 his father, Bill, bought new.', licensed: false },
  stratOwner: { image: stratOwner, alt: 'The original owner holding his 1965 Olympic White Fender Stratocaster with its factory tortoise pickguard', caption: 'The original owner with his 1965 Fender Stratocaster' },
  blue: { image: blue, alt: 'Front of a refinished 1960 Fender Stratocaster in light blue with a mint pickguard.', caption: 'A refinished 1960 Fender Stratocaster, identified as refinished in my Fender custom-color guide.' },
  plate: { image: plate, alt: 'Neck plate on a refinished blue metallic Fender Stratocaster, with ridged finish and a chip showing grey primer.', caption: 'This Stratocaster is identified as refinished in my custom-color guide. The existing inspection shows finish ridging around the neck plate and grey primer at a chip.' },
  family: { image: family, alt: "The original owner's grandson in Apache Junction, Arizona, holding the family's 1946 Martin D-28", caption: "The original owner's grandson with the family's 1946 Martin D-28 in Apache Junction, Arizona." },
  paf: { image: paf, alt: 'Original Gibson PAF pickup in a 1962 ES-335, with its worn Patent Applied For decal visible on the baseplate.', caption: 'An original Gibson PAF pickup from the pickup reference guide. This existing inspection photograph shows the baseplate and decal; leave inspection that requires disassembly to a specialist.' },
  papers: { image: papers, alt: 'Original Gibson strings box and case key in a vintage Gibson Hummingbird case.', caption: 'The original Gibson strings box and case key pictured in my Hummingbird guide. Keep case contents with the instrument before deciding what work it needs.' },
};
