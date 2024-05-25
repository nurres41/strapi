import { Outlet } from "@remix-run/react";

const Contacts = () => {
  return (
    <div>
        <h1>Contact Layout</h1>
        <Outlet />
    </div>
  )
}

export default Contacts
