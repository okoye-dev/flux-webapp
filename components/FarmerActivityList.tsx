"use client";
import React from "react";

export default function FarmerActivityList() {
  const farmerActivityData = [
    {
      farmerName: "John Mwangi",
      activity: "Pest Report - Maize",
      urgency: "High",
      date: "12/02/2024",
    },
    {
      farmerName: "Mary Wanjiku",
      activity: "Weather Alert Response",
      urgency: "Medium",
      date: "12/02/2024",
    },
    {
      farmerName: "Peter Kimani",
      activity: "Harvest Advice Followed",
      urgency: "Low",
      date: "12/02/2024",
    },
    {
      farmerName: "Grace Njeri",
      activity: "Irrigation Schedule Update",
      urgency: "Medium",
      date: "12/02/2024",
    },
    {
      farmerName: "David Ochieng",
      activity: "Market Price Query",
      urgency: "Low",
      date: "12/02/2024",
    },
    {
      farmerName: "Sarah Akinyi",
      activity: "Disease Report - Tomatoes",
      urgency: "High",
      date: "12/02/2024",
    },
    {
      farmerName: "James Mutua",
      activity: "Planting Advice Request",
      urgency: "Medium",
      date: "12/02/2024",
    },
    {
      farmerName: "Ruth Wambui",
      activity: "Financial Tips Inquiry",
      urgency: "Low",
      date: "12/02/2024",
    },
    {
      farmerName: "Michael Kiprop",
      activity: "Soil Testing Results",
      urgency: "Medium",
      date: "12/02/2024",
    },
    {
      farmerName: "Esther Muthoni",
      activity: "Crop Rotation Advice",
      urgency: "Low",
      date: "12/02/2024",
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border p-8">
      <table className="min-w-full bg-white text-center text-sm font-light">
        <thead className="rounded-full bg-[#F7F7F7] text-[#646464]">
          <tr>
            <th className="rounded-bl-full rounded-tl-full px-4 py-2">#</th>
            <th className="px-4 py-2">Farmer Name</th>
            <th className="px-4 py-2">Activity</th>
            <th className="px-4 py-2">Urgency</th>
            <th className="rounded-br-full rounded-tr-full px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody className="min-w-full overflow-y-scroll bg-white text-center text-sm font-bold">
          {farmerActivityData.map((activity, index) => (
            <tr key={index}>
              <td className="border-b px-4 py-2">{index + 1}</td>
              <td className="border-b px-4 py-2">{activity.farmerName}</td>
              <td className="border-b px-4 py-2">{activity.activity}</td>
              <td className="border-b px-4 py-2">
                {activity.urgency == "High" ? (
                  <p className="px rounded-full bg-[#F71C1C1A] py-2 text-red">
                    {activity.urgency}
                  </p>
                ) : activity.urgency == "Medium" ? (
                  <p className="px rounded-full bg-[#FFA9441A] py-2 text-[#FFA944]">
                    {activity.urgency}
                  </p>
                ) : (
                  <p className="px rounded-full bg-[#23AC001A] py-2 text-green">
                    {activity.urgency}
                  </p>
                )}
              </td>
              <td className="border-b px-4 py-2">{activity.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div></div>
    </div>
  );
}
