import React, { useEffect } from 'react';
import './styles.styl';

const Policy = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main className="text">
      <div className="text__Paragraph">
        <h1 className="text__Paragraph--Title">privacy policy of news inc</h1>
        <br />
        <h3 className="text__Paragraph--Subtitle">
          <p>Written by Masters INC</p>
          <p>Updated October 27, 2020</p>
        </h3>
        <p>
					This privacy policy tells you how News INC collects, uses and protects
					data related to you in connection with our service, as well as your
					choices regarding our collection and use of this data.
        </p>
        <p>
          <h2>introduction</h2>
          <p>
						Joint vision. News INC offers a platform in which users can log in
						through a user account associated with their email address and a
						password, in order to create profiles and thus be able to
						participate in the platform by making comments and publicly
						announcing opinions or reactions in an interactive way. regarding
						the news published on the platform.
          </p>
          <p>
						Applicability WEB sites and third-party services, this privacy
						policy only applies to the data that we collect when using the
						service, when making comments, reading them or entering our WEB
						site, it does not apply to any website that uses the service or
						other WEB site linked from the service. There is no responsibility
						for the practices employed by the WEB sites linked to or from the
						service, including the associated sites. Remember that when you use
						a link to go from the Service to another website, our Privacy Policy
						no longer applies, nor does it apply to the Partner's Site on which
						you are commenting. Your browsing activity and interaction with any
						other website, including those that are linked from the Service, are
						subject to the privacy policy of that website.
          </p>
        </p>
        <p>
          <h2>data we collect about you</h2>
          <p>
						Personal data refers to any type of information that identifies you
						as a person, does not include anonymous data, then the data we will
						collect will be listed by category:
          </p>
          <p>
						Identity data: includes Name, Surname, username or alias, date of
						birth, email address, telephone number and postal address.
          </p>
          <p>
						No technical data will be collected or used, such as the IP address
						of the equipment, nor will Cookies be used in your browser to obtain
						data from your equipment.
          </p>
          <p>
						We also do not require demographic data or intimate or personal data
						such as religion, sexual orientation or political opinions.
          </p>
        </p>
        <p>
          <h2>how is your personal data collected?</h2>
          <p>
						Basically, your data will only be required once when registering on
						our website to define your identifying username and password.
          </p>
        </p>
        <p>
          <h2>what is your information collected for?</h2>
          <p>
						Our platform was not developed for commercial or advertising
						purposes, so we do not use your information to profit, much less
						share or sell it to third parties, the collection of your
						information will only be done for the purposes of access, management
						and identification of users on our WEB site, it is for no other
						purpose, so we will not disclose your personal information unless it
						is necessary or appropriate to comply with law enforcement requests
						and legal process. We may also access, preserve and disclose such
						personal data if we have a good faith belief that disclosure is
						necessary to protect the rights, property, or safety of you, us, or
						others, or to investigate fraud.
          </p>
        </p>
        <p>
          <h2>data retention</h2>
          <p>
						We will only retain your Personal Data for as long as is necessary
						to comply with the penalties for which we collect it, including to
						comply with legal requirements.
          </p>
          <p>
						The retention period of your personal data will only be done until
						the moment in which you wish to unsubscribe from our WEB site at the
						moment when you no longer want to use our platform, you can withdraw
						at any time.
          </p>
        </p>
      </div>
    </main>
  );
};

export default Policy;
