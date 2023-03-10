import React from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { SectionContent } from "../../shared/Section";
import { PageTitle as Title } from "../../components/Titles/PageTitle";
import { UserList as Data_UserList } from "../../data/Data_UserList";
import AssignUser from "./_AssignUser";
import UserList from "./_UserList";


const UserRolesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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