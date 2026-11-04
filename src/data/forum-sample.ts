export interface Category { slug: string; name: string; description: string; }
export interface Member {
  slug: string; name: string; badge: 'Shop Owner' | 'AI Assistant' | 'Demo Account';
  initials: string; bio: string; specialties?: string[];
}
export interface Thread { slug: string; category: string; title: string; }
export interface Post {
  id: string; thread: string; author: string; date: string; body: string[];
  guide?: { slug: string; label: string }; photo?: boolean;
}
export interface ModerationItem { kind: string; title: string; action: string; status: string; }

export const moderationItems: ModerationItem[] = [
  { kind: 'Member Approval', title: 'New Member Signup', action: 'Sample Member 1 has requested access. The helper placed the signup in the queue and left membership inactive pending approval by a person.', status: 'Waiting For A Person' },
  { kind: 'Possible Spam', title: 'Phone Number In A Post', action: 'A demo post includes 480-555-0100. The helper flagged the contact number as possible spam and held the post for review.', status: 'Held For Review' },
  { kind: 'Expert Review', title: 'Valuation Question For Joe', action: 'A member asks what an inherited guitar is worth. The helper requested clear photos and routed the question to Joe without estimating a value.', status: 'Routed To Joe' },
  { kind: 'Off Topic', title: 'Unrelated Sales Post', action: 'A demo post advertises an unrelated item. The helper held it outside the public discussion and asked a moderator to decide.', status: 'Held For Review' },
];

export const categories: Category[] = [
  { slug: 'fender-electrics', name: 'Fender Electrics', description: 'Strats, Teles, offsets and the details that help date them.' },
  { slug: 'gibson-electrics-and-acoustics', name: 'Gibson Electrics And Acoustics', description: 'From small acoustics to Juniors and hollow bodies.' },
  { slug: 'flat-tops', name: 'Martin, Guild And Other Flat Tops', description: 'Acoustic identification, care and repair questions.' },
  { slug: 'gretsch-and-the-rest', name: 'Gretsch, Rickenbacker And The Rest', description: 'Labels, hardware and discoveries beyond the usual names.' },
  { slug: 'vintage-amps', name: 'Vintage Amps', description: 'Dating clues and questions for a qualified amp technician.' },
  { slug: 'serial-numbers', name: 'Serial Numbers And Dating Help', description: 'Compare numbers with construction details and photos.' },
  { slug: 'show-your-guitar', name: 'Show Your Guitar', description: 'Share the instrument, its details and its story.' },
  { slug: 'selling-advice', name: 'What Is It Worth (Selling Advice)', description: 'How to document a guitar and ask for an appraisal.' },
  { slug: 'guest-posts', name: 'Guest Posts From Shops And Builders', description: 'Sample contributions from the repair bench and workshop.' },
];

export const members: Member[] = [
  {
    slug: 'joe-dampt', name: 'Joe Dampt', badge: 'Shop Owner', initials: 'JD',
    bio: "Joe is the owner, lead appraiser and head of preservation at Joe's Vintage Guitars in Mesa, Arizona. He holds a bachelor's degree in Business Entrepreneurship from Arizona State University and was a traveling expert appraiser for Treasure Seekers Roadshow.",
    specialties: ['Pre-War Martin Guitars', 'Golden Era Gibson Electrics And Archtops', 'Vintage Fender Custom Color Guitars', 'Guitar Appraisal And Authentication'],
  },
  { slug: 'forum-helper', name: 'Forum Helper', badge: 'AI Assistant', initials: 'AI', bio: "Forum Helper is an AI that answers questions and moderates discussions. Its answers are checked against Joe's published guides. In the proposed forum it answers within the day and flags anything it cannot verify for Joe. All answers in this sample are placeholder demo content." },
  ...[1, 2, 3].map((n): Member => ({ slug: `sample-member-${n}`, name: `Sample Member ${n}`, badge: 'Demo Account', initials: `S${n}`, bio: 'Placeholder account for the sample. Real members replace these.' })),
];

