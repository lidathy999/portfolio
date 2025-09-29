'use client';
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ReorderIcon from '@mui/icons-material/Reorder';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export default function TopMenu() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume_lyda.pdf';
        link.download = 'resume';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  const menus = [
    { label: "Home", id: "home", icon: <HomeIcon fontSize="small" />, onClick: () => handleClick("home") },
    // { label: "About", id: "aboutMe" },
    { label: "Resume", id: "resume", icon: <CloudDownloadIcon fontSize="small" />, onClick: handleDownload },
    { label: "Projects", id: "projects", icon: <ReorderIcon fontSize="small" />, onClick: () => handleClick("projects") },
    { label: "Contact", id: "contactMe", icon: <PermContactCalendarIcon fontSize="small" />, onClick: () => handleClick("contactMe") },
  ];


  return (
    <div className="flex flex-row gap-2 justify-end pr-5 pt-3">
      {menus.map((menu, index) => (
        <Button
          key={index}
          onClick={menu.onClick}
          variant="outlined"
          color="inherit"
          className="active:!bg-secondary hover:!bg-secondary hover:!text-black active:!text-black"
          aria-label="menu"
        >
          {menu.icon} &nbsp;
          {menu.label}
        </Button>
      ))}
    </div>
  );
}
