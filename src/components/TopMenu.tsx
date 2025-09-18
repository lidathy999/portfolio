'use client';
import Button from "@mui/material/Button";

export default function TopMenu() {
  const menus = [
    { label: "Home", id: "home" },
    // { label: "About", id: "aboutMe" },
    { label: "Resume", id: "resume" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contactMe" },
  ];

  return (
    <div className="flex flex-row gap-2 justify-end pr-5 pt-3">
      {menus.map((menu, index) => (
        <Button 
        key={index}
         variant="outlined" 
         color="inherit"
         className="active:!bg-secondary hover:!bg-secondary hover:!text-black active:!text-black"
         
         >
          {menu.label}
         </Button>
      ))}
    </div>
  );
}
