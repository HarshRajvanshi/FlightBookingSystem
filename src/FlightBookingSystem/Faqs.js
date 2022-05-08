import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar.js";
import Faq from "./Faq.js";

import "./FaqStyle.css";

function Faqs() {
  const [faqs, setfaqs] = useState([
    {
      question:
        "How many passengers can I book online? Which flights are available in this booking?",
      answer:
        "You can book a maximum of 6 seats in one transaction (including adults, children and infants with seats). Online flight booking currently is available for international and domestic flights. City name is listed in the From / To selection box.",
      open: false,
    },

    {
      question:
        "Do we have to pay for the ticket at the time of booking process?",
      answer:
        "If you choose payment by credit card, you will be prompt for payment immediately. If you choose to pay later, your reservation lead time for issue of ticket is 24 hours after complete of reservation.",
      open: false,
    },

    {
      question: "What is Reservation Code used for?",
      answer:
        "Reservation Code is a 6-letter code (e.g. ZEQSQE). It can be used for retrieval of your itinerary in www.virtuallythere.com.sg. It is provided at the last stage of your booking and shown on your itinerary.",
      open: false,
    },

    {
      question: "What is an E-ticket and how do I use after I purchase?",
      answer:
        "An E-ticket, or electronic ticket, represents your reservation for a flight, but is not in a paper format. You will be supplied a Reservation Code and E ticket number as your proof of purchase. With an E-ticket, your name and flight details will be in the airlines computer. An E-ticket is NOT a boarding pass. You will still have to check-in to receive your boarding pass. All tickets purchased online are issued as electronic tickets will be sent to your registered email. If you don’t receive your E-ticket Receipt within 2 hours after purchase, please contact us for supports. PLEASE NOTE: Some airlines regulations require you to present a printed receipt of your E-ticket purchase in order to receive a boarding pass. Please be certain to print your confirmation details page or your confirmation email and bring it with you to the airport.",
      open: false,
    },
    {
      question: 'Are taxes and fees included in the price shown?',
      answer: 'Taxes and fees, which may represent a significant portion of the cost of air travel are either included in the fare or shown separately in the "TAX" box(es) of the ticket(s). Our price shown here is includes taxes and fees which are imposed on air transportation by relevant authorities.',
      open: false,
    },
    {
      question: 'If the name printed on my E ticket is different than my Passport, will I still be able to fly?',
      answer: 'You should ensure that the name you provide when you book your travel matches your ID or passport name you will use when traveling.',
      open: false,
    },
    {
      question: 'How do I make a change to my online booking or tickets booked online?',
      answer: 'For changes to an existing booking, including rerouting and change of flight date or time, please contact us. Telephone: 0123456789, email: support@kingflyer.com',
      open: false,
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

  return (
    <>
      <div className="bla">
        <Navbar />
      </div>
      <br />
      <br />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>



    </>
  );
}

export default Faqs