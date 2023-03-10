import React from "react";
import styled from "styled-components";
import BlockTypeInfo from "../../components/Blocks/Block_TypeInfo";

const Container = styled.div``;

const Styles = {
  EntryFlex: ["1", "1", "1"],
  EntryItem: { padding: "12px 10px", fontSize: "14px" },
};

const HeaderText = {
  mainText: "Details for Ticket #",
};

const Links = [
  { title: "Back to list", route: "tickets" },
  { title: "Edit Ticket", route: "tickets" },
];

const ListItem = [
  [
    { name: "Ticket Title", description: "Test Comment" },
    { name: "Ticket Description", description: "Start writing comments please!" },
  ],
  [
    { name: "Assigned Developer", description: "Tom E" },
    { name: "Submitter", description: "Tom F" },
  ],
  [
    { name: "", description: " 1" },
    { name: "Ticket Priority", description: "High" },
  ],
  [
    { name: "Ticket Status", description: "Open" },
    { name: "Ticket Type", description: "Bugs/Errors" },
  ],
  [
    { name: "Created", description: "12/31/22 12:12:12PM" },
    { name: "Updated", description: "01/03/23 12:12:12PM" },
  ],
];

const TicketInfo = () => {
  return (
    <Container>
      <BlockTypeInfo
        Styles={Styles}
        HeaderText={HeaderText}
        Links={Links}
        ListItem={ListItem}
      />
    </Container>
  );
};

export default TicketInfo;