import React from "react";
import styled from "styled-components";

const Tag = styled.div`
  width: fit-content;
  border: 1px solid ${(props) => props.color && props.color};
  border-radius: 4px;
  padding: 4px 8px;
  color: ${(props) => props.color && props.color};
  font-size: 10.5px;
  text-transform: uppercase;
  text-align: center;
`;

const TagInfo = ({ tagText, tagColor }) => {
  // Pick a tag color
  const handleTagColor = (color) => {
    switch (color) {
      case "Blue":
        return "#498fc5";
      case "Grey":
        return "#939393";
      case "Red":
        return "#e03142";
      default:
        return "";
    }
  };

  return <Tag color={handleTagColor(tagColor)}>{tagText}</Tag>;
};

export default TagInfo;
