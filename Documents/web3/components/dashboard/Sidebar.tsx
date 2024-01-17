"use client"
import React, { useState } from 'react';
import { LayoutDashboard, Shapes, Landmark, GanttChartSquare } from 'lucide-react'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationItem = {
  name: string;
  pageName: string;
  icon: JSX.Element;
};

// type SidebarProps = {
//   onNavigate: (pageName: string) => void;
// };

const navigationItems: NavigationItem[] = [
  {
    name: "Dashboard",
    pageName: "/",
    icon: <LayoutDashboard className="w-6 h-6" />,
  },
  {
    name: "Pools",
    pageName: "/Pools",
    icon: <Shapes className="w-6 h-6" />,
  },
  {
    name: "Portfolio",
    pageName: "/Portfolio",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    name: "AssetsDirectory",
    pageName: "/AssetsDirectory",
    icon: <GanttChartSquare className="w-6 h-6" />,
  },
];

const Sidebar = () => {
  const pathname = usePathname()
  console.log(pathname)
  const [hoverIndex, setHoverIndex] = useState(-1);
  

  const itemStyleOne = (isHovered: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    marginTop: '8px',
    fontSize: '16px',
    fontWeight: 'normal',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: isHovered ? '#E2E8F0' : 'white',
    borderLeft: '4px solid transparent',
    transition: 'background-color 0.3s',
    textDecaration:'none',
    color:'black',
    
    
  });

  const itemStyleTwo = (isHovered: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    marginTop: '8px',
    fontSize: '16px',
    fontWeight: 'normal',
    borderRadius: '8px',
    cursor: 'pointer',
    // backgroundColor: isHovered ? '#E2E8F0' : 'white',
    borderLeft: '4px solid transparent',
    transition: 'background-color 0.3s',
    textDecaration:'overline',
    
    backgroundColor:'#E2E8F0'
    
  });

  return (
    <div style={{ height: '100vh', width: '256px', backgroundColor: '#ffffff', borderRight: '1px solid #eaeaea', color: '#4B5563' }}>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
        {navigationItems.map((item, index) => (
        <Link href={item?.pageName}> 
          {(pathname === item.pageName) ? <div
           
           key={item.name}
           // onClick={() => onNavigate(item.pageName)}
           onMouseEnter={() => setHoverIndex(index)}
           onMouseLeave={() => setHoverIndex(-1)}
           style={itemStyleTwo(hoverIndex === index)}
         >
           {item.icon}
           <span style={{ marginLeft: '12px' }}>{item.name}</span>
         </div>: <div
           
           key={item.name}
           // onClick={() => onNavigate(item.pageName)}
           onMouseEnter={() => setHoverIndex(index)}
           onMouseLeave={() => setHoverIndex(-1)}
           style={itemStyleOne(hoverIndex === index)}
         >
           {item.icon}
           <span style={{ marginLeft: '12px' }}>{item.name}</span>
         </div>}
          </Link>
        ))}
       
      </div>
    </div>
  );
};

export default Sidebar;
