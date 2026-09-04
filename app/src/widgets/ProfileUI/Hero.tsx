import { Toggle } from "@/components/ui/toggle";
import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import Avater1 from "@/public/avater1.png";
import Avater2 from "@/public/avater2.png";
import Avater3 from "@/public/avater3.png";
import Avater4 from "@/public/avater4.png";
import Image from "next/image";

const accountConditions = [
  "Email me when someone follows me",
  "Email me when someone answers on my post",
  "Email me when someone mentions me",
];

const accountApplications = [
  "New launches and projects",
  "Monthly product updates",
  "Subscribe to newsletter",
];

const conversations = [
  {
    avater: Avater1,
    name: "Esthera Jackson",
    message: "Hi! I need more information...",
  },
  {
    avater: Avater2,
    name: "Esthera Jackson",
    message: "Awesome work, can you change...",
  },
  {
    avater: Avater3,
    name: "Esthera Jackson",
    message: "Have a great afternoon...",
  },
  {
    avater: Avater4,
    name: "Esthera Jackson",
    message: "About files I can...",
  },
];

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        {/* PLATFORM SETTING */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Platform settings
          </h2>
          <p className="text-lg text-gray-400 font-medium mb-4">Account</p>
          <div className="space-y-3 mb-4">
            {accountConditions.map((items) => (
              <div key={items} className="flex items-center gap-2">
                <Toggle text="" />
                <p className="text-gray-400 text-sm">{items}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-400 mb-4 font-medium">Applications</p>
          <div className="space-y-4">
            {accountApplications.map((items) => (
              <div key={items} className="flex items-center gap-2">
                <Toggle text="" />
                <p className="text-gray-400 text-sm">{items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PROFILE INFORMATION */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h2>
          <p className="text-sm mb-8 text-gray-400 font-medium">
            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
            no. If two equally difficult paths, choose the one more painful in
            the short term (pain avoidance is creating an illusion of equality).
          </p>
          <div>
            <p className="text-sm mb-4 font-semibold text-gray-600">
              Full name:{" "}
              <span className="text-gray-400 font-medium">
                Alec M. Thompson
              </span>
            </p>
            <p className="text-sm mb-4 font-semibold text-gray-600">
              Mobile:{" "}
              <span className="text-gray-400 font-medium">
                (44) 123, 1234 123
              </span>
            </p>
            <p className="text-sm mb-4 font-semibold text-gray-600">
              Email:{" "}
              <span className="text-gray-400 font-medium">
                alecthompson@mail.com
              </span>
            </p>
            <div className="flex items-center gap-2">
              <div>
                <p className="text-sm mb-4 font-semibold text-gray-600">
                  Social Media:
                </p>
              </div>
              <div className="flex items-center gap-4">
                <LuFacebook className="text-teal-300" />
                <LuTwitter className="text-teal-300" />
                <LuInstagram className="text-teal-300" />
              </div>
            </div>
          </div>
        </div>

        {/* CONVERSATION */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Conversations
          </h2>
          <div className="space-y-4">
            {conversations.map((convo) => (
              <div
                key={convo.message}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Image src={convo.avater} alt={convo.name} />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">
                      {convo.name}
                    </h4>
                    <p className="text-gray-400 text-sm font-medium">
                      {convo.message}
                    </p>
                  </div>
                </div>
                <button className="text-teal-300 hover:text-teal-200 cursor-pointer uppercase font-semibold text-sm">
                  Reply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
