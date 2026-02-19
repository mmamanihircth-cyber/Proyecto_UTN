import { Outlet } from "react-router-dom"
import ContactSidebear from '../../Components/ContactSidebear/ContactSidebear'
import { SidebearLeft } from "../../Components/SidebearLeft/SidebearLeft"

export default function Layout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
        <SidebearLeft />
        <ContactSidebear />
        <div style={{flex:1}}>
            <Outlet />
        </div>
    </div>
  )
}