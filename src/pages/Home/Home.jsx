import React from "react";
import styled from "styled-components";
import { SectionContent } from "../../shared/Section";
import { PageTitle } from "../Shared/PageTitle";

const Title = styled(PageTitle)``;

const Home = () => {
  return (
    <SectionContent>
      <Title>Home Page</Title>
    </SectionContent>
  );
};

export default Home;