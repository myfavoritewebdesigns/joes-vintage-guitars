export const whiteLabelRows = [
  ['1903', '1 to 1,150'], ['1904', '1,151 to 1,850'], ['1905', '1,851 to 2,550'], ['1906', '2,551 to 3,350'],
  ['1907', '3,351 to 4,250'], ['1908', '4,251 to 5,450'], ['1909', '5,451 to 6,950'], ['1910', '6,951 to 8,750'],
  ['1911', '8,751 to 10,850'], ['1912', '10,851 to 13,350'], ['1913', '13,351 to 16,100'], ['1914', '16,101 to 20,150'],
  ['1915', '20,151 to 25,150'], ['1916', '25,151 to 32,000'], ['1917', '32,001 to 39,500'], ['1918', '39,501 to 47,900'],
  ['1919', '47,901 to 53,800'], ['1920', '53,801 to 62,200'], ['1921', '62,201 to 69,300'], ['1922', '69,301 to 71,400'],
  ['1923', '71,401 to 74,900'], ['1924', '74,901 to 80,300'], ['1925', '80,301 to 82,700'], ['1926', '82,701 to 83,600'],
  ['1927', '83,601 to 85,400'], ['1928', '85,401 to 87,300'], ['1929', '87,301 to 89,750'], ['1930', '89,751 to 90,200'],
  ['1931', '90,201 to 90,450'], ['1932', '90,451 to 90,700'], ['1933', '90,701 to 91,400'], ['1934', '91,401 to 92,300'],
  ['1935', '92,301 to 92,800'], ['1936', '92,801 to 94,100'], ['1937', '94,101 to 95,200'], ['1938', '95,201 to 95,750'],
  ['1939', '95,751 to 96,050'], ['1940', '96,051 to 96,600'], ['1941', '96,601 to 97,400'], ['1942', '97,401 to 97,700'],
  ['1943', '97,701 to 97,850'], ['1944', '97,851 to 98,250'], ['1945', '98,251 to 98,650'], ['1946', '98,651 to 99,300'],
  ['1947', '99,301 to 99,999'],
];

export const aPrefixRows = [
  ['1947', 'A100 to A1,305'], ['1948', 'A1,306 to A2,665'], ['1949', 'A2,666 to A4,410'],
  ['1950', 'A4,411 to A6,596'], ['1951', 'A6,597 to A9,420'], ['1952', 'A9,421 to A12,460'],
  ['1953', 'A12,461 to A17,435'], ['1954', 'A17,436 to A18,665'], ['1955', 'A18,666 to A21,910'],
  ['1956', 'A21,911 to A24,755'], ['1957', 'A24,756 to A26,820'], ['1958', 'A26,821 to A28,880'],
  ['1959', 'A28,881 to A32,285'], ['1960', 'A32,286 to A34,645'], ['1961', 'A34,646 to A36,147'],
];

// Shared by the visible chart and the browser decoder; keep explicit gaps.
export { default as reusedRangeData } from './reused-ranges.json';
import reusedRangeData from './reused-ranges.json';
export const reusedRows = reusedRangeData.map(([start, end, years]) => [
  `${start} to ${end}`, years,
]);

export const earlyFonRows = [
  ['1902 to 1916', '1 to 3,650', 'Numbers generally increased, but counting could start over. A smaller number does not always mean an older guitar.'],
  ['1917 to 1923', '11,000 to 12,000', 'These numbers suggest this period, but the range is approximate and does not give an exact year.'],
  ['1924 to 1925', '11,000A to 11,250A', 'The letter A comes after the digits, as in 11000A. In this earlier format, A does not mean 1935.'],
  ['1925 to 1931', '8,000 to 9,999', 'Uses digits without a letter. Similar numbers occur in other periods, so check the guitar’s features.'],
  ['1931 to 1933', '1 to 890', 'Counting started again at low numbers. These can overlap earlier numbers, so use other clues to confirm the date.'],
  ['1934', '1 to 1,500', 'These numbers have no year-code letter. Gibson introduced letters to identify the year in 1935.'],
];

