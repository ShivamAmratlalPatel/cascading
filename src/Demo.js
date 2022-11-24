import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import CascadingMenu from "./CascadingMenu/CascadingMenu";

const menuItems = [
  {
    key: "1",
    caption: "Button 1",
    onClick: () => {}
  },
  {
    key: "2",
    caption: "Button 2",
    onClick: () => {}
  },
  {
    key: "3",
    caption: "Button 3",
    onClick: () => {}
  },
  {
    key: "group-1",
    caption: "Group 1",
    subMenuItems: [
      {
        key: "4",
        caption: "Button 4",
        onClick: () => {}
      },
      {
        key: "5",
        caption: "Button 5",
        onClick: () => {}
      },
      {
        key: "6",
        caption: "Button 6",
        onClick: () => {}
      }
    ]
  },
  {
    key: "group-2",
    caption: "Group 2",
    subMenuItems: [
      {
        key: "7",
        caption: "Button 7",
        onClick: () => {}
      },
      {
        key: "8",
        caption: "Button 8",
        onClick: () => {}
      },
      {
        key: "9",
        caption: "Button 9",
        onClick: () => {}
      }
    ]
  },
  {
    key: "group-3",
    caption: "Group 3",
    subMenuItems: [
      {
        key: "10",
        caption: "Button 9",
        onClick: () => {}
      },
      {
        key: "group-4",
        caption: "Group 4",
        subMenuItems: [
          {
            key: "11",
            caption: "Button 11",
            onClick: () => {}
          }
        ]
      }
    ]
  }
];

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorElement: null
    };
  }

  handleClick = event => {
    this.setState({ anchorElement: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorElement: null });
  };

  render() {
    const { anchorElement } = this.state;

    return (
      <React.Fragment>
        <IconButton
          aria-label="Toggle User Menu"
          aria-controls="user-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <AddIcon />
        </IconButton>
        <CascadingMenu
          anchorElement={anchorElement}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          menuItems={menuItems}
          onClose={this.handleClose}
          open={Boolean(anchorElement)}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        />
      </React.Fragment>
    );
  }
}

export default Demo;
