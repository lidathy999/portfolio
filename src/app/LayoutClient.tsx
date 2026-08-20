"use client";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import TopMenu from "@/components/TopMenu";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ open, setOpen ] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onMenuClick = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="Open navigation"
        onClick={handleOpen}
        className="block sm:!hidden"
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        <div className="zIndex-100 w-72 min-h-screen bg-drawer border-secondary backdrop-blur-none p-6">
          <TopMenu direction="column" onMenuClick={onMenuClick}/>
        </div>
      </SwipeableDrawer>

      {children}
    </>
  );
}