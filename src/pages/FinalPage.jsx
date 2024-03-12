import React from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

const FinalPage = ({ groupMembers }) => {
  // Retrieve answers from local storage
  const answers = JSON.parse(localStorage.getItem("answers")) || [];

  // Calculate counts of true and false responses for items 1-5
  const firstFifteenTrueCount = answers
    .slice(0, 10)
    .filter((answer) => answer === true).length;
  const firstFifteenFalseCount = answers
    .slice(0, 10)
    .filter((answer) => answer === false).length;

  const FileTrueCount = answers
    .slice(10, 16)
    .filter((answer) => answer === true).length;
  const FileFalseCount = answers
    .slice(10, 16)
    .filter((answer) => answer === false).length;

  const NetworkTrueCount = answers
    .slice(16, 21)
    .filter((answer) => answer === true).length;
  const NetworkFalseCount = answers
    .slice(16, 21)
    .filter((answer) => answer === false).length;

  const LogsTrueCount = answers
    .slice(21, 24)
    .filter((answer) => answer === true).length;
  const LogsFalseCount = answers
    .slice(21, 24)
    .filter((answer) => answer === false).length;

  const SecurityTrueCount = answers
    .slice(24)
    .filter((answer) => answer === true).length;
  const SecurityFalseCount = answers
    .slice(24)
    .filter((answer) => answer === false).length;

  return (
    <div className="container mx-auto p-4 background">
      <div className="flex lg:gap-4 gap-1 md:gap-3 w-full flex-wrap">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-normal">
              Auditing Account Management and Password Controls
            </span>
            <div className="flex items-center">
              <strong className=" text-base text-green-500 pl-2">
                {firstFifteenTrueCount} Ticks
              </strong>
              <strong className=" text-base text-red-500 pl-2">
                {firstFifteenFalseCount} Crosses
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-normal">
              Auditing File Security and Controls
            </span>
            <div className="flex items-center">
              <strong className=" text-base text-green-500 pl-2">
                {FileTrueCount} Ticks
              </strong>
              <strong className=" text-base text-red-500 pl-2">
                {FileFalseCount} Crosses
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-normal">
              Auditing Network Security and Controls
            </span>
            <div className="flex items-center">
              <strong className=" text-base text-green-500 pl-2">
                {NetworkTrueCount} Ticks
              </strong>
              <strong className=" text-base text-red-500 pl-2">
                {NetworkFalseCount} Crosses
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-normal">
              Auditing Audit Logs
            </span>
            <div className="flex items-center">
              <strong className=" text-base text-green-500 pl-2">
                {LogsTrueCount} Ticks
              </strong>
              <strong className=" text-base text-red-500 pl-2">
                {LogsFalseCount} Crosses
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-normal">
              Auditing Security Monitoring and General Controls
            </span>
            <div className="flex items-center">
              <strong className=" text-base text-green-500 pl-2">
                {SecurityTrueCount} Ticks
              </strong>
              <strong className=" text-base text-red-500 pl-2">
                {SecurityFalseCount} Crosses
              </strong>
            </div>
          </div>
        </BoxWrapper>
      </div>
      <h1 className="text-white mt-5 text-center font-semibold text-2xl">
        Group Members
      </h1>
      {groupMembers.map((groupMember, index) => (
        <div
          key={index}
          className={`p-4 my-2 ${
            index % 2 === 0 ? "bg-gray-300" : "bg-slate-400"
          } rounded-sm shadow shadow-gray-400`}
        >
          <div className="flex justify-start items-baseline gap-2">
            <h2 className="text-lg font-bold mb-2 capitalize">
              {groupMember.name}
            </h2>
          </div>
          <p className="text-gray-600">
            Index Number:{" "}
            <span className="font-bold ">{groupMember.index_number}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default FinalPage;

function BoxWrapper({ children }) {
  return (
    <div className="bg-gray-300 rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
