import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  YouTube,
  LinkedIn,
  Instagram,
} from "../../svg/social-media";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  const footer = {
    footerSocialLinks: [
      { platform: "facebook", link: "https://www.facebook.com/Apurupoth/" },
      { platform: "twitter", link: "https://www.instagram.com/" },
      { platform: "youtube", link: "https://www.youtube.com/" },
      { platform: "linkedin", link: "https://lk.linkedin.com/" },
      { platform: "instagram", link: "https://www.instagram.com/" },
    ],
    footerSitemapLinks: [
      { labelName: "About", path: "/about" },
      { labelName: "Newsletter", path: "/newsletter" },
      { labelName: "Support", path: "/support" },
    ],
  };

  return (
    <>
      <Grid container spacing={1} className=" lg:px-32 md:px-10 sm:px-4">
        <Grid item xs={12} sm={6} md={9}>
          <div className=" ">
            <div>Apuru Poth</div>
            <Grid item xs={12} sm={11} md={6}>
              <div className=" ">
                “Sometimes, you read a book and it fills you with this weird
                evangelical zeal, and you become convinced that the shattered
                world will never be put back together unless and until all
                living humans read the book.” ― John Green, The Fault in Our
                Stars
              </div>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className=" ">
            {footer.footerSitemapLinks?.map((item, index) => {
              return (
                <div key={index} className="text-md mb-3">
                  <Link to={item.path}>{item.labelName}</Link>
                </div>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="">
            <hr />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className=" ">
            <div className="lg:flex justify-between">
              <div>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </div>
              <div>
                <Link to="/privacy">Privacy Policy</Link>
              </div>
              <div>
                <Link to="#">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div className=" "></div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className=" ">
            <div className="md:ml-4 md:w-1/4 lg:w-1/5">
              <Link to="/">
                <div className="cursor-pointer inline-block">
                  <img
                    src="https://i.ibb.co/kMQVNLj/Logo-1-2-1.png"
                    alt="apuru-poth-logo"
                    height="90"
                    width="90"
                  />
                </div>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className=" ">Copyright &copy; MATRIX-Apuru Poth 2021</div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div className=" "></div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className=" ">
            <div className="mt-1 flex md:w-1/4 lg:w-1/5">
              {footer?.footerSocialLinks?.map((item) => {
                return (
                  <a
                    target="_blank"
                    href={item.link}
                    className="mr-4 hover:opacity-75"
                    rel="noreferrer"
                    key={item.link}
                  >
                    {item.platform === "facebook" && <Facebook />}
                    {item.platform === "twitter" && <Twitter />}
                    {item.platform === "youtube" && <YouTube />}
                    {item.platform === "linkedin" && <LinkedIn />}
                    {item.platform === "instagram" && <Instagram />}
                  </a>
                );
              })}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
