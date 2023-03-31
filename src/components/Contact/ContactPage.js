import ExternalIcon2 from '/public/icons/ExternalIcon2.svg';
import { iconDictionary } from './constants';

function ContactPage({ contacts }) {
  const contactKeys = Object.keys(contacts);

  return (
    <div className="flex items-end flex-col font-thin text-2xl w-80" >
      {contactKeys.map(page => {
        const IconToRender = iconDictionary[page];

        return (
          <div key={page} className="mb-3">
            <a
              className="flex flex-row items-end"
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
