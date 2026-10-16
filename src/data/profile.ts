// Empty contact fields are hidden automatically. Fill in what you have.
export const profile = {
  name: 'Senator Shuaib Afolabi Salisu (Omoyayi)',
  shortName: 'Sen. Salisu',
  office: 'Senator, Ogun Central Senatorial District',
  tagline: 'A true representative of the people.',
  pitch:
    'A record of the projects and interventions delivered across Ogun Central: digital skills, schools, power, water, roads and support for families.',
  photo: '/images/senator.jpg', // put the photo at public/images/senator.jpg
  about: [
    'Senator Shuaib Afolabi Salisu, popularly known as Omoyayi, represents Ogun Central Senatorial District.',
    // Add his background, career and what he stands for here, one string per paragraph.
  ],
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