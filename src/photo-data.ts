import type { ImageMetadata } from 'astro';
import fon from './assets/serial-photos/gibson-factory-order-number-ink-stamp-bare-wood.jpg';
import white from './assets/serial-photos/gibson-white-label-serial-number-scaled.jpg';
import orange from './assets/serial-photos/gibson-a-prefix-serial-number-orange-label-1-scaled.jpg';
import ink from './assets/serial-photos/1955-gibson-les-paul-custom-ink-stamp-serial-number-scaled.jpg';
import inkFourDigit from './assets/serial-photos/1958-gibson-les-paul-junior-four-digit-serial.jpg';
import impressed from './assets/serial-photos/1966-gibson-es-335-serial-number-close-up-scaled.jpg';
import usa from './assets/serial-photos/gibson-waffleback-kluson-tuners-1972-sg-custom-scaled.jpg';
import decal from './assets/serial-photos/1975-gibson-les-paul-custom-silkscreen-logo-gold-scaled.jpg';
import modern from './assets/serial-photos/1986-j200-headstock-serial-81006505.jpg';
import classic from './assets/serial-photos/les-paul-classic-ink-serial-number.jpg';
import cs from './assets/serial-photos/les-paul-custom-cs-prefix-ink-stamp-serial.jpg';
import historic from './assets/serial-photos/gibson-r-9-historic-ink-stamp-serial.jpg';
import sg from './assets/serial-photos/gibson-sg-reissue-impressed-custom-shop-serial-number.jpg';

export interface SerialPhoto {
  image: ImageMetadata;
  title: string;
  alt: string;
  caption: string;
  linkedCaption?: {
    before: string;
    links: { label: string; href: string }[];
    after: string;
  };
}

export const chartPhotos: Record<string, SerialPhoto[]> = {
  'number-types': [
    { image: orange, title: 'Serial Number on an Interior Label',
      alt: 'Gibson serial A 34043 on an orange paper label inside the guitar',
      caption: 'A 34043 is on the paper label, visible through the f-hole. This is the guitar’s serial number.' },
    { image: ink, title: 'Serial Number on the Back of the Headstock',
      alt: 'Gibson serial 513053 ink-stamped on the finished back of the headstock',
      caption: '513053 is ink-stamped on the finished back of the headstock. This is a serial number, not an interior FON.' },
    { image: fon, title: 'FON on Bare Wood Inside the Guitar',
      alt: 'Gibson FON Z 1603 6 ink-stamped on bare wood inside the guitar body',
      caption: 'Z 1603 6 is ink-stamped directly on the bare interior wood.' },
  ],
  fon: [{ image: fon, title: 'FON on Interior Wood',
    alt: 'Gibson Factory Order Number Z 1603 6 ink-stamped directly on bare interior wood',
    caption: 'Z 1603 6 is stamped on the wood, not a paper label. Z is the 1952 FON prefix; the other numbers identify the batch and position within it.' }],
  'white-label': [
    { image: white, title: 'White Label With an A Prefix',
      alt: 'White oval Gibson interior label with a faint A-prefix serial visible through the soundhole',
      caption: 'This later white label carries an A-prefix number. It is not a number-only example for the early chart below. Check the prefix as well as the paper color.' },
  ],
  'a-prefix': [{ image: orange, title: 'Keep the A With the Number',
    alt: 'Gibson orange oval interior label with serial A 34043',
    caption: 'A 34043 is the complete serial. Keep the letter when looking it up; these digits are a sequence, not a split year-and-day code.' }],
  'ink-stamp': [
    { image: ink, title: 'Ink on the Headstock',
      alt: 'Yellow ink serial 513053 on the black rear headstock of a 1955 Gibson Les Paul Custom',
      caption: '513053 is printed in yellow ink on a 1955 Les Paul Custom. The number sits on the surface; it is not pressed into the wood. Reissues can imitate this appearance.' },
    { image: inkFourDigit, title: 'Rare Four-Digit 1958 Ink Stamp',
      alt: 'Four-digit ink serial 6811 on the back of a late-1958 Gibson Les Paul Junior headstock',
      caption: '6811 is a rare four-digit ink stamp on a late-1958 Les Paul Junior. Some late-1958 Juniors and Specials have four-digit numbers in the 6000 to 7000 range.' },
  ],
  reused: [{ image: impressed, title: 'Digits Pressed Into the Wood',
    alt: 'Close-up of impressed serial 846395 on a Gibson ES-335 headstock',
    caption: 'This serial number corresponds to 1966 and 1969. We cross-referenced the serial number with the knobs, neck construction, tuners and logo to determine that it was a 1966.',
    linkedCaption: {
      before: 'This serial number corresponds to 1966 and 1969. We cross-referenced it with the ',
      links: [
        { label: 'knobs', href: '/gibson-knob-dating-guide/' },
        { label: 'neck construction', href: '/gibson-physical-features-hardware-guide/#neck-construction' },
        { label: 'tuners', href: '/gibson-tuner-dating-guide/' },
        { label: 'logo', href: '/gibson-headstock-logo-chronology/' },
      ],
      after: ' to determine that it was a 1966.',
    } }],
  norlin: [
    { image: usa, title: 'Impressed Serial and USA Stamp',
      alt: 'Six-digit Gibson serial 745104 with Made in USA stamped beneath it on an SG Custom headstock',
      caption: '745104 and “Made in USA” are pressed into the wood. Note the six-digit serial and separate country-of-origin stamp.' },
    { image: decal, title: 'Gold Decal or Silkscreen',
      alt: 'Gold Les Paul Custom marking and 00-prefix serial 00115029 on a red Gibson headstock',
      caption: '00115029 appears in gold with the model name. In this decal system, the 00 prefix points to 1976. Do not apply the later impressed-serial formula.' },
  ],
  modern: [{ image: modern, title: 'Eight-Digit Date Code',
    alt: 'Gibson J-200 headstock with eight-digit serial 81006505 and Made in USA',
    caption: '81006505 is an eight-digit example: digits 1 and 5 give 86, and digits 2 to 4 give day 100. On this J-200, that reads as 1986.' }],
  'special-cs': [
    { image: cs, title: 'Custom Shop CS Prefix',
      alt: 'CS62763 serial on a Gibson Les Paul Custom headstock',
      caption: 'In CS62763, 6 is the last digit of the year. Any paperwork used for dating must match the headstock serial. Look closely here: the serial number on the paperwork does not match the one on the headstock, so it belongs to a different guitar. This should prompt further investigation into authenticity.' },
  ],
  'special-historic': [
    { image: historic, title: 'Historic Les Paul Reissue',
      alt: 'Historic Gibson Les Paul reissue with ink serial 9 3681',
      caption: 'In 9 3681, 9 identifies a 1959 reissue and 3 is the build-year digit. The stamp alone does not settle the decade.' },
  ],
  'special-classic': [
    { image: classic, title: 'Les Paul Classic',
      alt: 'Six-digit ink serial 060187 on a Gibson Les Paul Classic headstock',
      caption: '060187 uses the Classic’s six-digit format. Once the model is confirmed, its opening 06 reads as 2006. Do not use this rule for a Historic reissue.' },
  ],
  'special-impressed': [
    { image: sg, title: 'Impressed SG Reissue',
      alt: 'Impressed six-digit serial 001282 on a Gibson SG reissue headstock',
      caption: '001282 looks like a short vintage serial, but this is a reissue. Confirm the exact model and applicable year format before assigning a date.' },
  ],
};
