import React from "react";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Viproom() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const vips = [
    {
      image: "image/hitman.jpg",
      name: "The Hitman",
    },
    {
      image: "image/dexter3.jpg",
      name: "The Blood Guy",
    },
    {
      image: "image/kanye-west4.jpg",
      name: "The KARAOYE",
    },
    {
      image: "image/logan3.jpg",
      name: "The Wolf",
    },
    {
      image: "image/jay-z3.jpg",
      name: "The BUSINESS-MAN",
    },
    {
      image: "image/emmett-brown3.jpg",
      name: "The Doc",
    },
    {
      image: "image/freddy-krueger1.jpg",
      name: "The Dreamer",
    },
    {
      image: "image/black panther-01.jpg",
      name: "???",
    },
    {
      image: "image/darth vader-01.jpg",
      name: "???",
    },
    {
      image: "image/deadshot-01.jpg",
      name: "???",
    },
    {
      image: "image/gladiator-01.jpg",
      name: "???",
    },
    {
      image: "image/joker-01.jpg",
      name: "???",
    },
    {
      image: "image/judge dredd-01.jpg",
      name: "???",
    },
    {
      image: "image/thanos-01.jpg",
      name: "???",
    },
    {
      image: "image/yado-01.jpg",
      name: "???",
    },
  ];

  return (
    <div className="vip-room pt-5 pb-5">
      <Container>
        <div className="text-center mt-0 mb-4">
          <span className="text-orange font-xxl" style={{ fontWeight: "bold" }}>
            THE VIP ROOM
          </span>
        </div>
        <div className="mb-4 vipRoomTxt">
          <p className="text-center mb-0 " style={{ color: "white" }}>
            The VIP Room by the C3S NFT are the 1500 of the rarest NFTs.{" "}
          </p>
          <p className="text-center mt-4" style={{ color: "white" }}>
            They are all hand drawn and have little to no elements in common
            with the regular collection.
          </p>
          <p className="text-center mb-0 mt-4 " style={{ color: "white" }}>
            The lucky holders will get additional incentives, perks, and a bonus
            to be named during a special announcement on our Discord.
          </p>
        </div>
        <div className="text-center pt-4 pb-4">
          <a
            href="https://discord.gg/XqeDHe8f"
            className="vip-room-register-btn cursor-pointer"
            style={{
              backgroundImage: "url(images/vip-register-btn.png)",
              fontWeight: "bold",
            }}
          >
            REGISTER FOR OUR PRIVATESALE
          </a>
          {/* <span className="vip-room-register-btn cursor-pointer" style={{backgroundImage: "url(images/vip-register-btn.png)", fontWeight: 'bold'}}>REGISTER FOR OUR PRESALE</span> */}
        </div>
      </Container>
      <div className="text-white mt-4 mb-4">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite
          autoPlay={true}
          autoPlaySpeed={5000}
          transitionDuration={1000}
        >
          {vips.map((vip, index) => (
            <div key={"vip" + index} className="pt-0 pb-0">
              <Image
                key={"vip" + index}
                src={vip.image}
                draggable="false"
                className="w-100 cursor-pointer"
              />
              <span>{vip.name}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