export const threads: Thread[] = [
  { slug: 'strat-neck-date', category: 'fender-electrics', title: 'Dating A Strat By Its Neck Date' },
  { slug: 'tele-serial-and-parts', category: 'fender-electrics', title: 'Does A Tele Serial Date Every Part?' },
  { slug: 'gibson-no-serial', category: 'gibson-electrics-and-acoustics', title: 'A Gibson With No Visible Serial' },
  { slug: 'junior-pot-codes', category: 'gibson-electrics-and-acoustics', title: 'Pot Codes On An Old Les Paul Jr.' },
  { slug: 'martin-cracked-top', category: 'flat-tops', title: 'A Martin With A Cracked Top' },
  { slug: 'guild-label', category: 'flat-tops', title: 'Where Should I Look For A Guild Serial?' },
  { slug: 'gretsch-label-serial', category: 'gretsch-and-the-rest', title: 'A Gretsch Serial On The Label' },
  { slug: 'rickenbacker-jack-plate', category: 'gretsch-and-the-rest', title: 'Letters On A Rickenbacker Jack Plate' },
  { slug: 'fender-amp-hum', category: 'vintage-amps', title: 'A 1960s Fender Amp With A Hum' },
  { slug: 'dads-guitar', category: 'serial-numbers', title: "Found My Dad's Guitar: What Is It?" },
  { slug: 'show-your-offset', category: 'show-your-guitar', title: 'Show Your Guitar: A Well Played Offset' },
  { slug: 'should-i-refinish', category: 'selling-advice', title: 'Should I Refinish It Before Selling?' },
  { slug: 'appraisal-photos', category: 'selling-advice', title: 'Which Photos Help With An Appraisal?' },
  { slug: 'repair-bench-sample', category: 'guest-posts', title: 'Sample Guest Post: Notes From A Repair Bench' },
];

