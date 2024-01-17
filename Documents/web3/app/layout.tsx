import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
// import NewSidebar from "@/components/dashboard/NewSidebar"


function RootLayout({ children }: { children: React.ReactNode }) {

 
  return (
    <html lang="en">
      <body>
       
        <Providers>
          <Header/>
          <div style={{display:'flex'}}> 
        <Sidebar/> 
          {children}
          </div>
        </Providers>
        </body>
    </html>
  );
}

export default RootLayout;
