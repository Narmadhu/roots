import React from "react"

import Accordion from "../../components/Accordion/Accordion.component"
import AccordionItem from "../../components/Accordion/AccordionItem/AccordionItem.component"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"

import "./Documents.styles.scss"

const Faq = () => {
  return (
    <>
      <PageBanner label="FAQ" />
      <Breadcrumbs label="FAQ" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <Accordion className="documents-accordion">
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="Is there a minimum spend?"
              >
                <p>No, minimum order.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="What do you charge for delivery?"
              >
                <p>Free delivery on all orders.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="How and when do I pay?"
              >
                <p>We acknowledge all significant credit and check cards. Your card will be charged when you submit a request before the request is chipped away at.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="What happens if something I ordered isn&apos;t available?"
              >
                <p>More often than not, your request will show up true to form - however there can be times where a thing isn&apos;t fit to be picked, or fish isn&apos;t around to be gotten, for instance. Where conceivable we&apos;ll generally attempt to locate the nearest elective. For example, green kale rather than red. When something is inaccessible or we&apos;ve made a replacement, we will be in touch to tell you and give the important remuneration. In case you&apos;re discontent with the replacement, just let us know and we can give a discount to the first thing.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="What will you do with my shopping if I&apos;m not in?"
              >
                <p>We arrange time allotments for the entirety of our conveyances, and need you to be in for this. Bombed conveyances add to food waste, and we can&apos;t leave items as we should guarantee that items are kept at a protected temperature, and not messed with before you get them. If it&apos;s not too much trouble, guarantee to connect as quickly as time permits by telephone or email on the off chance that you figure you will not have the option to make your conveyance opening.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="How will my cold food stay fresh?"
              >
                <p>On account of our warm boxes, all chilled things are conveyed with a solid &apos;cold chain&apos; and remain chilled from maker to your entryway. On the off chance that you have coordinated a &apos;leavesafe&apos; conveyance, chilled things will be conveyed and left in warm bundling which do a similar work.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="Do I have to let the delivery driver into my house?"
              >
                <p>No. We uphold contactless conveyances and all drivers will be glad to leave your food in sacks or boxes (or without!) outside your property on the off chance that you like. We are likewise testing new alternatives to have the option to convey all food in packs to give all clients admittance to contact free conveyance as default.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="What is your refunds policy?"
              >
                <p>We have a no bandy discount strategy, so if a piece of your request is missing, harmed, low quality or not what you requested, we truly need to think about it. Criticism is significant for us to improve, and pictures of marks or low quality things assist us with indicating our makers or pressing group what turned out badly, so kindly incorporate them in the event that you can. We would then be able to discount you immediately, or give you a voucher to take care of the expense of the thing.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="How do I reset my password?"
              >
                <p>If you need another secret key, there is a &apos;Failed to remember secret key?&apos; interface on the sign-in page. Snap on this, enter your email address, and afterward adhere to the directions in the reset email.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="I think I&apos;ve found a problem with the website; what should I do?"
              >
                <p>Please email us the details, ideally sending a screenshot as well to <a href="mailto:info@rootsrestaurant.com">info@rootsrestaurant.com</a>. Thanks for your help!</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="How do I give feedback on the website?"
              >
                <p>Kindly email us at: <a href="mailto:info@rootsrestaurant.com">info@rootsrestaurant.com</a>. We truly appreciate your criticism on our sites and application. It&apos;s a splendid path for us to get some answers concerning what we&apos;re doing well, and furthermore what we actually need to take a gander at!</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="Can I suggest a product?"
              >
                <p>Our Producer Team are consistently on the chase for new and intriguing nourishments, so on the off chance that there&apos;s something you&apos;d prefer to see on the site, at that point kindly let us know by means of our <a href="/contact">Contact Page</a></p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="What do you mean by &quot;local&quot;?"
              >
                <p>As far as we might be concerned, neighborhood implies that the food you request is developed or created close to our Hub. At that point conveyed direct to us from our ranchers and food producers. At the point when you purchase neighborhood food, you&apos;re straightforwardly supporting little ranchers and privately-run companies who care about getting you the best food they can make (or develop) and it hasn&apos;t went as far, so it&apos;s a lot fresher, more delectable and better.</p>
                <p>One test of remaining super-neighborhood is that there are some fundamental products of the soil that simply don&apos;t develop locally, similar to bananas, and citrus natural product. Yet, whatever the food, we will consistently remain as near to home as could really be expected, and we&apos;ll be straightforward en route, so you can settle on an educated choice about what you need to purchase.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="Do you deliver on Bank Holidays?"
              >
                <p>We convey on most Bank Holidays, so the majority of the year it&apos;s reasonable game for new food. Nonetheless, there will probably be a few changes around Christmas and Easter - and there may be restricted item accessibility if our makers take a very much procured vacation day.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
