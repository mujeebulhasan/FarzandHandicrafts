import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactUs from "components/forms/TwoColContactUsWithIllustrationFullForm.js"

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Manufacturer & Supplier <HighlightedText>Of Stoles & Sacrves.</HighlightedText></>}
        description="We are the leading manufacturer and supplier of handloom made stoles, scarves and other hand crafted products."
        imageSrc="https://storage.googleapis.com/eu-honter/top.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Contact Now"
        primaryButtonUrl="#contact"
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>products.</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Established Since 2014</Subheading>}
        heading={
          <>
            We are in industry for
            <wbr /> <HighlightedText>over 6 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            We at Farzand Handicrafts believe in contributing and serving to our society through various channels such as local manufacturing (Make In India) and Environment friendly maunufacturing units.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Products"
        primaryButtonUrl="#products"
        imageSrc={
          "https://storage.googleapis.com/eu-honter/LocalManufacturingUnit.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        description="Product is the first reason why customers choose our business and why they buy our product. We have many long-term and repeated customers who enjoy doing business with us. There are two reasons our clients love us: First, the quality of our products is unmatched. The second reason is our products price is competitive in this industry."
        statistics={[
          {
            key: "Orders",
            value: "10000+",
          },
          {
            key: "Customers",
            value: "1500+"
          },
          {
            key: "Products",
            value: "2000+"
          }
        ]}
        primaryButtonText="Contact Now"
        primaryButtonUrl="#contact"
        imageInsideDiv={false}
        imageSrc="https://storage.googleapis.com/eu-honter/quality.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <ContactUs 
        description=""
      />
      <Footer />
    </AnimationRevealPage>
  );
}
