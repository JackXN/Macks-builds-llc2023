import { BiHardHat } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import {IoMdGitNetwork} from 'react-icons/io';
import{RiBuilding2Fill as Building} from 'react-icons/ri'; 
import {GiFloorPolisher as Flooring} from 'react-icons/gi';
import {MdBalcony as Balcony} from 'react-icons/md';
import {RiPaintBrushFill as Paint} from 'react-icons/ri';
import {GiSpikedFence as Fence} from 'react-icons/gi';
const data = [ 
  {
    id: 1,
    title: "Remodeling & Renovation",
    description: "Transform your living space with our remodeling and renovation services. From kitchen and bathroom upgrades to room additions, we provide expert craftsmanship and attention to detail.",
    icon: <Building />,
    animation: 'fadeIn',
    color:'white'
  },
  {
    id: 3,
    title: "Painting & Drywall",
    description: "Add a fresh look to your home with our painting and finishing services. Our team provides professional interior and exterior painting, along with precise finishing touches.",
    icon: <Paint/>,
    animation: 'fadeIn',
    color:'white'
},
{
  id: 4,
  title: 'Flooring Services',
  description: 'Enhance the aesthetics and comfort of your home with our flooring services. We offer a wide range of options, including hardwood, tile, carpet, and laminate flooring installations.',
icon: <Flooring/>,
color: 'white',
  
},
{
  id: 5,
  title: 'Deck & Patio Construction',
  description: 'Create an inviting outdoor space with our deck and patio construction services. We design and build custom decks and patios that enhance your homes functionality and curb appeal.',
icon: <Balcony/>,
color: 'white'
  
},
// {
//   id: 6,
//   title: 'Fence & Gate Installation',
//   description: 'Secure your property and enhance privacy with our fencing and gate installation services. We offer a variety of styles and materials to meet your specific needs.',
// icon: <Fence/>,
// color: 'brown',
  
// },

];

export default data;