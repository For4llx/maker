import React from "react";

function Home() {
  return (
    <main className="home">
      <div className="layout-1">
        <article className="layout-1__paragraph paragraph paragraph--centered">
          <h2 className=" layout-1__title paragraph__title paragraph__title--large">
            Get paid for the work you{" "}
            <span className="paragraph__emphase">love</span> to do.
          </h2>
          <p className="layout-1__body paragraph__body">
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
        </article>
      </div>
      <div className="layout-2">
        <ul className="layout-2__ul">
          <li className="layout-2__list">
            <article className="layout-2__paragraph layout-2__paragraph--passions-icon">
              <div className="layout-2__container-1">
                <h3 className="paragraph__title paragraph__title--xsmall">
                  Indulge your passions
                </h3>
                <p className="paragraph__body layout-2__body">
                  Your passions shouldn't be just for the weekend. Earn a living
                  doing what you love.
                </p>
              </div>
            </article>
          </li>
          <li className="layout-2__list">
            <article className="layout-2__paragraph layout-2__paragraph--financial-icon">
              <div className="layout-2__container-1">
                <h3 className="paragraph__title paragraph__title--xsmall">
                  Gain financial freedom
                </h3>
                <p className="paragraph__body layout-2__body">
                  Start making money work for you. There’s nothing quite like
                  earning while you sleep.
                </p>
              </div>
            </article>
          </li>
          <li className="layout-2__list">
            <article className="layout-2__paragraph layout-2__paragraph--lifestyle-icon">
              <div className="layout-2__container-1">
                <h3 className="paragraph__title paragraph__title--xsmall">
                  Choose your lifestyle
                </h3>
                <p className="paragraph__body layout-2__body">
                  Own your daily schedule. Fancy a lie-in? Go for it! Take
                  charge of your week.
                </p>
              </div>
            </article>
          </li>
          <li className="layout-2__list">
            <article className="layout-2__paragraph layout-2__paragraph--remote-icon">
              <div className="layout-2__container-1">
                <h3 className="paragraph__title paragraph__title--xsmall">
                  Work from anywhere
                </h3>
                <p className="paragraph__body layout-2__body">
                  Selling online means not being pinned down. Want to work AND
                  travel? Go for it!
                </p>
              </div>
            </article>
          </li>
        </ul>
      </div>
      <div>
        <article className="paragraph paragraph--centered">
          <h2 className="paragraph__title paragraph__title-small">
            Our pricing plans
          </h2>
          <p className="paragraph__body">
            We only make money when our creators make money. Our plans are
            always affordable, and it’s completely free to get started.
          </p>
        </article>
        <div>
          <div>
            <article>
              <h3 className="paragraph__title paragraph__title--xsmall">
                Dip your toe
              </h3>
              <p className="paragraph__body">
                Just getting started? No problem at all! Our free plan will take
                you a long way.
              </p>
            </article>
            <article>
              <h3>Free</h3>
              <ul>
                <li>Unlimited products</li>
                <li>Basic analytics</li>
                <li>Limited marketplace exposure</li>
                <li>10% fee per transaction</li>
              </ul>
            </article>
          </div>
          <div>
            <article>
              <h3 className="paragraph__title paragraph__title--xsmall">
                Dive right in
              </h3>
              <p className="paragraph__body">
                Ready for the big time? Our paid plan will help you take your
                business to the next level.
              </p>
            </article>
            <article>
              <h3>
                <span>$25.00</span> /month
              </h3>
              <ul>
                <li>Custom domain</li>
                <li>Advanced analytics and reports</li>
                <li>High marketplace visibility</li>
                <li>5% fee per transaction</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
