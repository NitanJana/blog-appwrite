import { BrandLogo, FooterItem, SocialBtn } from '../index';
import { facebook, twitter, instagram } from '../../assets';

const Footer = () => {
  const footerItems = [
    {
      name: 'Privacy Policy',
      url: '#',
    },
    {
      name: 'Terms of Service',
      url: '#',
    },
    {
      name: 'Return Policy',
      url: '#',
    },
    {
      name: 'Contact Us',
      url: '#',
    },
  ];

  const socialButtons = [
    {
      name: 'Facebook',
      image: facebook,
      url: '#',
    },
    {
      name: 'Twitter',
      image: twitter,
      url: '#',
    },
    {
      name: 'Instagram',
      image: instagram,
      url: '#',
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="p-8">
      <section className="relative overflow-hidden p-8">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap items-center justify-between">
            <div className="w-auto p-8">
              {/* TODO: use Link instead of a tag */}
              <a href="#">
                <div className="inline-flex items-center gap-x-4 p-2">
                  <BrandLogo width="50px" />
                  <span className="text-lg font-bold">Blog</span>
                </div>
              </a>
            </div>
            <div className="w-auto p-8">
              <ul className="-m-5 flex flex-wrap items-center">
                {footerItems.map((item) => (
                  <FooterItem key={item.name} name={item.name} url={item.url} />
                ))}
              </ul>
            </div>
            <div className="w-auto p-8">
              <div className="-m-1.5 flex flex-wrap">
                {socialButtons.map((item) => (
                  <SocialBtn key={item.name} name={item.name} image={item.image} url={item.url} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-4" />
      <section className="flex justify-start p-8 md:justify-center">
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">
            © {year}{' '}
            <a
              href="https://github.com/nitanjana"
              target="_blank"
              className="text-gray-600 underline underline-offset-4 hover:text-black"
            >
              Nitan Jana
            </a>
            . All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
