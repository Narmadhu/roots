import React from "react"

import Accordion from "../../components/Accordion/Accordion.component"
import AccordionItem from "../../components/Accordion/AccordionItem/AccordionItem.component"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"

import "./Documents.styles.scss"

const CoronavirusFaq = () => {
  return (
    <>
      <PageBanner label="Coronavirus FAQ" />
      <Breadcrumbs label="Coronavirus FAQ" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <Accordion className="documents-accordion">
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="Important update"
              >
                <p>We promise you that we&apos;re doing all that we can to secure everybody and to keep things moving in the coming weeks. The main lockdown was inconceivably trying for us to oversee, yet I am so pleased with what the group here had the option to accomplish. We took in a ton of exercises in the Spring and this experience will help keep things running as easily as could be expected.</p>
                <p>The entirety of this has occurred with every individual who can, securely telecommuting, and for the individuals who can&apos;t, we have done a gigantic add up to ensure that our destinations are pretty much as protected as could really be expected.</p>
                <p>Our groups keep on working energetically and with extraordinary imagination and desire to take care of business. I&apos;m staggeringly glad for everybody here at Roots Restaurant, regardless of whether they&apos;re on the bleeding edge pressing and conveying to you, working in the background or setting up the best working practices, cycles and controls to keep us all protected at work, they are largely working really hard!</p>
                <p>Much obliged to you for all your help through this period, we truly appreciate it.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="Our suppliers"
              >
                <p>We love going to see our ranchers, makers and potential accomplices routinely. Yet, to protect everybody, we have halted each one of those visits for the present and are talking via telephone or video conferencing. We&apos;re talking every day, however, to guarantee we have an away from of any item delays and are giving a valiant effort to help all providers to keep exchanging where they&apos;ve been affected by eateries shutting.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="Packaging"
              >
                <p>We are projecting our net more extensive to get you the best produce accessible for our produce. In the current environment that implies that we may have to bargain in some different territories, for example, bundling and a few items, that would generally come free, may come enclosed by plastic or sacked. We feel that it&apos;s presently more significant for us to have sufficient natural produce to ship off our clients so we request you to kindly discover ways from reusing bundling you wouldn&apos;t customarily expect or to discard it mindfully. We trust this will be a momentary arrangement however needed to surrender you a heads.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="Our drivers and deliveries"
              >
                <p>We&apos;re having customary briefings with our drivers and keep on maintaining the strictest wellbeing and security rules, for example, standard hand washing and conveying hand sanitiser to clean hands between conveyances. Every driver has their temperature checked when they show up at the warehouse each day. Moreover, every one of our drivers will wear a face veil when entering public spaces inside structures, for example, workplaces or squares of pads. It&apos;s truly significant that your conveyance guidelines are modern as we will keep on utilizing your typical safe spot until told something else.</p>
                <p>Every one of our drivers are advised to thump on the entryway if it&apos;s a sensible hour, to tell you that they have been, however they won&apos;t remain to visit. We realize this may appear to be a bit detached yet we&apos;re certain you comprehend we simply need to guarantee everybody remains in any event 2m away from one another.</p>
                <p>We&apos;d likewise suggest leaving your void boxes out for your driver to gather before they show up, to limit the requirement for contact.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoronavirusFaq
