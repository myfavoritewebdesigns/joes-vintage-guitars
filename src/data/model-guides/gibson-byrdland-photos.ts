import type {GuidePhoto} from '../../components/model-guide/types';
import byrd1957Body from '../../assets/images/model-guides-3/gibson-byrdland1957-body.jpg';
import byrd1957Front from '../../assets/images/model-guides-3/gibson-byrdland1957-front.jpg';
import byrd1957Pickup from '../../assets/images/model-guides-3/gibson-byrdland1957-pickup.jpg';
import byrd1957Back from '../../assets/images/model-guides-3/gibson-byrdland1957-back.jpg';
import byrd1967Front from '../../assets/images/model-guides-3/gibson-byrdland1967-front.jpg';
import byrd1967Pickups from '../../assets/images/model-guides-3/gibson-byrdland1967-pickups.jpg';
import byrd1967Tailpiece from '../../assets/images/model-guides-3/gibson-byrdland1967-tailpiece.jpg';
import byrd1967Tuners from '../../assets/images/model-guides-3/gibson-byrdland1967-tuners.jpg';
import byrd1970sBody from '../../assets/images/model-guides-3/gibson-byrdland1970s-body.jpg';
import byrd1970sBack from '../../assets/images/model-guides-3/gibson-byrdland1970s-back.jpg';

export const byrdlandPhotos = {
  byrd1957Body: {src:byrd1957Body,alt:"1957 Gibson Byrdland in sunburst, with black Alnico pickups and gold hardware.",caption:"1957 Gibson Byrdland in sunburst, with black Alnico pickups and gold hardware.",fit:'contain',captionBelow:true},
  byrd1957Front: {src:byrd1957Front,alt:"1957 Gibson Byrdland: full front view and rounded cutaway.",caption:"1957 Gibson Byrdland: full front view and rounded cutaway.",fit:'contain',captionBelow:true},
  byrd1957Pickup: {src:byrd1957Pickup,alt:"1957 Gibson Byrdland: black Alnico pickup with rectangular polepieces.",caption:"1957 Gibson Byrdland: black Alnico pickup with rectangular polepieces.",fit:'contain',captionBelow:true},
  byrd1957Back: {src:byrd1957Back,alt:"1957 Gibson Byrdland: figured maple back and sunburst finish.",caption:"1957 Gibson Byrdland: figured maple back and sunburst finish.",fit:'contain',captionBelow:true},
  byrd1967Front: {src:byrd1967Front,alt:"1967 Gibson Byrdland: full front view, pointed cutaway and covered pickups.",caption:"1967 Gibson Byrdland: full front view, pointed cutaway and covered pickups.",fit:'contain',captionBelow:true},
  byrd1967Pickups: {src:byrd1967Pickups,alt:"1967 Gibson Byrdland: covered pickups, bridge and pickguard.",caption:"1967 Gibson Byrdland: covered pickups, bridge and pickguard.",fit:'contain',captionBelow:true},
  byrd1967Tailpiece: {src:byrd1967Tailpiece,alt:"1967 Gibson Byrdland: engraved tailpiece and gold hardware.",caption:"1967 Gibson Byrdland: engraved tailpiece and gold hardware.",fit:'contain',captionBelow:true},
  byrd1967Tuners: {src:byrd1967Tuners,alt:"1967 Gibson Byrdland: rear headstock and gold tuners.",caption:"1967 Gibson Byrdland: rear headstock and gold tuners.",fit:'contain',captionBelow:true},
  byrd1970sBody: {src:byrd1970sBody,alt:"1970s Gibson Byrdland in sunburst, with a rounded cutaway and gold hardware.",caption:"1970s Gibson Byrdland in sunburst, with a rounded cutaway and gold hardware.",fit:'contain',captionBelow:true},
  byrd1970sBack: {src:byrd1970sBack,alt:"1970s Gibson Byrdland: sunburst back and contrasting neck laminations.",caption:"1970s Gibson Byrdland: sunburst back and contrasting neck laminations.",fit:'contain',captionBelow:true}
} satisfies Record<string,GuidePhoto>;
