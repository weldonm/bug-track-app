import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { SectionContent } from "../../shared/Section";
import { PageTitle } from "../Shared/PageTitle";
import AssignUser from "./_AssignUser";
import UserList from "./_UserList";
import { UserList as Data_UserList } from "../../data/Data_UserList";

const Title = styled(PageTitle)``;

const UserRolesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //background-color: grey;
  gap: 65px;
  transition: 0.3s ease;
    @media ${device.tablet} {
    flex-direction: row;
    gap: 0px;
  }
`;

const ManageRoles = () => {
  return (
    <SectionContent>
      <Title>Manage Roles</Title>
      <UserRolesContainer>
        <AssignUser />
        <UserList />
        <AssignUser userList={Data_UserList} />
        <UserList userList={Data_UserList} />
      </UserRolesContainer>
    </SectionContent>
  );
};

export default ManageRoles;