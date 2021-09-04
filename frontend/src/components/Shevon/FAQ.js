import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

const FAQ = () => {
  const data = [
    {
      category: "General FAQ",
      faq: [
        {
          question: "What is Bookshop.org?",
          answer:
            "Bookshop is an online bookstore with a mission to financially support local, independent bookstores.We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime. They’re also anchors for our downtowns and communitie.As more and more people buy their books online, we wanted to create an easy, convenient way for you to get your books and support bookstores at the same time.",
        },
        {
          question: "Is Bookshop a physical bookstore?",
          answer:
            "Bookshop.org itself is not a physical store and does not purchase, print, publish, or warehouse books. Bookshop.org acts as a purveyor of new books (distributed solely through Ingram) by linking online shoppers with their favorite local vendors in order to traffic book profits toward indie booksellers with their preservation in mind. If you have a specific book store you would like to support, we recommend using our Bookstore Finder to find their affiliate/book store page on our website. If you order through the site using their specific portal, all proceeds will go straight to their store instead of the general pool that is split up evenly among all Bookshop.org registered bookstores. Since Bookshop.org is not a physical bookstore, Bookshop cannot feature in-store / curbside pickup options. If you are looking for in-store or curbside pickup options we suggest you get in touch with your local bookstore directly to inquire if they have those ordering options available.",
        },
        {
          question: "Do you sell audiobooks and / or ebooks?",
          answer:
            "Both ebooks and audiobooks are available via distribution partnerships with Hummingbird / My Must Reads (ebooks) and Libro.FM (audiobooks). When available, you can see both ebook and audiobook links on any book product page.",
        },
      ],
    },
    {
      category: "Shipping and Delivery FAQ",
      faq: [
        {
          question: "Where is my order?",
          answer:
            "Once your order has shipped, you can track it using the shipping information included on your order detail page. The order detail page is accessible by the link in your order confirmation email or via your user account order records.",
        },
        {
          question: " How long will it take for me to receive my order?",
          answer:
            "Due to the COVID-19 crisis, shipping is delayed. To ensure worker safety, our fulfillment partner Ingram has implemented safety protocols that have increased processing time by 72 hours. We have also seen an increase in ship times for USPS and UPS. We thank you for your patience and understanding during these difficult times. Current delivery times range from",
        },
      ],
    },
    {
      category: "Faulty Order FAQ",
      faq: [
        {
          question:
            "What do I do if I’ve received a damaged or misprinted item?",
          answer:
            "If you’ve received a damaged or misprinted item you are entitled to either a replacement, refund, or store credit. Please reach out to the customer service team to discuss options and protocol. If possible, always include a photo of the damage / printing error for our records.",
        },
        {
          question: "I received an incorrect item. What do I do?",
          answer:
            "From time to time a human error results in an order with the wrong books in it! If you’ve received wrong items, please reach out to the customer service team to request either a resend or a refund of your order. Please include a picture of the incorrect items if at all possible and feel free to keep or donate them as you like.",
        },
      ],
    },
    {
      category: "Order Adjustment / Cancellation FAQ",
      faq: [
        {
          question: "Can I cancel or change my whole order?",
          answer:
            "Currently, we are unable to cancel or adjust an order once it has been placed. We are currently working on solutions that should allow for greater flexibility for order adjustments and cancellations in the near future.",
        },
        {
          question:
            "I accidentally ordered two copies of a book. Can I return one?",
          answer:
            "Please be sure to include your return slip (indicated on the bottom of your paper receipt) and write your purchase order number on the first line of the return address. Once you ship your return, please reach out to us through our customer service form, so we can initiate your refund.",
        },
      ],
    },
    {
      category: "Billing FAQ",
      faq: [
        {
          question: "What do I do if I was overcharged for my order?",
          answer:
            "Please get in touch with us about this overcharge by filling out our Contact Us form. Be sure to include your purchase order number so we can locate your order quickly. We will inform our development department of this bug and refund the difference back to your card immediately.",
        },
        {
          question: "What do I do if I was undercharged for my order?",
          answer:
            "We won’t charge you for the discrepancy since the billing error occurred on our end. Please get in touch with us about the discrepancy through our Contact Us form, so we can inform our development department of the bug.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="mt-4 mx-16 py-6 px-10 rounded-xl  border-0  shadow-md bg-blueSapphire bg-opacity-10">
        <h6 className="ml-4 mt-2 mb-2 font-black text-3xl">FAQ</h6>
        <hr />
        <div className=" py-6">
          {data.map(({ category, faq }) => (
            <Accordion
              style={{
                backgroundColor: "#6D7B8D",
                borderRadius: "50px  50px 0px 0px",
              }}
              className="mt-2"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white mr-4 " />}
                aria-controls="panel1a-content"
                style={{ backgroundColor: "", borderRadius: "50px" }}
                className="border-0"
              >
                <div
                  variant="h6 "
                  className="py-4 text-white pl-4 text-xl font-black font-thinKidFont"
                >
                  {category}
                </div>
              </AccordionSummary>
              <Divider />

              <AccordionDetails className="bg-white ">
                <List
                  component="nav"
                  aria-label="mailbox folders"
                  style={{ width: "100%", height: "300px" }}
                  className="overflow-y-auto  "
                >
                  {faq.map((item, index) => (
                    <>
                      <ListItem
                        className="overflow-y-auto "
                        style={{ height: "150px" }}
                        key={index}
                      >
                        <ListItemText
                          style={{
                            color: "black",
                            fontWeight: "bold",
                          }}
                          secondary={item.answer}
                          primary={item.question}
                        ></ListItemText>
                      </ListItem>

                      <Divider />
                    </>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
