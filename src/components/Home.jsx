import React from "react";

function Home() {
  return (
    <main className="home">
      <section className="layout-1">
        <div className="layout-1__container">
          <h2 className="layout-1__title">
            Get paid for the work you{" "}
            <span className="layout-1__emphase">love</span> to do.
          </h2>
          <p className="layout-1__body">
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
        </div>
      </section>
      <section className="layout-2">
        <ul className="layout-2__ul">
          <li className="layout-2__list">
            <article className="layout-2__perk layout-2__perk--passions">
              <div className="layout-2__container">
                <h3 className="layout-2__title">Indulge your passions</h3>
                <p className="layout-2__body">
                  Your passions shouldn't be just for the weekend. Earn a living
                  doing what you love.
                </p>
              </div>
            </article>
          </li>
          <li className="layout-2__list">
            <article className="layout-2__perk layout-2__perk--financial">
              <div className="layout-2__container">
                <h3 className="layout-2__title">Gain financial freedom</h3>
                <p className="layout-2__body">
                  Start making money work for you. There’s nothing quite like
                  earning while you sleep.
                </p>
              </div>
            </article>
          </li>
          <li className="layout-2__list">
            <article className="layout-2__perk layout-2__perk--lifestyle">
              <div className="layout-2__container">
                <h3 className="layout-2__title">Choose your lifestyle</h3>
                <p className="layout-2__body">
                  Own your daily schedule. Fancy a lie-in? Go for it! Take
                  charge of your week.
                </p>
              </div>
            </article>
          </li>
          <li className="layout-2__list">
            <article className="layout-2__perk layout-2__perk--remote">
              <div className="layout-2__container">
                <h3 className="layout-2__title">Work from anywhere</h3>
                <p className="layout-2__body">
                  Selling online means not being pinned down. Want to work AND
                  travel? Go for it!
                </p>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
