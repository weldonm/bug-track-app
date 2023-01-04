import React from "react";
import { useParams } from "react-router-dom";
import TicketInfo from "./_TicketInfo";
import TicketComments from "./_TicketComments";
import TicketHistory from "./_TicketHistory";
import TicketAttachments from "./_TicketAttachments";
import styled from "styled-components";
import { Divider_Horizontal as DividerLine } from "../../components/Dividers/Dividers";
import { Divider_Vertical as DividerUp } from "../../components/Dividers/Dividers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 25px;
`;

const BlocksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  div:nth-child(1),
  div:nth-child(3) {
    flex: 1;
  }
`;

const TicketDetails = () => {
  const { id } = useParams();
  console.log(id);

  const ticketData = {
    comments: [
      {
        commenter: "Tom A",
        message: "This is a comment",
        created: "31/12/22 12:12:12PM",
      },
    ],
    history: [
      {
        property: "Assignment Change",
        old_value: "Tom D",
        new_value: "Tom F",
        date_changed: "21/08/22 11:11:11PM",
      },
    ],
    attachments: [
      {
        file: "ScreenshotOne",
        uploader: "Tom E",
        notes: "Screenshot",
        created: "31/12/22 12:12:12PM",
      },
    ],
  };

  return (
    <Container>
      <BlocksContainer>
        <TicketInfo />
        <DividerUp />
        <TicketComments ticketComments={ticketData.comments} />
      </BlocksContainer>
      <DividerLine />
      <BlocksContainer>
        <TicketHistory ticketHistory={ticketData.history} />
        <DividerUp />
        <TicketAttachments ticketAttachments={ticketData.attachments} />
      </BlocksContainer>
    </Container>
  );
};

export default TicketDetails;