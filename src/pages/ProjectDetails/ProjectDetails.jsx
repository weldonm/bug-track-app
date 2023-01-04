import React from "react";
import { useParams } from "react-router-dom";
import UserAssigned from "./_UserAssigned";
import TicketsAssigned from "./_TicketsAssigned";
import ProjectInfo from "./_ProjectInfo";

const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id);

  const projectDetail = {
    project_id: 1,
    project_name: "Project: 1",
    description: "Description here...",
    created: "12/13/22 4:44 PM",
    users_assigned: [
      { user_name: "Tom B", email: "tomb@mail.com", role: "Admin" },
      {
        user_name: "Tom E",
        email: "tome@mail.com",
        role: "Project Manager",
      },
      {
        user_name: "Tom H",
        email: "tomh@mail.com",
        role: "Support Specialist",
      },
    ],
    tickets_assigned: [
      {
        title: "Ticket: 0",
        submitter: "willwonka",
        developer: "Tom E",
        status: "Open",
        created: "12/13/22 4:44 PM",
      },
      {
        title: "Ticket: 1",
        submitter: "doublese7en",
        developer: "Tom H",
        status: "In Progress",
        created: "12/13/22 4:44 PM",
      },
    ],
  };

  return (
    <>
      {/* ----- Header ----- */}
      <ProjectInfo />
      {/* ----- Project Main Details ----- */}
      <UserAssigned userList={projectDetail.users_assigned} />
      <TicketsAssigned ticketList={projectDetail.tickets_assigned} />
    </>
  );
};

export default ProjectDetails;