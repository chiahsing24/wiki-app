import React from "react";

import Page from "../../components/Page/Page";
import Header from "../../components/Page/Header/Header";
import Content from "../../components/Page/Content/Content";
import Trailer from "../../components/Page/Trailer/Trailer";
import Event from "../../components/Event/Event";

import history from "../../configs/tony";

let images = require.context("../../../public/images", true);

const TonyPage = () => {
  return (
    <Page>
      <Header title={`Tony's USA History`} />
      <Content>
        {history.map((event) => (
          <Event
            images={images}
            year={event.year}
            month={event.month}
            title={event.title}
            description={event.description}
            people={event.people}
            profiles={event.profiles}
            photos={event.photos}
          />
        ))}
      </Content>
      <Trailer />
    </Page>
  );
};

export default TonyPage;
