import React from "react";
import duotone1 from "../../Assets/Imgs/duotone1.png";
import { PenNib, Trash } from "phosphor-react";

const Post = () => {
  return (
    <>
      <div>
        <img className="mx-auto sm:w-5/6 md:w-4/6" src={duotone1}></img>
        <h1 className="text-4xl py-10 font-black">Title of the Blog Post</h1>
        <p className="pb-5 italic w-4/6 md:w-2/6 mx-auto">
          It should have a button that shows an edit form for the post; this
          does not need to be routed differently (the url should stay the same).
          The edit form can look like the new-post form, above.
        </p>
      </div>
      <div className="flex justify-evenly">
        <button className="text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-indigo-800 focus:ring focus:outline-none border-0 py-1 px-3 mb-4">
          Edit <PenNib className="inline" size={24} />
        </button>
        <button className="text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-red-800 focus:ring focus:outline-none border-0 py-1 px-3 mb-4">
          Delete <Trash className="inline" size={24} />
        </button>
      </div>

      <div className="">
        <p className="p-5 text-center max-w-prose border border-gray-300 mx-auto">
          I'm baby artisan semiotics butcher etsy. Retro palo santo af pabst,
          fam tote bag shoreditch. Pitchfork raclette +1, palo santo activated
          charcoal everyday carry cloud bread tote bag. Yuccie live-edge
          mustache, PBR&B flannel roof party DIY raw denim drinking vinegar. VHS
          enamel pin yuccie, chillwave tofu pabst you probably haven't heard of
          them keffiyeh. Godard vegan put a bird on it, poke DIY farm-to-table
          poutine blog. Paleo franzen sriracha, man bun vaporware banh mi
          keffiyeh mustache vape literally leggings tousled trust fund freegan
          vegan. Selfies ennui master cleanse live-edge man braid readymade.
          Cliche copper mug offal leggings shabby chic, taiyaki humblebrag hell
          of pickled cred banh mi +1. Woke slow-carb air plant, deep v chambray
          bitters jean shorts retro vinyl master cleanse sartorial. Venmo next
          level slow-carb street art single-origin coffee retro. Sartorial
          truffaut chartreuse disrupt, austin chia cardigan marfa knausgaard.
          Master cleanse enamel pin hammock, hell of man braid cold-pressed
          shabby chic. PBR&B microdosing live-edge deep v, keytar hella
          messenger bag godard tacos flannel kale chips four loko pour-over.
          Selfies stumptown put a bird on it kickstarter vice, tilde flannel
          distillery pinterest biodiesel meggings mixtape. Semiotics gochujang
          tilde gluten-free readymade shoreditch, kickstarter biodiesel mlkshk
          lyft chicharrones vinyl vexillologist chillwave. Yuccie lo-fi
          meditation, iPhone keytar gluten-free flexitarian mumblecore
          sustainable asymmetrical lyft echo park pickled. Organic freegan tilde
          cardigan. Twee humblebrag lo-fi air plant disrupt, asymmetrical
          distillery cray beard. Tumblr sriracha fingerstache small batch brunch
          forage, pour-over vegan hell of subway tile normcore. Cred scenester
          gastropub street art single-origin coffee enamel pin. Flexitarian
          synth gentrify, readymade cliche disrupt hella woke squid pok pok
          knausgaard ennui coloring book. Succulents before they sold out
          quinoa, unicorn green juice vape biodiesel cray bicycle rights bespoke
          deep v taiyaki crucifix dreamcatcher ramps. Brooklyn lyft vape
          intelligentsia cold-pressed vaporware selfies fingerstache VHS mlkshk
          3 wolf moon celiac. Chia palo santo truffaut activated charcoal
          drinking vinegar cloud bread.
        </p>
      </div>
    </>
  );
};

export default Post;
