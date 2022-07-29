import React from "react";
import mango from "../images/mango.jpg"

function About() {
  return (
    <div className="p-3 mb-2 bg-dark text-white">
        <div className="container" style={{marginTop: `${50}px` }}>
      <h2 style={{textAlign: "center"}}>About us</h2>
      <p >
        Carrie is the Founder and Editor of The Dessert Oven, a baking dessert
        website celebrating cake since 2008. If you’re looking for beautiful
        dessert inspiration, recipes and tutorials — you’ve come to the right
        place. The Dessert Oven is a community of bakers, cake makers, and friends
        sharing everything and anything you’ve ever wanted to know about cake.
        Baking since childhood, Carrie fell in love with cake design during her
        own hunt for the perfect wedding cake. She said goodbye to her corporate
        career in software development and learned everything she could about
        cake. After owning her own cake shop for several years, Carrie now
        combines her love of baking, photography and technology as the editor of
        The Dessert Oven . Carrie lives in Virginia with her husband and daughter.
        Carrie’s work has been published on the cover of Country Living Magazine
        and in the pages of Brides Magazine. Her work has also been featured on
        popular websites such as People, Today, BuzzFeed, Country Living,
        Glamour, Cosmopolitan, Seventeen, Real Simple, Redbook, DIY Network,
        TLC, The Cooking Channel and numerous blogs.
      </p>
    
    </div>
    <img src={mango} id="homepage" className="img-fluid rounded mx-auto d-block" style={{ margin: `${50}px` }}  alt="homepage" />
    
    </div>
    
  );
}

export default About;
