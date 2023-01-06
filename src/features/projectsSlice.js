import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Projects: {},
  // isLoading: false,
  Projects: {
    project_01: {
      project_name: "Project One",
      description: "Our first project",
      start_date: "31/12/22",
      end_date: "01/16/23",
      priority: "Normal",
      progress: 0,
      status: "Open",
      attachment: {},
      tickets: {
        ticket_01: {
          project_id: "project_01",
          ticket_name: "Ticket One",
          created_by: "Tom C",
          developer_assigned: "Tom E",
          description: "This is ticket #1",
          type: "Bug/Errors",
          status: "Open",
          priority: "High",
          created_date: "27/08/22",
          history: {
            event_01: {
              date: "27/08/22",
              title: "Ticket Created",
              author: "Tom C",
              detail: "Ticket was submitted by: Tom F",
            },
          },
          comments: {
            comment_01: {
              author: "Tom C",
              date: "27/08/22",
              comment: "Reach out if you need help on this one!",
            },
          },
          attachments: {},
        },
        ticket_02: {
          project_id: "project_01",
          ticket_name: "Ticket Two",
          created_by: "Tom B",
          developer_assigned: "Tom G",
          description: "This is ticket #2",
          type: "System error",
          status: "Open",
          priority: "Medium",
          created_date: "02/01/23",
          history: {
            event_01: {
              date: "06/02/23",
              title: "Ticket Created",
              author: "Tom A",
              detail: "Ticket was submitted by: Tom A",
            },
          },
          comments: {
            comment_01: {
              author: "Tom B",
              date: "07/01/23",
              comment: "I am available to help with this one!",
            },
          },
          attachments: {},
        },
      },
    },
  },
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;