import User from "../models/userModel.js";
import Order from "../models/orderModel.js";
import Booking from "../models/bookingModel.js";
import Menu from "../models/menuModel.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalMenuItems = await Menu.countDocuments();

    const revenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalAmount" }
        }
      }
    ]);

    res.json({
      success: true,
      totalUsers,
      totalOrders,
      totalBookings,
      totalMenuItems,
      totalRevenue: revenue.length ? revenue[0].totalRevenue : 0,
    });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal Server Error" });
  }
};