import React from "react";
import ProductList from "../components/ProductList";
import BrandMenu from "../components/BrandMenu";
import Cart from "../components/Cart";
import SweatAnthem from "../assets/SweatAnthem.jpg"
import OGDeoderant from "../assets/OGDeoderant.jpg"
const Home = () => {
  return (
    <div>
      <div class="container">

        <article className="science">
          <h2>Why You Sweat!</h2>
          <div className="content-body row">
            <p className="col-8">Why do you sweat? As it turns out there are two types of sweat that your body can excrete given different stimuli. There is common sweat or eccrine from exercise and heat and there is stress sweat from extreme stress and comes from the roots of hair the sweat itself is odorless. The stink from sweat comes from bacteria on the skin or on cloths that come into contact with sweat. The most striking fact, is that the average person has between 2 and 5 million sweat glands that act as the coolant system to the body!</p>
            <img className="col-4" src={SweatAnthem} alt="SweatyBoi" />
          </div>
        </article>
        <br></br><br></br>
        <article className="history">
          <h2>The History of Deoderant</h2>
          <div className="content-body row">
            <img className="col-4" src={OGDeoderant} alt="GmasDeoed" />
            <p className="col-8">When you think of deodorant you think of stink! However, our modern 18 billion dollar industry wasn’t always so prevalent. The quest to conquer stink began in the late 19th and early 20th centuries and the greatest weapon used was consumer deprecating marketing, targeting the insecurities of women, their initial target audience. The initial product that would break the mold was Odorono who’s owner, Edna Murphy and travel salesman James Yong launched to international fame. By 1927 sales of Odorono reached $1 million dollars and competitors began to utilize the same advertising and marketing methods that made deodorant famous. By 1935 the first commercially specific deodorant for men, Top Flite, was released based on the ideology that a smelly man not only repulsed their fairer counterparts but could miss out on business opportunities as well. Today, deodorant and anti-perspirants is an 18 billion dollar industry spread to every country in the world.</p>
          </div>
        </article>

      </div>
      <div className="container">
        <BrandMenu />
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
