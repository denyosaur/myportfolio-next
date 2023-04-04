import ExternalIcon2 from '/public/icons/ExternalIcon2.svg';
import EmailIcon from '/public/icons/EmailIcon.svg';
import FacebookIcon from '/public/icons/FacebookIcon.svg';
import GithubIcon from '/public/icons/GithubIcon.svg';
import InstagramIcon from '/public/icons/InstagramIcon.svg';
import LinkedinIcon from '/public/icons/LinkedinIcon.svg';

//import { iconDictionary } from './constants';

function ContactPage({ contacts }) {
  const contactKeys = Object.keys(contacts);
  const iconToRender = {
    email: EmailIcon,
    facebook: FacebookIcon,
    github: GithubIcon,
    instagram: InstagramIcon,
    linkedin: LinkedinIcon,
  };

  return (
    <div className="flex items-end flex-col text-2xl w-80" >
      {contactKeys.map(page => {
        const IconToRender = iconToRender[page];

        return (
          <div key={page} className="mb-3">
            <a
              className="flex flex-row items-end transition duration-400 hover:opacity-60"
              href={page !== "email" ? contacts[page] : `mailto:${contacts[page]}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconToRender className="mr-2.5 mb-1" />
              {page}
              <ExternalIcon2 />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default ContactPage;
