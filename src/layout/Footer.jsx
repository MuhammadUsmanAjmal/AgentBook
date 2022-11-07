import React from "react";
import Image from "next/image";

// svgs
import TwitterIcon from "../../public/vectors/footerIconsSocial/Twitter.svg";
import DribbbleIcon from "../../public/vectors/footerIconsSocial/Dribbble.svg";
import InstagramIcon from "../../public/vectors/footerIconsSocial/Instagram.svg";
import YoutubeIcon from "../../public/vectors/footerIconsSocial/Youtube.svg";
import LogoIcon from "../../public/vectors/logo.svg";
import Link from "next/link";

const footerItems = [
  {
    title: "Company",
    items: [
      { title: "About", href: "/" },
      { title: "Blog", href: "/" },
      { title: "Contact", href: "/" },
      { title: "Careers We are hiring", href: "/" },
    ],
  },
  {
    title: "AgentBook",
    items: [
      { title: "Search for agent", href: "/" },
      { title: "Search for sale", href: "/" },
      { title: "FAQ", href: "/" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Articals", href: "/" },
      { title: "Guides", href: "/" },
      { title: "Real Estate", href: "/" },
      { title: "News", href: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="mainfooter">
      <div class=" footer container text-center mt-5">
        <div className="row ">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
            <Link href="/" passHref>
              <LogoIcon />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              laborum perspiciatis unde provident quia illum, iste repellat ad
              totam ullam?
            </p>

            <div className="social-icons" style={{display:'flex', justifyContent:'space-around'}}>
              <InstagramIcon />

              <DribbbleIcon />

              <TwitterIcon />

              <YoutubeIcon />
            </div>
          </div>

            {footerItems.map(({ title, items }) => (
          <div className="footerHeading col-md-4 col-lg-2 col-xl-3 mx-auto ">
              <div className="row">
                <h4 className="text-uppercase fw-bold mb-4">{title}</h4>

                <div>
                  {items.map((item) => (
                    <Link href={item.href}>
                      <h6>{item.title}</h6>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            ))}

          <hr style={{marginTop:"20px"}}></hr>

          <div className="copyright" style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p>2022 AgentBook All Rights Reserved</p>
            </div>

            <div className="terms" style={{ display: "flex",justifyContent:"space-between" }}>
              <p>Term & Conditions </p>
              <p>Privacy Policy </p>
              <p>Cookie Ploicy </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
