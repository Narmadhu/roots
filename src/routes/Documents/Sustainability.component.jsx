import React from "react"

import Accordion from "../../components/Accordion/Accordion.component"
import AccordionItem from "../../components/Accordion/AccordionItem/AccordionItem.component"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.component"
import PageBanner from "../../components/PageBanner/PageBanner.component"

import "./Documents.styles.scss"

const Sustainability = () => {
  return (
    <>
      <PageBanner label="Sustainability" />
      <Breadcrumbs label="Sustainability" />

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <h2 className="documents-accordion-heading">Reducing Carbon Footprint</h2>

            <Accordion className="documents-accordion">
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="100% organic or sustainably wild food"
              >
                <p>Basically, natural cultivating implies food as it ought to be; food you can trust, food that doesn&apos;t cost the earth, and food where the creatures are treated with deference. It&apos;s a scrupulous method of watching out for the land that is kinder. Natural cultivating consistently implies:</p>
                <ul>
                  <li>No manufactured showers (pesticides, manures, fungicides, bug sprays).</li>
                  <li>No counterfeit tones or additives.</li>
                  <li>Working with nature, not against it.</li>
                  <li>No standard utilization of anti-microbials.</li>
                  <li>The best quality level for creature government assistance (stunningly better than unfenced!).</li>
                  <li>No GM fixings.</li>
                </ul>
                <p>Nearly all that we do is natural; just things that can&apos;t be authoritatively confirmed, similar to water, salt, wild game, ocean got fish, and scrounged food are definitely not. This is on the grounds that they have not been &apos;cultivated&apos; and hence aren&apos;t controlled under natural norms. We work intimately with every one of our providers however to realize they focus on morals and climate. Outside of food, our cleaning items (while eco-accommodating) are not natural. All that is guaranteed natural is plainly marked on the site with a little molded image, and on the actual items.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="92% less plastic in our takeaway boxes"
              >
                <p>Since 1988 we&apos;ve spearheaded a low plastic way to deal with life. Throughout this time we&apos;ve saved at any rate 60 million plastic sacks by utilizing returnable and reusable cardboard boxes all things being equal. On the off chance that you line up each one of those saved packs they&apos;d fold over the moon multiple times! Vast, huh?</p>
                <p>Throughout the long term we&apos;ve done a lot of stuff to lessen the other plastic we use, particularly in our foods grown from the ground boxes. We looked at our top of the line natural leafy foods boxes over a four-week time frame to similar natural products of the soil from four grocery stores (Ocado, Sainsbury&apos;s, Tesco and Asda). The complete load of plastic in the general store conveyances across the a month was 268.13g though our own was 19g. So our conveyances utilize 92.86% less plastic contrasted with the general stores.</p>
                <p>We do utilize some plastic to guard food new and, as we perceive that food squander is a greater issue to handle in the environment crisis. Decaying food not just creates ozone depleting substances, it&apos;s likewise a misuse of the assets used to deliver it. Keeping fossil fuel byproducts as low as potential methods we offer less to worldwide warming, and that is a vital thought for us.</p>
                <p>Across our products of the soil range, just a portion of our servings of mixed greens, delicate organic products, and verdant greens presently need plastic to keep them new. We&apos;ve been testing manageable other options, and are on the cusp of having the option to make some truly energizing changes.</p>
                <p>All the other things either comes free, or in FSC card or mash punnets (which are produced using reused paper and card), which are not difficult to reuse, or in compostable materials. Fascinating truth from our exploration: we found that in any event, when we chose &apos;no plastic packs&apos; at the online checkout, every conveyance separated from Asda&apos;s, came in plastic sacks.</p>
                <p>There&apos;s no utilization crying over spilt milk, however what might be said about broken glass? Our milk containers represent 40% of our plastic use. We&apos;re working with a college research group to dissect the natural effect of what might occur on the off chance that we changed to glass or different materials, to comprehend which alternative is genuinely better. We&apos;re as of now investigating utilizing refillable tubs for certain items. Our Woolcool® bundling is all returnable and reusable.</p>
                <p>A portion of our items are totally plastic free, utilizing card as well as compostable materials all things being equal. Before long you will actually want to discover them in our without plastic class.</p>
              </AccordionItem>
            </Accordion>

            <h2 className="documents-accordion-heading">Organic and Wild</h2>

            <Accordion className="documents-accordion">
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="Is organic an answer to the climate emergency?"
              >
                <p>We trust it is a solid competitor! Natural soil is normally sound and strong as it contains billions of microbes that make it ready to store water, nitrogen and different supplements. Sound natural soil ingests more water by putting away as much as 3,750 tons of water for every hectare, which is about 1.5 Olympic pools. This implies it&apos;s more dry season and flood-safe contrasted with non-natural soils.</p>
                <p>Natural soil additionally sequesters (catches) 450kg more per hectare than non-natural soil and if all UK farmland went natural it&apos;d have similar impact as taking 1.3million vehicles off the street. So natural is without a doubt an awesome instrument in the battle against environmental change.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="How does organic affect animal welfare?"
              >
                <p>Natural accreditation has the most elevated of creature government assistance norms. The Soil Association guarantees Roots Restaurant and their homesteads, and their rigid principles cover everything from everyday environments and food quality, to the utilization of anti-infection agents just as transport and butcher:</p>
                <ul>
                  <li>Should approach touch and scrounge on natural field where just characteristic composts are utilized and pesticides are seriously limited.</li>
                  <li>Should have a lot of room (significantly more than unfenced!) which assists with decreasing pressure and sickness.</li>
                  <li>Should have the chance to communicate regular practices, for example, home structure or scrounging.</li>
                  <li>Are taken care of a natural eating routine that is just about as healthfully complete as could really be expected and is liberated from hereditarily altered life forms (GMOs). Over 1,000,000 tons of GM crops are imported every year to take care of most of non-natural animals that produce chicken, eggs, pork, bacon, milk, cheddar and so forth This training is prohibited under natural principles.</li>
                  <li>Should not regularly be given anti-infection agents. Livestock presently represent just about 66% of all anti-toxins utilized in the EU. These are gone to us through the natural way of life.</li>
                  <li>Should not be exposed to excruciating practices, for example, tail-docking or nose cutting.</li>
                </ul>
                <p>We just work with ranches that are ensured as clinging to these norms and ensure all animals are treated with deference, and furnished with the room they need to lead a normally solid and cheerful life.</p>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="How does organic compare to free range?"
              >
                <p>It&apos;s far superior! Natural norms request that all creatures have more admittance to the outside and more space than unfenced guidelines.</p>
                <p>For instance, on a free roaming chicken homestead you will discover 12 dozen chickens for every square meter inside. Furthermore, outside there should be 1 square meter for every chicken. In natural, there should be 4 square meters for each chicken outside, and when they&apos;re tucked up inside, you&apos;ll discover 10 chickens for every square meter. Natural cultivating likewise necessitates that creatures invest more energy outside than in free roaming frameworks. This low &apos;loading thickness&apos; rule applies to all species kept naturally, including pigs, poultry and cows. Strategy directs that the climate should give freedoms to them to communicate characteristic practices, such as giving pigs straw to assemble homes or chickens with sand showers to clean themselves.</p>
                <p>The ranches we work with hold fast to the most severe principles to ensure all animals are treated with deference and furnished with the room they need to lead a normally sound and upbeat life.</p>
              </AccordionItem>
            </Accordion>

            <h2 className="documents-accordion-heading">Plastic and Packaging</h2>

            <Accordion className="documents-accordion">
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="What plastic do you use and why?"
              >
                <p>We&apos;re plastic-free wannabees though we do rely on some plastic to keep your food fresh and healthy. We only use it when necessary, for two reasons:</p>
                <ol>
                  <li>Reducing food waste. Food waste is one of the biggest contributing factors to climate change so we avoid it as much as humanly possible. Sometimes a bit of plastic is the difference between 200 mouldy cucumbers or 200 deliciously fresh cucumbers that&apos;ll happily last a week. It is frankly brilliant at keeping food from spoiling both in transit and in the home. Biodegradable alternatives are either many times the price and/or not quite robust enough to do the job as well.</li>
                  <li>Reducing transport & carbon emissions. From day dot we&apos;ve tried to minimise the impact of our transportation (from the farm to us, and us to you). Plastic is often the lightest and safest option for food transport, so can help to keep our carbon footprint down. We&apos;re always weighing up the sustainable viability of all alternatives. Most of our packaging is already recycled, recyclable and/or compostable. Like BioD and Court Lodge who use 100% post-consumer waste (recycled plastic) to make their bottles, which you can then recycle in your curb side collection.</li>
                </ol>
                <p>We&apos;re working our organic derrières off to make everything reusable or recyclable:</p>
                <ul>
                  <li>Fish trays are recyclable (just give them a rinse first!).</li>
                  <li>As you may know, black trays are not collected by most boroughs and councils, so we&apos;ve encouraged farmers to switch to clear trays. Seasonal game and ready meals are the only things in our shop that still come in black trays and they&apos;re just using up the last few packs then switching to clear PET plastic.</li>
                  <li>Currently unrecyclable packaging includes meat vac pack bags (all the trays are recyclable, just give them a rinse) and bags for grains, nuts and seeds. This isn&apos;t good enough we know and we hope to have alternatives very soon. In the meantime you can turn them into ecobricks.</li>
                  <li>Milk bottles make up 40% of the plastic we use. Wait! Hold up! It&apos;s udder control (oh good grief). The bottles are already 30% recycled and we&apos;re working to make that 100% recycled. We&apos;re also working with a research team to analyse the impact of alternatives like glass.</li>
                </ul>
              </AccordionItem>
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="What is Roots Restaurant doing to reduce plastic?"
              >
                <p>We&apos;ve generally been quick to keep our plastic utilize low and our inclination is consistently to work with producers and creators who utilize negligible, feasible bundling at every possible opportunity.</p>
                <p>Throughout the most recent year we&apos;ve diminished the plastic in our natural products of the soil boxes by 18% so we presently have 92% less plastic than the same general store shops.</p>
                <p>It&apos;s in our unresolved issues ourselves to improve. More than 10 years back, we supplanted polystyrene chill boxes with Woolcool© which is British, maintainable and 100% recyclable. We simply love it, it&apos;s so cool. It even keeps things colder than polystyrene could possibly do.</p>
                <p>This mid year we took the choice to quit selling actually filtered water, and now offer simply shimmering water in aluminum jars or glass. We&apos;re at present sourcing a maintainable reusable water channel so individuals (who recently purchased still filtered water) can certainly appreciate faucet water.</p>
              </AccordionItem>
            </Accordion>

            <h2 className="documents-accordion-heading">Carbon Emissions</h2>

            <Accordion className="documents-accordion">
              <AccordionItem
                accordionNormal
                buttonClassName="documents-header"
                contentClassName="documents-content"
                index
                title="Do you use bicycles to deliver your food?"
              >
                <p>On the off chance that you&apos;ve strolled down a bustling London road over the most recent 5 years you&apos;ll know the number of conveyance vehicles fill the streets. Indeed, even before the 2013 blast of same day conveyances light products vehicles (LGVs) and HGVs represented 33% of street transport nitric and nitrogen oxide (NOx) emanations in Greater London.</p>
                <p>To help offer a more certain other option, Fed by Roots Restaurant dispatched before this year conveying food by electric helped payload bicycles. Our little however completely framed company of 6 bicycles (in fact trikes as they have 3 wheels) take our natural, reasonably sourced and bundled food and drink from our Hoxton base, to workplaces and shared work environments everywhere on the city of London.</p>
                <p>Bikes are splendid. They&apos;re the peaceful, ease and zero outflow alternative. By utilizing trikes not trucks we&apos;re diminishing clog, fossil fuel byproducts and clamor while improving air quality. That is a fourfold success!</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sustainability
