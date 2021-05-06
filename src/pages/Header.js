import * as React from "react";
import { IconButton } from "@material-ui/core"
import { Menu } from "@material-ui/icons"


const Header = () => {
  return (
    <React.Fragment>
      <IconButton edge="start" aria-label="menu">
        <Menu />
      </IconButton>
    </React.Fragment>
  )
}
export default Header