import WorkIcon from '@mui/icons-material/Work';
import ScienceIcon from '@mui/icons-material/Science';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export const experiences = [
   {
      id: 1,
      role: 'Research Intern',
      company: 'Bangladesh Rice Research Institute (BRRI)',
      category: 'Intern',
      period: 'Jan 2023 - Apr 2023',
      location: 'Gazipur, Bangladesh',
      description: 'Assisted in field trials for new rice varieties. Collected data on plant height, tiller number, and yield components.',
      responsibilities: [
         'Collected data on plant height, tiller number, and yield components',
         'Monitored field trials and recorded growth parameters',
         'Assisted senior researchers in data analysis'
      ],
      skills: ['Field Research', 'Data Collection', 'Rice Cultivation', 'Statistical Analysis'],
      gallery: ['/sample-work.png'],
      icon: WorkIcon,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      borderColor: 'border-blue-200 dark:border-blue-800'
   },
   {
      id: 2,
      role: 'Research Assistant',
      company: 'Plant Eco-Physiology & Phytochemistry Lab, BAU',
      category: 'Research Assistant',
      period: 'April 2023 - Sep 2023',
      location: 'Bangladesh Agricultural University',
      description: 'Research assistance focusing on plant eco-physiology and phytochemistry experiments across multiple environments.',
      responsibilities: [
         'Management of experiments in different conditions (Field, Hydroponics, Greenhouse)',
         'Data collection (physiological and morphological parameters)',
         'Biochemical analysis of plant samples',
         'Data analysis and writing research reports'
      ],
      skills: ['Plant Physiology', 'Biochemical Analysis', 'Data Analysis', 'Research Methodology'],
      gallery: [],
      icon: ScienceIcon,
      color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
      borderColor: 'border-green-200 dark:border-green-800'
   },
   {
      id: 3,
      role: 'BAU Branch President',
      company: 'Green Voice',
      category: 'Volunteer',
      period: 'September 2019 - 2023',
      location: 'Bangladesh Agricultural University',
      description: 'A nationwide youth environmentalist organization seeking to preserve ecological, social, and cultural environments.',
      responsibilities: [
         'Led over 100 team members in organizing various programs',
         'Organized tree plantations, blood donation, and relief efforts',
         'Conducted climate change seminars and environmental Olympiads',
         'Coordinated nationwide environmental awareness campaigns'
      ],
      skills: ['Leadership', 'Environmental Conservation', 'Team Management', 'Event Planning'],
      gallery: [],
      icon: VolunteerActivismIcon,
      color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
      borderColor: 'border-green-200 dark:border-green-800'
   },
   {
      id: 4,
      role: 'Social Awareness Volunteer',
      company: 'UNICEF',
      category: 'Volunteer',
      period: 'April - December 2020',
      location: 'Bangladesh',
      description: 'During COVID-19 pandemic, worked as volunteer in social awareness campaigns both remote and field level.',
      responsibilities: [
         'Conducted remote and field-level awareness campaigns',
         'Distributed health and safety information during pandemic',
         'Coordinated with local communities for COVID-19 response',
         'Supported vulnerable populations during crisis'
      ],
      skills: ['Crisis Management', 'Community Outreach', 'Public Health', 'Communication'],
      gallery: [],
      icon: VolunteerActivismIcon,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      borderColor: 'border-blue-200 dark:border-blue-800'
   },
   {
      id: 5,
      role: 'Founding Member & General Secretary',
      company: 'Team Utshob',
      category: 'Volunteer',
      period: '2020 - 2024',
      location: 'Bangladesh',
      description: 'An organization celebrating life through seasonal and traditional agriculture festivals, encouraging youth to follow their culture.',
      responsibilities: [
         'Served as founding member and general secretary',
         'Organized seasonal and traditional agriculture festivals',
         'Encouraged youth participation in cultural activities',
         'Promoted traditional agricultural practices among young generation'
      ],
      skills: ['Cultural Management', 'Youth Engagement', 'Festival Organization', 'Traditional Agriculture'],
      gallery: [],
      icon: VolunteerActivismIcon,
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
      borderColor: 'border-orange-200 dark:border-orange-800'
   },
   {
      id: 6,
      role: 'Publication Officer',
      company: 'HULT Prize of BAU',
      category: 'Volunteer',
      period: '2021 - 2022',
      location: 'Bangladesh Agricultural University',
      description: 'The HULT Prize Foundation, a global learning platform seeking emerging entrepreneurs at BAU.',
      responsibilities: [
         'Served as OC member and publication officer',
         'Managed communications and publications for the committee',
         'Promoted entrepreneurship among BAU students',
         'Coordinated with global HULT Prize Foundation'
      ],
      skills: ['Publication Management', 'Entrepreneurship', 'Communication', 'Event Coordination'],
      gallery: [],
      icon: BusinessCenterIcon,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
      borderColor: 'border-purple-200 dark:border-purple-800'
   },
   {
      id: 7,
      role: 'Coordinator',
      company: 'Bonhishikha (Light of Flame)',
      category: 'Volunteer',
      period: '2022',
      location: 'Bangladesh (16 Districts)',
      description: 'A national organization devoted to women\'s and children\'s rights, making girls self-dependent by growing self-confidence.',
      responsibilities: [
         'Led 18 self-defense training programs as coordinator',
         'Covered 16 districts across Bangladesh',
         'Trained over 5000 females in self-defense',
         'Promoted women\'s empowerment and self-confidence'
      ],
      skills: ['Women Empowerment', 'Training & Development', 'Self-Defense', 'Social Impact'],
      gallery: [],
      icon: VolunteerActivismIcon,
      color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
      borderColor: 'border-pink-200 dark:border-pink-800'
   },
   {
      id: 8,
      role: 'Secretary of Event Management',
      company: 'Literature Club of BAU',
      category: 'Volunteer',
      period: '2022 - 2023',
      location: 'Bangladesh Agricultural University',
      description: 'Organized literary and cultural events engaging students from BAU and other institutions.',
      responsibilities: [
         'Served as secretary of event management',
         'Arranged several programs successfully',
         'Engaged students from BAU and other institutions',
         'Promoted literary and cultural activities'
      ],
      skills: ['Event Management', 'Literature', 'Student Engagement', 'Cultural Activities'],
      gallery: [],
      icon: VolunteerActivismIcon,
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
      borderColor: 'border-indigo-200 dark:border-indigo-800'
   },
   {
      id: 9,
      role: 'Greenhouse Intern',
      company: 'Advanced Horticulture Research Center',
      category: 'Intern',
      period: 'Sep 2022 - Nov 2022',
      location: 'Dhaka, Bangladesh',
      description: 'Worked on controlled environment agriculture and hydroponic systems for vegetable production.',
      responsibilities: [
         'Managed hydroponic nutrient solutions',
         'Monitored greenhouse climate control systems',
         'Conducted crop health assessments'
      ],
      skills: ['Hydroponics', 'Greenhouse Management', 'Climate Control', 'Crop Monitoring'],
      gallery: [],
      icon: BusinessCenterIcon,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
      borderColor: 'border-purple-200 dark:border-purple-800'
   },
   {
      id: 10,
      role: 'Enumerator',
      company: 'Innovations for Poverty Action (IPA)',
      category: 'Other',
      period: 'Jun 2020 - Dec 2022',
      location: 'Dhaka, Bangladesh',
      description: 'Conducted field surveys and interviews for poverty alleviation research projects.',
      responsibilities: [
         'Taking interviews of respondents in field settings',
         'Making and designing questionnaires',
         'Data collection and quality assurance',
         'Coordinating with research teams'
      ],
      skills: ['Survey Research', 'Data Collection', 'Questionnaire Design', 'Interview Techniques'],
      gallery: [],
      icon: BusinessCenterIcon,
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
      borderColor: 'border-teal-200 dark:border-teal-800'
   },
   {
      id: 11,
      role: 'Announcer',
      company: 'Bangladesh Betar, Mymensingh',
      category: 'Other',
      period: 'Feb 2020 - Present',
      location: 'Mymensingh, Bangladesh',
      description: 'Radio announcer and program host at Bangladesh Betar (National Broadcasting Service).',
      responsibilities: [
         'Program hosting and live broadcasting',
         'Script writing for radio programs',
         'Voice recording and audio production',
         'Engaging with listeners and community'
      ],
      skills: ['Broadcasting', 'Script Writing', 'Public Speaking', 'Voice Modulation'],
      gallery: [],
      icon: BusinessCenterIcon,
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
      borderColor: 'border-rose-200 dark:border-rose-800'
   }
];
