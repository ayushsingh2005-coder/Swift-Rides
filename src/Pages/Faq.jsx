import React, { useState } from 'react';
import './Faq.css';

const Faq= () => {
  // FAQ data structure
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is RideRoute?",
          answer: "RideRoute is a platform that helps travelers find and compare transportation options for their journeys. We aggregate data from various transportation providers to offer a comprehensive view of available routes, prices, and schedules."
        },
        {
          question: "How does RideRoute work?",
          answer: "Simply enter your starting point and destination, and RideRoute will show you all available transportation options, including buses, trains, planes, and more. You can filter and sort the results based on your preferences to find the perfect route for your journey."
        },
        {
          question: "Is RideRoute free to use?",
          answer: "Yes, RideRoute is completely free to use for travelers. We earn commissions from transportation providers when you book through our platform."
        },
        {
          question: "Does RideRoute operate in all countries?",
          answer: "We currently operate in over 50 countries worldwide and are continuously expanding our coverage. If your country isn't currently covered, please check back soon as we're constantly adding new regions."
        }
      ]
    },
    {
      title: "Bookings & Tickets",
      faqs: [
        {
          question: "How do I book a trip through RideRoute?",
          answer: "After finding your preferred route, simply click the 'Book Now' button, which will either direct you to the transportation provider's website or allow you to complete the booking directly on our platform."
        },
        {
          question: "Can I cancel or change my booking?",
          answer: "Cancellation and change policies depend on the transportation provider. You can find the specific policies for your booking before you complete the purchase. If you need to cancel or change your booking, you can do so through the 'My Trips' section on our platform or directly with the provider."
        },
        {
          question: "How do I get my tickets after booking?",
          answer: "Once your booking is confirmed, you'll receive your tickets via email. You can also access your tickets through the 'My Trips' section on our website or app."
        },
        {
          question: "Are there any booking fees?",
          answer: "RideRoute does not charge any booking fees. The price you see is the final price you'll pay. However, some transportation providers may include their own service fees in the displayed price."
        }
      ]
    },
    {
      title: "Payment & Refunds",
      faqs: [
        {
          question: "What payment methods are accepted?",
          answer: "We accept all major credit and debit cards, PayPal, and in some regions, Apple Pay and Google Pay."
        },
        {
          question: "Are my payment details secure?",
          answer: "Yes, we use industry-standard encryption to protect your payment information. Your card details are never stored on our servers."
        },
        {
          question: "How do I request a refund?",
          answer: "If you're eligible for a refund according to the provider's cancellation policy, you can request it through the 'My Trips' section on our platform. The refund process and timeline vary by provider."
        },
        {
          question: "How long do refunds take to process?",
          answer: "Refunds typically take 3-10 business days to appear in your account, depending on your bank or credit card company."
        }
      ]
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "The website/app isn't working correctly. What should I do?",
          answer: "Try clearing your browser cache or updating the app to the latest version. If the issue persists, please contact our support team with details about the problem you're experiencing."
        },
        {
          question: "I've forgotten my password. How do I reset it?",
          answer: "Click on the 'Login' button and then select 'Forgot Password'. Follow the instructions sent to your email to reset your password."
        },
        {
          question: "How do I update my account information?",
          answer: "You can update your account information in the 'My Account' section after logging in."
        },
        {
          question: "Is there a mobile app available?",
          answer: "Yes, we have mobile apps available for both iOS and Android devices. You can download them from the App Store or Google Play Store."
        }
      ]
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaqs, setOpenFaqs] = useState({});
  
  const toggleFaq = (categoryIndex, faqIndex) => {
    setOpenFaqs(prev => {
      const key = `${categoryIndex}-${faqIndex}`;
      return { ...prev, [key]: !prev[key] };
    });
  };
  
  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about RideRoute</p>
        </div>
      </section>
      
      <section className="faq-search-section">
        <div className="faq-search-container">
          <h2>How can we help you?</h2>
          <div className="faq-search">
            <input type="text" placeholder="Search for answers..." />
            <button>Search</button>
          </div>
        </div>
      </section>
      
      <section className="faq-content">
        <div className="faq-container">
          <div className="faq-sidebar">
            <h3>Categories</h3>
            <ul className="category-list">
              {faqCategories.map((category, index) => (
                <li 
                  key={index} 
                  className={activeCategory === index ? 'active' : ''}
                  onClick={() => setActiveCategory(index)}
                >
                  {category.title}
                </li>
              ))}
            </ul>
            
            <div className="still-need-help">
              <h4>Still Need Help?</h4>
              <p>If you can't find what you're looking for, please contact our support team.</p>
              <button className="contact-support-btn">Contact Support</button>
            </div>
          </div>
          
          <div className="faq-main">
            <h2>{faqCategories[activeCategory].title}</h2>
            <div className="faq-list">
              {faqCategories[activeCategory].faqs.map((faq, faqIndex) => (
                <div 
                  key={faqIndex} 
                  className={`faq-item ${openFaqs[`${activeCategory}-${faqIndex}`] ? 'open' : ''}`}
                >
                  <div 
                    className="faq-question"
                    onClick={() => toggleFaq(activeCategory, faqIndex)}
                  >
                    <h3>{faq.question}</h3>
                    <span className="toggle-icon">
                      {openFaqs[`${activeCategory}-${faqIndex}`] ? '−' : '+'}
                    </span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;