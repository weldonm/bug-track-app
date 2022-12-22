import React from "react";
import { SectionContent } from "../../shared/Section";
import styled from "styled-components";
import { PageTitle } from "../Shared/PageTitle";

const Title = styled(PageTitle)``;

const ProjectManagement = () => {
  return (
    <SectionContent>
      <Title>Manage Projects</Title>
    </SectionContent>
  );
};

export default ProjectManagement;