import { personalData } from "../data/page-data";

import Sidebar from "./components/Sidebar";

import "../styles/globals.css";

export default function RootLayout({ children }) {
   return (
      <html>
         <head />
         <body className="flex flex-col sm:flex-row">
            <Sidebar data={personalData} />
            <main className="grow-0 p-5 sm:p-12 w-full sm:basis-2/3 ml-auto">
               {children}
            </main>
         </body>
      </html>
   )
}
