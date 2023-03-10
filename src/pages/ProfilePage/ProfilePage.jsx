import React, { useState } from "react";
import styled from "styled-components";
import BlockTypeInfo from "../../components/Blocks/Block_TypeInfo";
import ButtonBasic from "../../components/Buttons/Button_Basic";
import Input from "../../components/Input/InputSearch";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  margin-left: 15px;
`;
const Form = styled.form``;
/* ----- Props Data ----- */
const InputStyle = {
  width: "180px",
  padding: "8px 12px",
};
const ButtonStyle = {
  margin: "0 20px",
  padding: "8px 12px",
};
const Styles = {
  EntryFlex: ["1", "1", "1"],
  EntryItem: { padding: "12px 10px", fontSize: "14px" },
};
const HeaderText = {
  mainText: "Profile Informations on #",
};
const Links = [{ title: "Edit Profile", route: "" }];
const userProfile = [
  [
    { name: "User Name", description: "Tom A" },
    { name: "Email", description: "toma@mail.com" },
  ],
  [
    { name: "Role", description: "Admin" },
    { name: "Status", description: "Online" },
  ],
  [
    { name: "Tickets Assigned", description: "N/A" },
    { name: "Ticketd Solved", description: "N/A" },
  ],
  [
    { name: "Account Created", description: "12/12/22 12:12:12PM" },
    { name: "Last Login", description: "06/01/23 12:12:12PM" },
  ],
];
const ProfilePage = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("comment submitted");
  };
  return (
    <Container>
      <SearchContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          {/* Input */}
          <Input style={InputStyle} value={search} setValue={setSearch} />
          {/* Button */}
          <ButtonBasic
            buttonStyle={ButtonStyle}
            text={"SEARCH"}
            handleSubmit={handleSubmit}
          />
        </Form>
      </SearchContainer>
      <BlockTypeInfo
        Styles={Styles}
        HeaderText={HeaderText}
        Links={Links}
        ListItem={userProfile}
      />
    </Container>
  );
};
export default ProfilePage;
