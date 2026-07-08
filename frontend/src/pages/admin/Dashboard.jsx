import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import {
  Users,
  ShoppingBag,
  CalendarDays,
  UtensilsCrossed,
  IndianRupee,
} from "lucide-react";

const Dashboard = () => {
  const { axios } = useContext(AppContext);

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalBookings: 0,
    totalMenuItems: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const { data } = await axios.get("/api/dashboard");

        if (data.success) {
          setStats(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

        <div className="bg-white rounded-xl shadow-md p-6">
          <Users className="text-blue-500 mb-3" size={35} />
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold mt-2">
            {stats.totalUsers}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <ShoppingBag className="text-green-500 mb-3" size={35} />
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-3xl font-bold mt-2">
            {stats.totalOrders}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <CalendarDays className="text-orange-500 mb-3" size={35} />
          <h2 className="text-lg font-semibold">Bookings</h2>
          <p className="text-3xl font-bold mt-2">
            {stats.totalBookings}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <UtensilsCrossed className="text-red-500 mb-3" size={35} />
          <h2 className="text-lg font-semibold">Menu Items</h2>
          <p className="text-3xl font-bold mt-2">
            {stats.totalMenuItems}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <IndianRupee className="text-purple-500 mb-3" size={35} />
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-3xl font-bold mt-2">
            ₹{stats.totalRevenue}
          </p>
        </div>

      </div>

      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Welcome Admin 👋
        </h2>
        <p className="text-gray-600">
          Manage menu items, orders, bookings and users from the sidebar.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;