import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/hungxtran',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://stackoverflow.com/users/14014805/hung-x-tran',
    label: 'StackOverflow',
    icon: faStackOverflow,
  },
  {
    link: 'https://www.linkedin.com/in/hung-tran-xuan-4416451b4',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:contact@hungxtran.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
