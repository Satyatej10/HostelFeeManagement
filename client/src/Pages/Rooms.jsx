import React, { useState } from "react";
import "./Rooms.css";

const floors = [1, 2, 3, 4, 5]; // 5 floors

// Function to generate rooms for each floor
const generateRooms = () => {
  let rooms = {};
  floors.forEach((floor) => {
    rooms[floor] = Array.from({ length: 12 }, (_, i) => ({
      number: floor * 100 + i + 1, // Room numbers: 201, 202, ..., 212
      sharing: [2, 3, 4][Math.floor(Math.random() * 3)], // Random 2,3,4-sharing
      occupied: Math.floor(Math.random() * 5), // Random occupied count (0 to 4)
    }));
  });
  return rooms;
};

const roomData = generateRooms();

const Rooms = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);

  const selectedRooms = roomData[selectedFloor];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Hostel Rooms</h2>
      <p className="mb-4">Check available hostel rooms here.</p>

      {/* Floor Selection */}
      <div className="mb-6">
        <label className="font-semibold mr-2">Select Floor:</label>
        <select
          className="border p-2 rounded"
          value={selectedFloor}
          onChange={(e) => setSelectedFloor(Number(e.target.value))}
        >
          {floors.map((floor) => (
            <option key={floor} value={floor}>
              {floor}st Floor
            </option>
          ))}
        </select>
      </div>

      {/* Rooms Display in Proper 3 Rows, 4 Columns */}
      <div className="grid grid-cols-4 gap-6">
        {selectedRooms.map((room) => {
          const { number, sharing, occupied } = room;
          const vacancy = sharing - occupied;
          let statusClass = "";
          let buttonMessage = "";
          
          if (vacancy === sharing) {
            // Fully vacant room (Green color and "Book Now" button)
            statusClass = "bg-green-500";
            buttonMessage = "Book Now";
          } else if (vacancy > 0 && vacancy < sharing) {
            // Partially filled room (Yellow color and "Book Now" button)
            statusClass = "bg-yellow-500";
            buttonMessage = "Book Now";
          } else {
            // Fully filled room (Red color and no vacancies)
            statusClass = "bg-red-500";
            buttonMessage = "Room is filled, no vacancies";
          }

          return (
            <div
              key={number}
              className="flex flex-col items-center p-4 border rounded-lg"
            >
              <h3 className="text-lg font-semibold">{number}</h3>
              <div className={`w-full p-3 text-white rounded ${statusClass} mt-2`}>
                <p>Total Beds: {sharing}</p>
                <p>Occupied: {occupied}</p>
                <p>Vacancy: {vacancy}</p>
                {vacancy > 0 ? (
                  <button className="book-btn mt-2">{buttonMessage}</button>
                ) : (
                  <p className="text-sm mt-2 text-gray-100">{buttonMessage}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
