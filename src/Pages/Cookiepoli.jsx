import React from 'react';
import './Cookiepoli.css';

const CookiePolicy = () => {
  const lastUpdated = "May 15, 2023";
  
  return (
    <div className="legal-page cookie-policy">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1>Cookie Policy</h1>
          <p>Last Updated: {lastUpdated}</p>
        </div>
      </section>
      
      <section className="legal-content">
        <div className="legal-container">
          <div className="legal-section">
            <h2>1. Introduction</h2>
            <p>This Cookie Policy explains how RideRoute ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website and use our services. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
            <p>Please read this policy carefully to understand how we use cookies and the options you have to manage them.</p>
          </div>
          
          <div className="legal-section">
            <h2>2. What Are Cookies?</h2>
            <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
            <p>Cookies set by the website owner (in this case, RideRoute) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>
          </div>
          
          <div className="legal-section">
            <h2>3. Why Do We Use Cookies?</h2>
            <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.</p>
            
            <h3>3.1 Essential Cookies</h3>
            <p>These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our website functions.</p>
            
            <h3>3.2 Performance and Functionality Cookies</h3>
            <p>These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</p>
            
            <h3>3.3 Analytics and Customization Cookies</h3>
            <p>These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</p>
            
            <h3>3.4 Advertising Cookies</h3>
            <p>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</p>
            
            <h3>3.5 Social Media Cookies</h3>
            <p>These cookies are used to enable you to share pages and content that you find interesting on our website through third-party social networking and other websites. These cookies may also be used for advertising purposes.</p>
          </div>
          
          <div className="legal-section">
            <h2>4. How Can You Control Cookies?</h2>
            <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.</p>
            <p>You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.</p>
            <p>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com</a>.</p>
          </div>
          
          <div className="legal-section">
            <h2>5. Types of Cookies We Use</h2>
            <p>The specific types of first and third-party cookies served through our website and the purposes they perform are described below:</p>
            
            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Source</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_session</td>
                  <td>RideRoute</td>
                  <td>Used to maintain your session while you use our services</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>_auth</td>
                  <td>RideRoute</td>
                  <td>Used to authenticate logged-in users</td>
                  <td>30 days</td>
                </tr>
                <tr>
                  <td>_preferences</td>
                  <td>RideRoute</td>
                  <td>Stores your preferences for site functionality</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics</td>
                  <td>Used to distinguish users for analytics purposes</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_fbp</td>
                  <td>Facebook</td>
                  <td>Used by Facebook to deliver advertisements</td>
                  <td>90 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="legal-section">
            <h2>6. Updates to This Cookie Policy</h2>
            <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
            <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>
          </div>
          
          <div className="legal-section">
            <h2>7. Contact Us</h2>
            <p>If you have any questions about our use of cookies or other technologies, please contact us at:</p>
            <p>Email: privacy@rideroute.com</p>
            <p>Address: 123 Transport Avenue, New York, NY 10001</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
