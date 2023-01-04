import React, { useState } from "react";
import styled from "styled-components";
import BlockTypeInfo from "../../components/Blocks/Block_TypeInfo";
import { InputStyle } from "../../components/Input/InputStyle";
import { Button_MainStyle } from "../../components/Buttons/Buttons";

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

const FormInput = styled.form``;

const Input = styled(InputStyle)`
  width: 180px;
  padding: 8px 12px;
  &::placeholder {
    font-size: 14px;
  }
`;

const Button = styled(Button_MainStyle)`
  margin: 0 20px;
  padding: 8px 12px;
`;

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
    { name: "Email", description: "toma@email.com.com" },
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
    { name: "Last Login", description: "11/12/22 12:12:12PM" },
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
        <FormInput onSubmit={(e) => handleSubmit(e)}>
          <Input
            name="addComment"
            type="text"
            placeholder="Find a User"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          ></Input>
          <Button>Search</Button>
        </FormInput>
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