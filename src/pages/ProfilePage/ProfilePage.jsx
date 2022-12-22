import React from "react";
import { SectionContent } from "../../shared/Section";
import styled from "styled-components";
import { PageTitle } from "../Shared/PageTitle";

const Title = styled(PageTitle)``;

const ProfilePage = () => {
  return (
    <SectionContent>
      <Title>Profile</Title>
    </SectionContent>
  );
};

export default ProfilePage;