export const suffixFonRows = [['A','1935'],['B','1936'],['C','1937'],['D','1938'],['E','1939 or 1941'],['F','1940'],['G','1941'],['H','1942']];
export const wartimeFonRows = [
  ['1942','907, 910, 923; 2,004 to 2,005; 7,000s'],['1943','900 to 2,200'],['1944','2,200 to 2,900'],
  ['1945','100 to 1,000'],['1947','700 to 1,000 (unreliable)'],['1948','1,100 to 3,700'],
  ['1949','2,000 to 2,999'],['1950','3,000 to 5,999'],['1951','6,000 to 9,999'],
];
export const prefixFonRows = [['Z','1952'],['Y','1953'],['X','1954'],['W','1955'],['V','1956'],['U','1957'],['T','1958'],['S','1959'],['R','1960'],['Q','1961']];

export const specialRows = [
  ['CS + Y + sequence','Custom Shop CS-prefix',
    'The first digit after CS is the last digit of the build year. The rest is the production sequence, not a day or month.',
    'Establish the decade from specs and provenance. A year digit of 1 alone cannot distinguish 2001 from 2011 or 2021. Longer sequences are supported, but serial length does not prove the decade.'],
  ['M Y sequence','Historic Les Paul; 1958 Korina Flying V and Explorer',
    'The first digit identifies the model year being recreated. The second is the last digit of the year the reissue was built.',
    'Use matching records to establish the decade. Five versus six total digits does not settle it; a 1959 reissue is not a guitar built in 1959.'],
  ['Y sequence M / YY sequence M','Impressed SG, Firebird and other reissues',
    'Gibson publishes earlier two-position and later single-digit year systems with different model codes. Earlier prefixes 00 to 09 repeat on 2010s instruments; they do not always mean 2000 to 2009.',
    'Confirm the exact model, numbering system and decade from matching records. For example, 030992 can fit 2003 or 2013. The claimed 2021 changeover is not a verified universal factory cutoff, so transition-era examples need individual checking.'],
  ['1 Y sequence','1961 or 1964 ES Reissue',
    'Six digits total: an opening 1, a single build-year digit, then four sequence digits. The opening 1 does not distinguish the two reissue models.',
    'Confirm the model from its label and paperwork, then establish the decade from matching records. The number alone gives only the year’s last digit.'],
  ['A3 Y sequence','1963 ES-335 Historic Reissue',
    'A3 identifies this reissue format. The next digit is the last digit of the build year, followed by three sequence digits, as in A38005.',
    'Matching records must establish the decade. Numeric Memphis versions without A3 do not use this rule and need individual verification.'],
  ['A8 Y sequence','1958 ES-335 Reissue',
    'A8 identifies the 1958 reissue format, not a 1958 build date. The next digit is the last digit of the build year.',
    'Use matching factory or model records to establish the decade. The remaining sequence digits do not give a month or day.'],
  ['A9 Y sequence','1959 ES Reissue',
    'A9 identifies the 1959 reissue format, not a 1959 build date. The next digit is the last digit of the build year.',
    'Confirm the exact ES model and decade from matching records. The sequence alone cannot separate build years ten years apart.'],
  ['Y DDD Y sequence','Carved-top Custom Shop, orange label',
    'Digits 2 to 4 give the day of the year. The first and fifth positions carry year information, but the leading digit changed to 2 for the documented 2000s system.',
    'With the model and 2000 to 2009 period confirmed, 20045002 reads as January 4, 2005, sequence 002, not 2025. Later decades need Gibson confirmation; this rule does not establish them.'],
  ['Y sequence / YY sequence','Les Paul Classic, 1989 to 2014',
    'Four digits beginning with 9 mean 1989. In the five-digit system, 9 1234 can mean 1989 or 1999, sequence 1,234. With six digits, the opening 00 to 14 means 2000 to 2014.',
    'Confirm it is this Les Paul Classic model before using digit count. Use features and provenance to determine the decade. These rules do not apply to Historic reissues or original vintage Les Pauls.'],
  ['94 + six digits','Many regular 1994 Gibson instruments',
    'Most instruments in Gibson’s 1994 production line begin with 94. All six remaining digits form the production ranking, not a date.',
    'The year is readable, but no month or day is encoded. Exceptions include guitars made in early 1994, Custom Shop guitars and reissues. Do not use the usual first-and-fifth-digit formula or the separate Centennial Collection rule.'],
  ['CC + model + letter + sequence','Collector’s Choice',
    'The usual stamp has two model digits after CC, such as 01 or 09, followed by a letter and three sequence digits. The model identifies the guitar replicated, not the build year.',
    'No build year is encoded. Match the full number to factory records or paperwork that states this guitar’s build year; the model’s release year is not enough.'],
  ['Artist prefix + edition sequence','Artist signature and limited runs',
    'The prefix and number usually identify an artist edition and its place in the run. Some editions instead use a standard serial or a year digit, such as the Frampton Special.',
    'Identify the exact edition first. For an undated run number, use matching build-year records; the artist’s name or an undated certificate cannot supply a date. See the artist table below.'],
  ['1894 to 1994 + issue suffix','1994 Centennial Collection',
    'The four-digit number runs from 1894 through 1994 as a commemorative sequence. It is not the manufacture year. The suffix identifies the issue within the collection.',
    'Confirm the 1994 collection from the guitar and its paperwork. The suffix is not a dependable build month; use factory records for an individual production date.'],
  ['Vintage-style stamp; Y + four digits on the regular 1983 to early 1993 Reissue','Guitar Trader and other early Les Paul reissues',
    'Guitar Trader headstock stamps imitate vintage numbers. On the separate regular 1983 to early 1993 Les Paul Reissue, the first digit is the actual build-year digit: 9 means 1989, while 3 can mean 1983 or early 1993.',
    'Confirm the exact reissue model first. Gibson-made Guitar Traders have a separate eight-digit cavity serial; only some other early reissues do. Nashville-made Leo’s examples may lack it. Use matching records when the model or decade is unresolved.'],
  ['Eight-digit serial + separate four-digit edition','Heritage Standard 80 / 80 Elite; Les Paul 25/50',
    'These can carry two numbers: a normal date-coded serial and a separate limited-edition number. The four-digit edition number does not encode a year.',
    'Use the eight-digit serial: digits 1 and 5 give the year; digits 2 to 4 give the day of the year. Keep the edition number separate and check the date against the model.'],
  ['A to K + three digits; 1 + four digits','Early-1980s Heritage Korina Flying V; Explorer',
    'The reference lists A to K in a grouped Flying V, Moderne and Chet Atkins entry; it does not prove every letter occurred on Flying Vs. The Heritage Explorer uses 1 plus four production digits. Neither is a year code.',
    'Confirm the Heritage model and use matching factory records. If the guitar has a normal eight-digit date serial instead, decode that number; do not treat the short identifier as a date.'],
];

