// const userInfo = [
//   {
//     id: 1,
//     name: "Oliver Liam",
//     companyName: "Viking Buritto",
//     emailAddress: "oliver@buritto.com",
//     vatNumber: "FRB1235476",
//   },
//   {
//     id: 2,
//     name: "Oliver Liam",
//     companyName: "Viking Buritto",
//     emailAddress: "oliver@buritto.com",
//     vatNumber: "FRB1235476",
//   },
//   {
//     id: 3,
//     name: "Oliver Liam",
//     companyName: "Viking Buritto",
//     emailAddress: "oliver@buritto.com",
//     vatNumber: "FRB1235476",
//   },
// ];

// export default function BillingInfo() {
//   return (
//     <div className="shadow rounded-2xl p-6">
//       <h5 className="text-gray-700 font-medium text-2xl mb-12">
//         Billing Information
//       </h5>
//       <div className="space-y-24 px-6">
//         {userInfo.map((items) => (
//           <div className="flex justify-between" key={items.id}>
//             <div>
//               <h5 className="text-gray-500 mb-4 text-xl font-medium">
//                 {items.name}
//               </h5>
//               <div className="space-y-1">
//                 <p className="text-gray-400 text-lg">
//                   Company name:{" "}
//                   <span className="font-medium text-gray-500">
//                     {items.companyName}
//                   </span>
//                 </p>
//                 <p className="text-gray-400 text-lg">
//                   Email Address:{" "}
//                   <span className="font-medium text-gray-500">
//                     {items.emailAddress}
//                   </span>
//                 </p>
//                 <p className="text-gray-400 text-lg">
//                   VAT Number:{" "}
//                   <span className="font-medium text-gray-500">
//                     {items.vatNumber}
//                   </span>
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-8">
//               <button className="text-red-500 font-medium text-lg cursor-pointer">
//                 <i className="ri-delete-bin-7-fill"></i> Delete
//               </button>
//               <button className="text-gray-700 font-medium text-lg cursor-pointer">
//                 <i className="ri-pencil-fill"></i> Edit
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

type UserInfo = {
  id: number;
  name: string;
  companyName: string;
  emailAddress: string;
  vatNumber: string;
};

const initialUserInfo = [
  {
    id: 1,
    name: "Oliver Liam",
    companyName: "Viking Buritto",
    emailAddress: "oliver@buritto.com",
    vatNumber: "FRB1235476",
  },
  {
    id: 2,
    name: "Oliver Liam",
    companyName: "Viking Buritto",
    emailAddress: "oliver@buritto.com",
    vatNumber: "FRB1235476",
  },
  {
    id: 3,
    name: "Oliver Liam",
    companyName: "Viking Buritto",
    emailAddress: "oliver@buritto.com",
    vatNumber: "FRB1235476",
  },
];

export default function BillingInfo() {
  const [userInfo, setUserInfo] = useState<UserInfo[]>(initialUserInfo);
  const [editingUser, setEditingUser] = useState<UserInfo | null>(null);
  const [open, setOpen] = useState(false);

  const handleDelete = (id: number) => {
    setUserInfo((prev) => prev.filter((user) => user.id !== id));
  };

  const handleEdit = (user: UserInfo) => {
    setEditingUser({ ...user });
    setOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditingUser((prev) =>
      prev
        ? {
            ...prev,
            [name]: value,
          }
        : null,
    );
  };

  const handleSave = () => {
    if (!editingUser) return;

    setUserInfo((prev) =>
      prev.map((user) => (user.id === editingUser.id ? editingUser : user)),
    );

    setOpen(false);
    setEditingUser(null);
  };

  return (
    <>
      <div className="shadow rounded-2xl p-6">
        <h5 className="text-gray-700 font-semibold text-2xl mb-12">
          Billing Information
        </h5>

        <div className="space-y-24 px-6">
          {userInfo.map((item) => (
            <div className="flex justify-between" key={item.id}>
              <div>
                <h5 className="text-gray-500 mb-4 text-xl font-semibold">
                  {item.name}
                </h5>

                <div className="space-y-1">
                  <p className="text-gray-400 text-base">
                    Company Name:{" "}
                    <span className="font-medium text-gray-500">
                      {item.companyName}
                    </span>
                  </p>

                  <p className="text-gray-400 text-base">
                    Email Address:{" "}
                    <span className="font-medium text-gray-500">
                      {item.emailAddress}
                    </span>
                  </p>

                  <p className="text-gray-400 text-base">
                    VAT Number:{" "}
                    <span className="font-medium text-gray-500">
                      {item.vatNumber}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 font-medium text-base cursor-pointer"
                >
                  <i className="ri-delete-bin-7-fill"></i> Delete
                </button>

                <button
                  onClick={() => handleEdit(item)}
                  className="text-gray-700 font-medium text-base cursor-pointer"
                >
                  <i className="ri-pencil-fill"></i> Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Billing Information</DialogTitle>
          </DialogHeader>

          {editingUser && (
            <div className="space-y-4 py-4">
              <input
                name="name"
                value={editingUser.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                name="companyName"
                value={editingUser.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                name="emailAddress"
                value={editingUser.emailAddress}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border rounded-lg p-3"
              />

              <input
                name="vatNumber"
                value={editingUser.vatNumber}
                onChange={handleChange}
                placeholder="VAT Number"
                className="w-full border rounded-lg p-3"
              />
            </div>
          )}

          <DialogFooter>
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-400 rounded-2xl px-6 text-white text-base font-medium py-3 cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="bg-teal-400 cursor-pointer text-white rounded-2xl px-6 py-3 text-base font-medium"
            >
              Save Changes
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
