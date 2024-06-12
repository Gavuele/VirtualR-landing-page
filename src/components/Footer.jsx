import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-center">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-center">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-center">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
