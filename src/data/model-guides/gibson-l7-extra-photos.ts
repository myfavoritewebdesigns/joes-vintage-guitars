import type {GuidePhoto} from '../../components/model-guide/types';
import l7_1937Body from '../../assets/images/model-guides-3/gibson-l7-1937-body.jpg';
import l7_1937Board from '../../assets/images/model-guides-3/gibson-l7-1937-fingerboard.jpg';
import l7_1937Head from '../../assets/images/model-guides-3/gibson-l7-1937-headstock.jpg';
import l7_1937Back from '../../assets/images/model-guides-3/gibson-l7-1937-back.jpg';
import l7_1944Head from '../../assets/images/model-guides-3/gibson-l7-1944-fleur-de-lis.jpg';
import l7_1944Body from '../../assets/images/model-guides-3/gibson-l7-1944-body.jpg';
import l7_1944Board from '../../assets/images/model-guides-3/gibson-l7-1944-fingerboard.jpg';
import l7_1944Tail from '../../assets/images/model-guides-3/gibson-l7-1944-tailpiece.jpg';

export const l7ExtraPhotos = {
 l7_1937Body: {src:l7_1937Body,alt:"1937 Gibson L-7: sunburst body, f-holes and acoustic bridge.",caption:"1937 Gibson L-7: sunburst body, f-holes and acoustic bridge.",fit:'contain',captionBelow:true},
 l7_1937Board: {src:l7_1937Board,alt:"1937 Gibson L-7: decorative fingerboard inlays.",caption:"1937 Gibson L-7: decorative fingerboard inlays.",fit:'contain',captionBelow:true},
 l7_1937Head: {src:l7_1937Head,alt:"1937 Gibson L-7: script Gibson logo and ornate headstock inlay.",caption:"1937 Gibson L-7: script Gibson logo and ornate headstock inlay.",fit:'contain',captionBelow:true},
 l7_1937Back: {src:l7_1937Back,alt:"1937 Gibson L-7: figured back and body binding.",caption:"1937 Gibson L-7: figured back and body binding.",fit:'contain',captionBelow:true},
 l7_1944Head: {src:l7_1944Head,alt:"1944 Gibson L-7: fleur-de-lis headstock inlay beneath the script Gibson logo.",caption:"1944 Gibson L-7: fleur-de-lis headstock inlay beneath the script Gibson logo.",fit:'contain',captionBelow:true},
 l7_1944Body: {src:l7_1944Body,alt:"1944 Gibson L-7: sunburst noncutaway body and acoustic hardware.",caption:"1944 Gibson L-7: sunburst noncutaway body and acoustic hardware.",fit:'contain',captionBelow:true},
 l7_1944Board: {src:l7_1944Board,alt:"1944 Gibson L-7: split-parallelogram fingerboard inlays.",caption:"1944 Gibson L-7: split-parallelogram fingerboard inlays.",fit:'contain',captionBelow:true},
 l7_1944Tail: {src:l7_1944Tail,alt:"1944 Gibson L-7: trapeze tailpiece with a wooden crossbar.",caption:"1944 Gibson L-7: trapeze tailpiece with a wooden crossbar.",fit:'contain',captionBelow:true}
} satisfies Record<string,GuidePhoto>;
