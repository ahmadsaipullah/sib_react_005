import React from "react";
import Header from "../Home/Content/Header";
import Next from "../Home/Content/Next";
import About from "../Home/Content/About";
import Member from "../Home/Content/Member";
import Past from "../Home/Content/Past";

const Home = () => {
  const profile = {
    tittle: "Hactive 8 Meetup",
    loaction: "Locaton, Jakarta Selatan",
    member: "Members 1,078",
    organaizer: "Ahmad Saifullah",
  };

  const pasmeetup = {
    tgl: "27 November 2017",
    loaction: "#39 JakartaJS April Meetup with Tokped",
    member: "113 went",
    view: "View",
  };

  const pas = {
    tgl: "27 November 2017",
    loaction: "#38 JakartaJS April Meetup with Blibli",
    member: "113 went",
    view: "View",
  };

  const pass = {
    tgl: "27 November 2017",
    loaction: "#37 JakartaJS April Meetup with Hacktive8",
    member: "110 went",
    view: "View",
  };

  const member = {
    header: "Organaizer",
    name: "Saipul Ahmad",
    other: "Other 4",
  };

  return (
    <>
      <Header person={profile} />
      <Next />
      <About />
      <Member person={member} />
      <Past person={pasmeetup} person2={pas} person3={pass} />
    </>
  );
};

export default Home;
