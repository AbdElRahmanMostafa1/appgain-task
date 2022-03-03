import React from "react";

import Carousel from "../../components/carousel/Carousel";
import Title from "../../components/title/Title";
import ActionsNav from "../../components/actions/ActionsNav";
import AppNav from "../../components/app-nav/AppNav";

const MainPage = () => {
  return (
    <>
      <ActionsNav />
      <AppNav />
      <main>
        <Title />
        <section>
          <Carousel />
        </section>
      </main>
    </>
  );
};

export default MainPage;
