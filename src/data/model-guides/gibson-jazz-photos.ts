import type { GuidePhoto } from '../../components/model-guide/types';
import kesselFront from '../../assets/images/model-guides-jazz/1967-gibson-barney-kessel-front.jpg';
import kesselFull from '../../assets/images/model-guides-jazz/1967-gibson-barney-kessel-full-front.jpg';
import kesselHead from '../../assets/images/model-guides-jazz/1967-gibson-barney-kessel-headstock.jpg';
import kesselInlays from '../../assets/images/model-guides-jazz/1967-gibson-barney-kessel-fretboard-inlays.jpg';
import kesselLabel from '../../assets/images/model-guides-jazz/1967-gibson-barney-kessel-label.jpg';
import kesselBack from '../../assets/images/model-guides-jazz/1967-gibson-barney-kessel-back.jpg';
import kesselTuners from '../../assets/images/model-guides-jazz/1967-gibson-barney-kessel-headstock-back-tuners.jpg';
import kesselRepair from '../../assets/images/model-guides-jazz/1967-gibson-barney-kessel-headstock-repair.jpg';
import kesselCase from '../../assets/images/model-guides-jazz/1967-gibson-barney-kessel-in-case.jpg';
import hrFront from '../../assets/images/model-guides-jazz/1974-gibson-howard-roberts-custom-front.jpg';
import hrFull from '../../assets/images/model-guides-jazz/1974-gibson-howard-roberts-custom-full-front.jpg';
import hrBoard from '../../assets/images/model-guides-jazz/1974-gibson-howard-roberts-custom-fretboard-pickup.jpg';
import hrBridge from '../../assets/images/model-guides-jazz/1974-gibson-howard-roberts-custom-bridge-controls.jpg';
import hrLabel from '../../assets/images/model-guides-jazz/1974-gibson-howard-roberts-custom-label.jpg';
import hrBack from '../../assets/images/model-guides-jazz/1974-gibson-howard-roberts-custom-back.jpg';
import hrCase from '../../assets/images/model-guides-jazz/1974-gibson-howard-roberts-custom-in-case.jpg';
import hr77Front from '../../assets/images/model-guides-jazz/1977-gibson-howard-roberts-front.jpg';
import hr77Head from '../../assets/images/model-guides-jazz/1977-gibson-howard-roberts-headstock.jpg';
import jsFront from '../../assets/images/model-guides-jazz/1970-gibson-johnny-smith-front.jpg';
import jsFull from '../../assets/images/model-guides-jazz/1970-gibson-johnny-smith-full-front.jpg';
import jsHead from '../../assets/images/model-guides-jazz/1970-gibson-johnny-smith-headstock.jpg';
import jsLabel from '../../assets/images/model-guides-jazz/1970-gibson-johnny-smith-label.jpg';
import jsBack from '../../assets/images/model-guides-jazz/1970-gibson-johnny-smith-back.jpg';
import jsSerial from '../../assets/images/model-guides-jazz/1970-gibson-johnny-smith-serial-second-stamp.jpg';
import triniFront from '../../assets/images/model-guides-jazz/1967-gibson-trini-lopez-standard-front.jpg';
import triniFull from '../../assets/images/model-guides-jazz/1967-gibson-trini-lopez-standard-full-front.jpg';
import triniInlays from '../../assets/images/model-guides-jazz/1967-gibson-trini-lopez-standard-diamond-inlays.jpg';
import triniHead from '../../assets/images/model-guides-jazz/1967-gibson-trini-lopez-standard-headstock.jpg';
import triniBack from '../../assets/images/model-guides-jazz/1967-gibson-trini-lopez-standard-back.jpg';
import triniSerial from '../../assets/images/model-guides-jazz/1967-gibson-trini-lopez-standard-headstock-back-serial.jpg';
import triniCase from '../../assets/images/model-guides-jazz/1967-gibson-trini-lopez-standard-in-case.jpg';
import triniControls from '../../assets/images/model-guides-jazz/1967-gibson-trini-lopez-standard-controls.jpg';
import farlowFront from '../../assets/images/model-guides-jazz/1962-gibson-tal-farlow-front.jpg';
import farlowHead from '../../assets/images/model-guides-jazz/1962-gibson-tal-farlow-headstock.jpg';
import farlowGuard from '../../assets/images/model-guides-jazz/1962-gibson-tal-farlow-pickguard-pickups.jpg';

const ph = (src: GuidePhoto['src'], caption: string): GuidePhoto => ({ src, alt: caption, caption, fit: 'contain' });

