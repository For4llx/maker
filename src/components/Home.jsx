import React from "react";

function Home() {
  return (
    <main>
      <div>
        <article className="paragraph paragraph--centered">
          <h2 className="paragraph__title paragraph__title--large">
            Get paid for the work you{" "}
            <span className="paragraph__emphase">love</span> to do.
          </h2>
          <p className="paragraph__body">
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
        </article>
      </div>
      <div>
        <ul>
          <li>
            <article>
              <h3 className="paragraph__title">Indulge your passions</h3>
              <p className="paragraph__body">
                Your passions shouldn't be just for the weekend. Earn a living
                doing what you love.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h3 className="paragraph__title">Gain financial freedom</h3>
              <p className="paragraph__body">
                Start making money work for you. There’s nothing quite like
                earning while you sleep.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h3 className="paragraph__title">Choose your lifestyle</h3>
              <p className="paragraph__body">
                Own your daily schedule. Fancy a lie-in? Go for it! Take charge
                of your week.
              </p>
            </article>
          </li>
          <li>
            <article>
              <h3 className="paragraph__title">Work from anywhere</h3>
              <p className="paragraph__body">
                Selling online means not being pinned down. Want to work AND
                travel? Go for it!
              </p>
            </article>
          </li>
        </ul>
      </div>
      <div>
        <article className="paragraph paragraph--centered">
          <h2 className="paragraph__title">Our pricing plans</h2>
          <p className="paragraph__body">
            We only make money when our creators make money. Our plans are
            always affordable, and it’s completely free to get started.
          </p>
        </article>
        <div>
          <div>
            <article>
              <h3 className="paragraph__title">Dip your toe</h3>
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
              <h3 className="paragraph__title">Dive right in</h3>
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
