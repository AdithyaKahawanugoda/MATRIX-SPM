import React from "react";

const AboutUsWhoAreWe = () => {
  const aboutPageData = {
    aboutStories: [
      {
        imgSrc: "https://i.ibb.co/r4DsZT0/a6cee135252495-56effd656c0f4.jpg",

        heading: "Our Story",
        contentAlign: "left",
      },
      {
        imgSrc: "https://i.ibb.co/9YyrZ1g/9c433b121645725-60ca0aa318883.jpg",

        heading: "Our Vision",
        contentAlign: "right",
      },
      {
        imgSrc:
          "https://i.ibb.co/vv8cTzd/illustrations-20111109-1237758453.png",

        heading: "How do we drive impact ?",
        contentAlign: "left",
      },
    ],
    articles: {
      heading: "Here's what people say about Expert Republic v2",
      subHeading: "Latest articles about Expert Republic",
      articleList: [
        {
          imgSrc: "/images/eResidency.png",
          content:
            "The Serw ecosystem also helps professionals to be discovered by customers worldwide. Customers can find verified experts who are credible, legitimate, and qualified in minutes.",
          heading: "Serving for the greater good v2",
          moreLink:
            "https://medium.com/e-residency-blog/serving-for-the-greater-good-a5cec4e930f",
          moreText: "Read more",
        },
        {
          imgSrc: "/images/readme.png",
          content:
            "Serw offers business continuity to these professionals with a platform that not only handles video calls but also other aspects such as managing appointments and accepting payments digitally.",
          heading:
            "The app by Rootcode Labs enabling professionals to adapt to COVID-19",
          moreLink: "https://www.readme.lk/serw-rootcode-labs/",
          moreText: "Read more",
        },
        {
          imgSrc: "/images/eResidency.png",
          content:
            "The Serw ecosystem also helps professionals to be discovered by customers worldwide. Customers can find verified experts who are credible, legitimate, and qualified in minutes.",
          heading: "Serving for the greater good",
          moreLink:
            "https://medium.com/e-residency-blog/serving-for-the-greater-good-a5cec4e930f",
          moreText: "Read more",
        },
        {
          imgSrc: "/images/readme.png",
          content:
            "Serw offers business continuity to these professionals with a platform that not only handles video calls but also other aspects such as managing appointments and accepting payments digitally.",
          heading:
            "The app by Rootcode Labs enabling professionals to adapt to COVID-19",
          moreLink: "https://www.readme.lk/serw-rootcode-labs/",
          moreText: "Read more",
        },
      ],
    },
  };

  return (
    <div>
      {aboutPageData?.aboutStories?.map((story, index) => {
        return (
          <div key={index} className="lg:mb-16">
            {(index + 1) % 2 === 0 && (
              <div className="p-3 flex flex-col lg:flex-row justify-around">
                <div class="mt-10 m-auto mb-3 w-2/4 flex justify-center">
                  <img
                    className=" align-middle text-right rounded-lg"
                    src={story.imgSrc}
                    alt="About us"
                    width="100%"
                    height="100%"
                    border="0"
                    className="object-contain rounded"
                  />
                </div>
                <div className="p-3 items-center m-auto lg:pl-20 lg:w-1/2">
                  <div className="text-center mb-3 lg:text-left lg:text-5xl font-semibold font-medievalFont">
                    {story.heading || ""}
                  </div>
                  <div>Content here</div>
                </div>
              </div>
            )}
            {(index + 1) % 2 === 1 && (
              <div className="p-3 flex flex-col-reverse lg:flex-row justify-around ">
                <div className={`p-3 lg:pr-20 m-auto items-center lg:w-1/3`}>
                  <div className="text-center mb-3 lg:text-left lg:text-5xl font-semibold font-medievalFont">
                    {story.heading || ""}
                  </div>
                  <div>Content here</div>
                </div>
                {story.content?.length < 3 ? (
                  <div class="mt-10 m-auto mb-3 w-2/4 flex justify-center">
                    <img
                      className="m-0 rounded-lg"
                      src={story.imgSrc}
                      alt="About us"
                      width="80%"
                      height="80%"
                      border="0"
                      className="object-contain rounded"
                    />
                  </div>
                ) : (
                  <div className="sm:hidden lg:block p-0 m-auto w-1/2">
                    <img
                      className="m-0 rounded-lg"
                      src={story.imgSrc}
                      alt="About us"
                      width="100%"
                      height="100%"
                      border="0"
                      className="object-contain rounded"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AboutUsWhoAreWe;
