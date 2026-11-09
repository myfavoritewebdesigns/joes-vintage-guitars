import type {GuidePhoto} from '../../components/model-guide/types';
import front from '../../assets/images/martin-style-42/2012-martin-000-42-01.jpg';
import full from '../../assets/images/martin-style-42/2012-martin-000-42-02.jpg';
import head from '../../assets/images/martin-style-42/2012-martin-000-42-03.jpg';
import trim from '../../assets/images/martin-style-42/2012-martin-000-42-04.jpg';
import stamp from '../../assets/images/martin-style-42/2012-martin-000-42-05.jpg';
import back from '../../assets/images/martin-style-42/2012-martin-000-42-06.jpg';
import binding from '../../assets/images/martin-style-42/2012-martin-000-42-08.jpg';
import side from '../../assets/images/martin-style-42/2012-martin-000-42-09.jpg';
import casePhoto from '../../assets/images/martin-style-42/2012-martin-000-42-11.jpg';
const photo=(src:GuidePhoto['src'],caption:string):GuidePhoto=>({src,alt:caption,caption,captionBelow:true,fit:'contain'});
export const style42Photos={
 front:photo(front,'2012 Martin 000-42 from Joe’s archive. Modern comparison; the vintage price chart does not apply to this guitar.'),
 full:photo(full,'2012 Martin 000-42: complete modern 14-fret instrument, shown to distinguish recent production from vintage originals.'),
 head:photo(head,'2012 Martin 000-42: pearl headstock lettering and modern hardware. Match these details to the actual production year.'),
 trim:photo(trim,'2012 Martin 000-42: abalone top border and rosette. The photograph illustrates trim placement on a modern example.'),
 stamp:photo(stamp,'2012 Martin 000-42: neck-block photograph with part of the model area obscured.'),
 back:photo(back,'2012 Martin 000-42: rosewood back with a decorative center strip and plain perimeter binding.'),
 binding:photo(binding,'2012 Martin 000-42: close view of documented binding separation at the waist.'),
 side:photo(side,'2012 Martin 000-42: side and binding inspection view. This guitar has two documented areas of minor binding separation.'),
 casePhoto:photo(casePhoto,'2012 Martin 000-42: case and accompanying paperwork. Records should be matched to the instrument being assessed.')
};