export const jazzPhotos = {
  kesselFront: ph(kesselFront, '1967 Gibson Barney Kessel in cherry sunburst, with two humbuckers and both pointed cutaways.'),
  kesselFull: ph(kesselFull, '1967 Gibson Barney Kessel: full front view with the headstock.'),
  kesselHead: ph(kesselHead, '1967 Gibson Barney Kessel: headstock face with the Gibson logo, pearl peghead inlay and a Custom truss rod cover.'),
  kesselInlays: ph(kesselInlays, '1967 Gibson Barney Kessel: paired parallelogram fingerboard inlays.'),
  kesselLabel: ph(kesselLabel, '1967 Gibson Barney Kessel: the oval Gibson label seen through an f-hole.'),
  kesselBack: ph(kesselBack, '1967 Gibson Barney Kessel: back of the body in cherry sunburst.'),
  kesselTuners: ph(kesselTuners, '1967 Gibson Barney Kessel: back of the headstock and the tuners.'),
  kesselRepair: ph(kesselRepair, '1967 Gibson Barney Kessel: the old headstock repair behind the nut, with dark finish over the repaired area.'),
  kesselCase: ph(kesselCase, '1967 Gibson Barney Kessel in its original case.'),
  hrFront: ph(hrFront, '1974 Gibson Howard Roberts Custom in sunburst, with its single cutaway and oval soundhole.'),
  hrFull: ph(hrFull, '1974 Gibson Howard Roberts Custom: full front view with the headstock.'),
  hrBoard: ph(hrBoard, '1974 Gibson Howard Roberts Custom: block-style inlays and the replacement Ibanez Super 70 pickup at the end of the fingerboard.'),
  hrBridge: ph(hrBridge, '1974 Gibson Howard Roberts Custom: inlaid bridge base, control knobs and tailpiece.'),
  hrLabel: ph(hrLabel, '1974 Gibson Howard Roberts Custom: Gibson Inc. label naming the Howard Roberts Custom, seen through the soundhole.'),
  hrBack: ph(hrBack, '1974 Gibson Howard Roberts Custom: back of the body in sunburst.'),
  hrCase: ph(hrCase, '1974 Gibson Howard Roberts Custom in its original case.'),
  hr77Front: ph(hr77Front, '1977 Gibson Howard Roberts with gold hardware, a black pickguard and one neck humbucker.'),
  hr77Head: ph(hr77Head, '1977 Gibson Howard Roberts: headstock with a pearl Gibson logo and a floral vine inlay.'),
  jsFront: ph(jsFront, '1970 Gibson Johnny Smith in sunburst, with a Lollar pickup, replacement guard and a fingers-style tailpiece.'),
  jsFull: ph(jsFull, '1970 Gibson Johnny Smith: full front view with the headstock.'),
  jsHead: ph(jsHead, '1970 Gibson Johnny Smith: Gibson logo, split-diamond peghead inlay and the Johnny Smith truss rod cover.'),
  jsLabel: ph(jsLabel, '1970 Gibson Johnny Smith: Gibson Inc. label marked Johnny Smith, seen through an f-hole.'),
  jsBack: ph(jsBack, '1970 Gibson Johnny Smith: back of the body in sunburst.'),
  jsSerial: ph(jsSerial, '1970 Gibson Johnny Smith: serial 39708, the SECOND stamp and gold Kluson tuners on the back of the headstock.'),
  triniFront: ph(triniFront, '1967 Gibson Trini Lopez Standard in cherry, with diamond soundholes and two humbuckers.'),
  triniFull: ph(triniFull, '1967 Gibson Trini Lopez Standard: full front view with the six-on-a-side headstock.'),
  triniInlays: ph(triniInlays, '1967 Gibson Trini Lopez Standard: split-diamond fingerboard inlays.'),
  triniHead: ph(triniHead, '1967 Gibson Trini Lopez Standard: six-on-a-side headstock with the Gibson logo.'),
  triniBack: ph(triniBack, '1967 Gibson Trini Lopez Standard: back of the cherry body.'),
  triniSerial: ph(triniSerial, '1967 Gibson Trini Lopez Standard: impressed serial on the back of the headstock and Kluson tuners on a single strip.'),
  triniCase: ph(triniCase, '1967 Gibson Trini Lopez Standard in its case.'),
  triniControls: ph(triniControls, '1967 Gibson Trini Lopez Standard: control knobs, pickup selector and rim binding.'),
  farlowFront: ph(farlowFront, '1962 Gibson Tal Farlow in brown sunburst, with the scroll inlay at the cutaway.'),
  farlowHead: ph(farlowHead, '1962 Gibson Tal Farlow: Gibson logo, pearl peghead inlay and Custom truss rod cover.'),
  farlowGuard: ph(farlowGuard, '1962 Gibson Tal Farlow: marbled pickguard between the two humbuckers.'),
};
