import { personalData } from "../data/page-data";

import Sidebar from "./components/Sidebar";

import "../styles/globals.css";

export default function RootLayout({ children }) {
   return (
      <html>
         <head />
         <body>
            <Sidebar data={ personalData } />
            {children}
         </body>
      </html>
   )
}
