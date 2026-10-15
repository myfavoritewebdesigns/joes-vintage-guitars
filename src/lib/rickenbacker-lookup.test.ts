import assert from 'node:assert/strict';
import { lookupRickenbacker } from './rickenbacker-lookup.ts';

// Expected dates were checked with Rickenbacker's public decoder, not generated
// from this resolver. Freeze the year so future-date rejection stays repeatable.
const cases = [
  ['GD1234', 'April 1967'],
  [' gd 12-34 ', 'April 1967'],
  ['A01234', 'January 1987'],
  ['L91234', 'December 1996'],
  ['M01234', 'January 1997'],
  ['R01234', 'April 1997'],
  ['Y11234', 'November 1998'],
  ['2108001', 'Week 08, 2021'],
  ['9912001', 'Week 12, 1999'],
];
for (const [serial, expected] of cases) assert.equal(lookupRickenbacker(serial, 2026).title, expected, serial);
for (const serial of ['', 'GD', 'GD12ABC', 'GD1234!', '2108', '2100001', '2153001', 'Q01234', '3501001']) {
  assert.equal(lookupRickenbacker(serial, 2026).invalid, true, serial);
}
for (const serial of ['JK1234', 'JL1234', 'Z11234', 'XX1234', '85C7116', 'B7100']) {
  assert.equal(lookupRickenbacker(serial, 2026).title, 'Check The Instrument And Serial', serial);
}
console.log('24 Rickenbacker lookup checks passed.');
