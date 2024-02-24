import DashBoard from "@/pages/DashBoard"
import { Route, Routes } from "react-router-dom"

const RoutesManagement = () => {
	return (
		<Routes>
			<Route path="/" element={<DashBoard />} />
		</Routes>
	)
}

export default RoutesManagement
