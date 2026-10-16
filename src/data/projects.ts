import type { Category, Project, Status } from '../types'

export const STATUS_LABEL: Record<Status | 'all', string> = {
  all: 'All',
  done: 'Delivered',
  ongoing: 'In progress',
  planned: 'Planned',
}
export const STATUS_ICON: Record<Status | 'all', string> = {
  all: 'apps',
  done: 'check_circle',
  ongoing: 'autorenew',
  planned: 'event',
}

export const categories: Category[] = [
  { id: 'legislation', label: 'Bills and motions', icon: 'gavel' },
  { id: 'education', label: 'Education', icon: 'school' },
  { id: 'digital', label: 'Digital and ICT', icon: 'laptop_mac' },
  { id: 'power', label: 'Power and light', icon: 'bolt' },
  { id: 'water', label: 'Water', icon: 'water_drop' },
  { id: 'roads', label: 'Roads', icon: 'add_road' },
  { id: 'empowerment', label: 'Empowerment', icon: 'diversity_3' },
  { id: 'farming', label: 'Agriculture', icon: 'agriculture' },
  { id: 'health', label: 'Health', icon: 'medical_services' },
  { id: 'welfare', label: 'Welfare and festivals', icon: 'redeem' },
]

// Source: SAS Projects and Interventions pamphlet. Add year/status as you confirm them.
export const projects: Project[] = [
  { id: 'b1', category: 'legislation', status: 'ongoing', title: 'National Internship and Unemployment Benefit Scheme Bill', summary: 'A bill that has passed Second Reading.' },
  { id: 'b2', category: 'legislation', status: 'ongoing', title: 'National Digital Economy and E-Governance Bill', summary: 'A bill that has passed Second Reading.' },
  { id: 'm1', category: 'legislation', status: 'done', title: 'Motion to halt the sale of Lafarge Cement PLC to foreigners', summary: 'A motion raised to stop the sale of the company to foreign buyers.' },
  { id: 'm2', category: 'legislation', status: 'done', title: 'Motion to stop illegal raids of markets by Customs officers', summary: 'A motion raised to protect traders from illegal market raids.' },

  { id: 'e1', category: 'education', status: 'done', title: 'Educational materials for secondary schools', summary: 'School bags, textbooks, maths sets, exercise books and JAMB/SSCE past questions shared with secondary schools and SAS scholars across Ogun Central.' },
  { id: 'e2', category: 'education', status: 'done', title: 'Annual JAMB form purchase', scale: '1,000+ students', summary: 'JAMB forms bought every year for students.' },
  { id: 'e3', category: 'education', status: 'done', title: 'Educational enrolment seminar for traditional rulers', summary: 'Seminar and capacity-building workshop for traditional rulers across Ogun Central.' },

  { id: 'd1', category: 'digital', status: 'done', title: 'Community ICT centres in schools', scale: '7 centres', summary: 'Fully equipped, modern community ICT centres built at:', places: ['Government Technical College, Idi Aba', 'Community High School, Oluke, Ifo', 'Federal University of Medical Sciences (FUMSA), Odeda', 'Ansarudeen College, Ishaga Orile, Abeokuta North', 'Methodist High School, Arigbajo, Ewekoro', 'Egba Obafe Grammar School, Obafemi Owode', 'Egba Odeda High School, Odeda'] },
  { id: 'd2', category: 'digital', status: 'done', title: 'ICT equipment for four schools', scale: '4 schools', summary: 'ICT equipment provided to:', places: ['Ijemo Titun High School, Abeokuta', 'Nawairudeen Grammar School, Obantoko', 'Agbado District Comprehensive High School, Oke Aro', 'Asero High School, Abeokuta'] },
  { id: 'd3', category: 'digital', status: 'done', title: '250-capacity ICT centre at FUNAAB', scale: '250 seats', summary: 'ICT centre commissioned at the Federal University of Agriculture, Abeokuta.' },
  { id: 'd4', category: 'digital', status: 'done', title: 'NITDA digital skills training and laptops for youths', scale: '2,000+ youths', summary: 'Digital training and laptop distribution for youths across Ogun Central.' },
  { id: 'd5', category: 'digital', status: 'done', title: 'Digital skills and laptops for artisans', summary: 'Training and laptop empowerment for artisans across Ogun Central.' },
  { id: 'd6', category: 'digital', status: 'done', title: 'Digital literacy for undergraduates and graduates', summary: 'Digital skills, entrepreneurship training and laptops for undergraduates and recent graduates.' },
  { id: 'd7', category: 'digital', status: 'done', title: 'ICT training and laptops for teachers', summary: 'Capacity building on using ICT for teaching and learning, with laptops for teachers across the district.' },
  { id: 'd8', category: 'digital', status: 'done', title: 'Laptop donation at the Ogun Digital Summit', summary: 'Laptops donated at the summit.' },

  { id: 'p1', category: 'power', status: 'done', title: '24-hour power and streetlights at NUJ Secretariat', summary: 'Power supply and streetlights installed at the NUJ Secretariat, Iwe Iroyin, Abeokuta.', places: ['NUJ Secretariat, Iwe Iroyin, Abeokuta'] },
  { id: 'p2', category: 'power', status: 'done', title: 'Solar-powered streetlights', scale: '17 locations', summary: 'High-quality solar streetlights installed at:', places: ['Oba Odeleye Park, Ori Omi (Abeokuta North)', 'Nigeria Labour Congress, Ogun State Council Secretariat', 'Ikorita Meje, Ifo', 'Owode Township Road', 'Odeda Township', 'Itori Township Road', 'General Hospital, Ijaye', 'GRA Ibara', 'Ilugun', 'Agbado', 'Oluwo', 'Awowo', 'Orile Ilugun', 'Bode Olude', 'Ibafo', 'Asero', 'Paramount FM'] },
  { id: 'p3', category: 'power', status: 'done', title: 'Electric transformers for two communities', summary: 'Transformers provided and installed for:', places: ['Isabo CDA and adjoining communities, Abeokuta South', 'Fajabi CDA and adjoining communities, Bode Olude, Odeda'] },

  { id: 'w1', category: 'water', status: 'done', title: 'Motorized solar-powered boreholes', summary: 'Boreholes built at:', places: ['Olomore Market, Abeokuta North', 'GRA Road, Onikolobo, Abeokuta South', 'Okungbolu Village, Ifo', 'Temidire Junction, Ibafo, Obafemi Owode'] },

  { id: 'r1', category: 'roads', status: 'done', title: 'Rehabilitation of Camp-FUNAAB Alabata Road', summary: 'Road rehabilitation in Odeda Local Government.', places: ['Odeda LG'] },
  { id: 'r2', category: 'roads', status: 'done', title: 'Construction of Akomoje-Mawuko-Opeji Road', summary: 'New road construction in Odeda Local Government.', places: ['Odeda LG'] },

  { id: 'x1', category: 'empowerment', status: 'done', title: 'Okowo Salisu: ₦50 million grant for market women', scale: '500+ women', summary: 'Cash grants for market women across Ogun Central.' },
  { id: 'x2', category: 'empowerment', status: 'done', title: 'Digital training, laptops and cash for women', summary: 'Training, laptops and cash support for women across Ogun Central.' },
  { id: 'x3', category: 'empowerment', status: 'done', title: 'Strategic empowerment for youths', summary: 'Empowerment support for youths across Ogun Central.' },

  { id: 'f1', category: 'farming', status: 'done', title: 'Aquaculture training, fertilizers and take-off grants', summary: 'Smart aquaculture and fish-production training, fertilizers for farmers, and take-off grants for selected youths.' },

  { id: 'h1', category: 'health', status: 'done', title: 'Medical outreach with Shalom Global Medicals Mission', summary: 'Free medical outreach for constituents.' },

  { id: 'g1', category: 'welfare', status: 'done', title: 'Federal Government ₦50,000 cash grants', summary: 'Facilitated the Federal Government cash grants for constituents.' },
  { id: 'g2', category: 'welfare', status: 'done', title: 'Annual Ileya festival support', summary: '720 bags of rice, 250 rams, 15 cows and cash shared every year.' },
  { id: 'g3', category: 'welfare', status: 'done', title: 'Christmas and New Year support', summary: '720 bags of rice, hampers and cash shared every year.' },
]