export const faqs = [
  ['Can a Gibson Serial Number Be Faked?','Yes. A serial number can be copied, reused, altered or applied to a refinished instrument, and a copied number can appear on a counterfeit guitar. A valid-looking number does not prove authenticity. Construction, hardware, electronics, finish and provenance all need to agree.'],
  ['What If My Gibson Does Not Have a Serial Number?','Some older Gibson instruments do not have a serial number. Look for a Factory Order Number stamped or written directly on bare wood inside the body. A FON can help date the production batch, but it is not the same as a serial number.'],
  ['Can a Gibson Serial Number Identify the Exact Model?','Usually not. A serial number may identify a production period, but it usually does not distinguish a Les Paul Standard from a Custom, Junior or another model. Use the guitar’s construction, pickups, hardware, finish and factory records to identify the model.'],
  ['Why does my result show more than one year?','Gibson reused serial ranges, and single build-year digits repeat every decade on many reissues and Custom Shop models. Confirm the model and numbering system first, then use matching dated paperwork when the decade remains unresolved.'],
  ['Does a five-digit Historic serial mean it was made in the 1990s?','No. Gibson’s earlier serial FAQ gives the five-digit Historic example 7 5123 as a 1957 reissue made in 2005. Do not apply the Les Paul Classic digit-count rule to a Historic reissue.'],
  ['Can an artist or Collector’s Choice edition number give a build year?','Usually it identifies the model or edition sequence, not the manufacture date. Some artist models use standard serials or a year digit, so confirm the exact edition. An undated COA or a model’s release year may not date the individual guitar.'],
  ['Where is the serial number on a Gibson guitar?','Common locations include an interior paper label, an ink stamp on the back of the headstock, or a number pressed into the headstock wood. Older acoustics may also have a FON stamped inside the body.'],
  ['Why does the production day look impossible?','A modern serial uses digits 2 to 4 as the day of the year. Values outside 001 to 366 usually mean the number was entered incorrectly or the guitar uses a different system.'],
];
