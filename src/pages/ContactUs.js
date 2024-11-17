import React, { useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <AnimationRevealPage>
      <Header/>
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Mundeth Agro Mills",
            description: (
              <>
                <Address>
                  
                <AddressLine>Edavoor</AddressLine>
                  <AddressLine>Kalady - Cheranalloor Road</AddressLine>
                  <AddressLine> Onambilly, Kalady, Kerala - 683544</AddressLine>
                </Address>
                <Email>mangalamrice@gmail.com</Email>
                <Phone>+91 9447029137</Phone>
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
