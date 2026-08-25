'use client';
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ReorderIcon from '@mui/icons-material/Reorder';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

type TopMenuProps = {
  direction: "row" | "column";
  onMenuClick?: () => void;
};

const TopMenu = ({ direction, onMenuClick }: TopMenuProps) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/thylyda_resume.pdf';
      link.download = 'thylyda_resume';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  const menus = [
    { label: "Home", id: "home", icon: <HomeIcon fontSize="small" />, onClick: () => handleClick("home") },
    { label: "Resume", id: "resume", icon: <CloudDownloadIcon fontSize="small" />, onClick: handleDownload },
    { label: "Projects", id: "projects", icon: <ReorderIcon fontSize="small" />, onClick: () => handleClick("projects") },
    { label: "Contact", id: "contactMe", icon: <PermContactCalendarIcon fontSize="small" />, onClick: () => handleClick("contactMe") },
  ];

  const wrapMenuStyle = (direction === "row") 
    ? "flex-row justify-end p-10" 
    : "flex-col text-white";

  const buttonStyle = (direction !== "row") 
    ? "!border-none text-white !justify-start"
    : "";
    
  const buttonVariant = (direction === "row")
    ? "outlined"
    : "text";

  return (
    <div className={`flex ${wrapMenuStyle} gap-2 `}>
      {menus.map((menu, index) => (
        <Button
          key={index}
          onClick={() => {
            menu.onClick();
            onMenuClick?.();
          }}
          variant= {buttonVariant}
          color="inherit"
          className={`active:!bg-secondary gap-2 hover:!bg-secondary hover:!text-black active:!text-black ${buttonStyle}`}
          aria-label="menu"
        >
          {menu.icon} &nbsp;
          {menu.label}
        </Button>
      ))}
    </div>
  );
}

export default TopMenu;
