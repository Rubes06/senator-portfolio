// Empty contact fields are hidden automatically. Fill in what you have.
export const profile = {
  name: 'Senator Shuaib Afolabi Salisu (Omoyayi)',
  shortName: 'Sen. Salisu',
  office: 'Senator, Ogun Central Senatorial District',
  tagline: 'A true representative of the people.',
  pitch:
    'A record of the projects and interventions delivered across Ogun Central: digital skills, schools, power, water, roads and support for families.',
  photo: '/images/salisu.jpg',
  about: [
    'Senator Shuaib Afolabi Salisu, popularly known as Omoyayi, represents Ogun Central Senatorial District in the 10th National Assembly.',
    'He chairs the Senate Committee on ICT and Cybersecurity and is Vice Chairman of the Senate Committee on Media and Public Affairs. Before the Senate, he served as Chief of Staff to Ogun State Governor Dapo Abiodun from 2019 to 2023.',
    'An ICT professional by training, he holds B.Sc., M.Sc. and MBA degrees from the University of Lagos, with executive training at the Harvard Kennedy School. Before public office he worked with Total, Mobil and Equatorial Trust Bank, and founded Simplex Automation Systems.',
  ],
  facts: [
    { icon: 'account_balance', label: 'Office', value: 'Senator, 10th National Assembly' },
    { icon: 'location_on', label: 'District', value: 'Ogun Central' },
    { icon: 'people', label: 'Popularly known as', value: 'Omoyayi' },
    { icon: 'laptop_mac', label: 'Senate committee', value: 'Chairman, ICT & Cybersecurity' },
    { icon: 'gavel', label: 'Senate committee', value: 'Vice Chairman, Media & Public Affairs' },
    { icon: 'apartment', label: 'Previously', value: 'Chief of Staff to the Ogun State Governor, 2019–2023' },
    { icon: 'school', label: 'Education', value: 'B.Sc., M.Sc., MBA, University of Lagos' },
  ],
  timeline: [
    { year: 'Before public office', title: 'Career in ICT and banking', text: 'Worked with Total, Mobil and Equatorial Trust Bank, and founded Simplex Automation Systems.' },
    { year: '2019 – 2023', title: 'Chief of Staff to the Governor', text: 'Served as Chief of Staff to Ogun State Governor Dapo Abiodun.' },
    { year: 'June 2023', title: 'Became Senator for Ogun Central', text: 'Assumed office in the 10th National Assembly.' },
    { year: '2023 – present', title: 'Senate committee leadership', text: 'Chairman of the Senate Committee on ICT and Cybersecurity, and Vice Chairman of the Senate Committee on Media and Public Affairs.' },
  ] as { year: string; title: string; text: string }[],
  contact: {
    phone: '',
    email: '',
    address: '',
    social: '',
  },
    // The four big numbers under the hero. Change them as you confirm figures.
  highlights: [
    { icon: 'laptop_mac', value: '2,000+', label: 'youths trained and given laptops' },
    { icon: 'diversity_3', value: '500+', label: 'market women given grants' },
    { icon: 'lightbulb', value: '17', label: 'locations lit by solar streetlights' },
    { icon: 'school', value: '7', label: 'school ICT centres built' },
  ],
  // Gallery photos: put files in public/images/gallery/ and add lines like
  // { src: '/images/gallery/event1.jpg', caption: 'What this photo shows' },
  gallery: [] as { src: string; caption: string }[],
  updated: 'October 2026',
}