export const posts: Post[] = [
  { id: 'p1', thread: 'strat-neck-date', author: 'sample-member-1', date: '2026-10-03T09:00:00-07:00', body: ['My Strat has a faint stamp at the heel of the neck. Does that date the whole guitar?'], photo: true },
  { id: 'p2', thread: 'strat-neck-date', author: 'forum-helper', date: '2026-10-03T12:00:00-07:00', body: ['A neck date is one clue, rather than a date for every part. Compare it with the serial and other construction details.'], guide: { slug: 'fender-neck-dates', label: "Joe's Fender Neck Date Guide" } },
  { id: 'p3', thread: 'strat-neck-date', author: 'joe-dampt', date: '2026-10-04T10:00:00-07:00', body: ['Please add clear photos of the stamp and the full guitar. Have an experienced repairer handle neck removal if it is needed.'] },
  { id: 'p4', thread: 'tele-serial-and-parts', author: 'sample-member-2', date: '2026-10-05T09:00:00-07:00', body: ['The serial on this Tele points to a broad period. Can I assume the pickups are from that same year?'] },
  { id: 'p5', thread: 'tele-serial-and-parts', author: 'forum-helper', date: '2026-10-05T14:00:00-07:00', body: ['A serial alone cannot confirm that every part is original. Photos and component details help narrow the question.'], guide: { slug: 'fender-guitars-serial-number-guide', label: "Joe's Fender Serial Number Guide" } },
  { id: 'p6', thread: 'tele-serial-and-parts', author: 'sample-member-2', date: '2026-10-06T09:00:00-07:00', body: ['I will start with photos of the guitar as it is. I will leave the electronics alone.'] },
  { id: 'p7', thread: 'gibson-no-serial', author: 'sample-member-3', date: '2026-10-06T11:00:00-07:00', body: ['I cannot find a readable serial on an old Gibson acoustic. What other details should I photograph?'] },
  { id: 'p8', thread: 'gibson-no-serial', author: 'forum-helper', date: '2026-10-06T15:00:00-07:00', body: ['A missing or unreadable number does not settle the identity. Start with the front, back, headstock and any visible interior markings.'], guide: { slug: 'how-to-read-gibson-serial-numbers', label: "Joe's Gibson Serial Number Guide" } },
  { id: 'p9', thread: 'gibson-no-serial', author: 'sample-member-3', date: '2026-10-07T09:00:00-07:00', body: ['There is a faint mark inside. I will photograph it without trying to clean it.'] },
  { id: 'p10', thread: 'junior-pot-codes', author: 'sample-member-1', date: '2026-10-08T09:00:00-07:00', body: ['There are numbers on the pots in this Les Paul Jr. Can those tell me when the guitar was made?'] },
  { id: 'p11', thread: 'junior-pot-codes', author: 'forum-helper', date: '2026-10-08T13:00:00-07:00', body: ['Pot codes can date the component, which may predate assembly. Replaced parts also need to be considered.'], guide: { slug: 'gibson-pot-codes', label: "Joe's Gibson Pot Code Guide" } },
  { id: 'p12', thread: 'junior-pot-codes', author: 'joe-dampt', date: '2026-10-09T10:00:00-07:00', body: ['A clear photo of the whole control cavity helps put the numbers in context. Please leave the solder joints undisturbed.'] },
  { id: 'p13', thread: 'martin-cracked-top', author: 'sample-member-2', date: '2026-10-09T11:00:00-07:00', body: ['An old family Martin has a crack in the top. Should I glue it before asking someone to look at it?'], photo: true },
  { id: 'p14', thread: 'martin-cracked-top', author: 'forum-helper', date: '2026-10-09T14:00:00-07:00', body: ['Leave the repair to a qualified acoustic repairer. The neck block markings can help identify the guitar before that conversation.'], guide: { slug: 'martin-neck-block-stamps', label: "Joe's Martin Neck Block Guide" } },
  { id: 'p15', thread: 'martin-cracked-top', author: 'sample-member-2', date: '2026-10-10T09:00:00-07:00', body: ['I will leave the crack alone and get an inspection. I can photograph the markings through the soundhole.'] },
  { id: 'p16', thread: 'guild-label', author: 'sample-member-3', date: '2026-10-11T09:00:00-07:00', body: ['My Guild has a worn paper label. Is that the only place I should check for a number?'] },
  { id: 'p17', thread: 'guild-label', author: 'forum-helper', date: '2026-10-11T12:00:00-07:00', body: ['Serial locations vary by instrument and period. Compare the visible markings with the location guide before making a date claim.'], guide: { slug: 'guild-labels-and-serial-number-locations', label: "Joe's Guild Label And Serial Location Guide" } },
  { id: 'p18', thread: 'guild-label', author: 'sample-member-3', date: '2026-10-12T09:00:00-07:00', body: ['I found another marking inside. I will include both in the photos.'] },
  { id: 'p19', thread: 'gretsch-label-serial', author: 'sample-member-1', date: '2026-10-13T09:00:00-07:00', body: ['There is a serial on the label inside this Gretsch. Which dating chart should I use?'], photo: true },
  { id: 'p20', thread: 'gretsch-label-serial', author: 'forum-helper', date: '2026-10-13T13:00:00-07:00', body: ['Gretsch used different numbering systems over time. Compare the label and physical features with the guide before choosing a chart.'], guide: { slug: 'gretsch-serial-number-lookup', label: "Joe's Gretsch Serial Lookup" } },
  { id: 'p21', thread: 'gretsch-label-serial', author: 'sample-member-1', date: '2026-10-14T09:00:00-07:00', body: ['I will add the label and headstock together. The label photo alone was hard to read.'] },
  { id: 'p22', thread: 'rickenbacker-jack-plate', author: 'sample-member-2', date: '2026-10-15T09:00:00-07:00', body: ['This Rickenbacker has letters and numbers on the jack plate. Are those useful for dating it?'] },
  { id: 'p23', thread: 'rickenbacker-jack-plate', author: 'forum-helper', date: '2026-10-15T14:00:00-07:00', body: ['The format needs to be matched to the correct period. Include a clear plate photo and full views of the instrument.'], guide: { slug: 'rickenbacker-serial-numbers', label: "Joe's Rickenbacker Serial Guide" } },
  { id: 'p24', thread: 'rickenbacker-jack-plate', author: 'sample-member-2', date: '2026-10-16T09:00:00-07:00', body: ['Thanks, I will check the format before guessing a year.'] },
  { id: 'p25', thread: 'fender-amp-hum', author: 'sample-member-3', date: '2026-10-17T09:00:00-07:00', body: ['A family Fender amp from the 1960s has a steady hum. Is there an easy thing to check inside?'] },
  { id: 'p26', thread: 'fender-amp-hum', author: 'forum-helper', date: '2026-10-17T12:00:00-07:00', body: ['Stop using it and have a qualified amp technician inspect it. Do not open the chassis, as dangerous voltage can remain after unplugging. Exterior dating clues are a separate question.'], guide: { slug: 'vintage-fender-amplifier-serial-numbers-how-to-find-the-year', label: "Joe's Fender Amp Dating Guide" } },
  { id: 'p27', thread: 'fender-amp-hum', author: 'sample-member-3', date: '2026-10-18T09:00:00-07:00', body: ['I have unplugged it and will arrange an inspection. I will stick to exterior photos.'] },
  { id: 'p28', thread: 'dads-guitar', author: 'sample-member-1', date: '2026-10-19T09:00:00-07:00', body: ["I found my dad's guitar in its case and do not know the model. What should I send for identification?"], photo: true },
  { id: 'p29', thread: 'dads-guitar', author: 'forum-helper', date: '2026-10-19T13:00:00-07:00', body: ['Start with the full front and back, the headstock and any visible markings. A few clear photos are more useful than a guessed model name.'], guide: { slug: 'free-appraisal', label: "Joe's Free Appraisal Page" } },
  { id: 'p30', thread: 'dads-guitar', author: 'sample-member-1', date: '2026-10-20T09:00:00-07:00', body: ['The case has an old receipt too. I will keep that with the guitar.'] },
  { id: 'p31', thread: 'show-your-offset', author: 'sample-member-2', date: '2026-10-21T09:00:00-07:00', body: ['Here is a sample spot for an offset guitar photo. The worn finish and old case are part of its story.'], photo: true },
  { id: 'p32', thread: 'show-your-offset', author: 'forum-helper', date: '2026-10-21T12:00:00-07:00', body: ['A full view and a few detail photos would make a useful introduction. If you want dating help, keep the serial and feature clues together.'], guide: { slug: 'fender-guitars-serial-number-guide', label: "Joe's Fender Serial Number Guide" } },
  { id: 'p33', thread: 'show-your-offset', author: 'sample-member-2', date: '2026-10-22T09:00:00-07:00', body: ['I would add the case and headstock photos next. This image box is only a placeholder.'] },
  { id: 'p34', thread: 'should-i-refinish', author: 'sample-member-3', date: '2026-10-23T09:00:00-07:00', body: ['The finish on an old guitar is very worn. Should I refinish it before asking about selling?'] },
  { id: 'p35', thread: 'should-i-refinish', author: 'forum-helper', date: '2026-10-23T12:00:00-07:00', body: ['Refinishing usually lowers vintage value. Ask for an assessment before changing the finish.'], guide: { slug: 'how-much-does-a-refinish-hurt-guitar-value', label: "Joe's Guide To Refinishing And Vintage Value" } },
  { id: 'p36', thread: 'should-i-refinish', author: 'joe-dampt', date: '2026-10-24T10:00:00-07:00', body: ['Please send photos before having any work done. Wear, repairs and originality need to be considered together.'] },
  { id: 'p37', thread: 'appraisal-photos', author: 'sample-member-1', date: '2026-10-25T09:00:00-07:00', body: ['I am gathering photos for an appraisal. Should I include the case and any repair history?'] },
  { id: 'p38', thread: 'appraisal-photos', author: 'forum-helper', date: '2026-10-25T12:00:00-07:00', body: ['Include those alongside clear instrument photos and any known changes. Leave uncertain details as questions.'], guide: { slug: 'free-appraisal', label: "Joe's Free Appraisal Page" } },
  { id: 'p39', thread: 'appraisal-photos', author: 'joe-dampt', date: '2026-10-26T10:00:00-07:00', body: ['Full front and back photos are a useful starting point. Add close views of visible markings and anything you are concerned about.'] },
  { id: 'p40', thread: 'repair-bench-sample', author: 'sample-member-3', date: '2026-10-27T09:00:00-07:00', body: ['Sample guest contribution from a repair shop: photograph an instrument before beginning work. This is a demo account, and no real repair shop is represented.'], photo: true },
  { id: 'p41', thread: 'repair-bench-sample', author: 'forum-helper', date: '2026-10-27T12:00:00-07:00', body: ['This illustrates a reviewed guest post. A real contribution would include the author bio, shop link and clear scope of the work.'], guide: { slug: 'what-lowers-vintage-guitar-value', label: "Joe's Guide To Changes That Affect Vintage Value" } },
  { id: 'p42', thread: 'repair-bench-sample', author: 'sample-member-3', date: '2026-10-28T09:00:00-07:00', body: ['The sample bio would be replaced with the contributor details after review. No shop endorsement is implied here.'] },
];

export const memberBySlug = (slug: string) => members.find((member) => member.slug === slug)!;
export const threadPosts = (slug: string) => posts.filter((post) => post.thread === slug);
export const categoryThreads = (slug: string) => threads.filter((thread) => thread.category === slug)
  .sort((a, b) => threadPosts(b.slug).at(-1)!.date.localeCompare(threadPosts(a.slug).at(-1)!.date));
export const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'America/Phoenix' }).format(new Date(date));
export const guideUrl = (slug: string) => `https://www.joesvintageguitarsaz.com/${slug}/`;
