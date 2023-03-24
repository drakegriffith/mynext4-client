import {
  Notes,
  CalendarStats,
  Gauge,
  PresentationAnalytics,
  FileAnalytics,
  Adjustments,
  Lock,
  Search
} from 'tabler-icons-react';


const navbarLinkTree = [
    {
      label: 'Overview',
      icon: Notes,
      initiallyOpened: false,
      links: [
        { label: 'Why MyNext4?', link: './WhyMyNext4' },
        { label: 'About Us', link: './WhyMyNext4' },
        { label: "Resource Library", link: '/MNFLibrary' },
        { label: 'Pricing', link: './Pricing' },
  
      ],
    },
    
    {
      label: 'Products',
      icon: Notes,
      initiallyOpened: false,
      links: [
        { label: 'MyNext4 U: Student Components', link: './WhyMyNext4' },
        { label: 'MyNext4 X: Counselor Components', link: '/AboutUs' },
   
  
      ],
    },
    {
      label: 'School Systems',
      icon: Notes,
      initiallyOpened: false,
      links: [
        { label: 'Showcase', link: './WhyMyNext4' },
        { label: 'Getting Started', link: '/SchoolSystems' },
        { label: 'Privacy Policy', link: '/MNFComponents' },
  
      ],
    }, 
   
   
    {
      label: 'Docs',
      icon: Notes,
      initiallyOpened: false,
      links: [
        { label: 'MyNext4 U', link: '/' },
        { label: 'MyNext4 X', link: '/' },
      ],
    },
 ];

 export default navbarLinkTree;