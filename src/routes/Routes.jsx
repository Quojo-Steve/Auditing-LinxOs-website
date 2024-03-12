import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Starting from "../pages/Starting";
import ChecklistItem from "../pages/ChecklistItem";
import ChecklistSummary from "../pages/ChecklistSummary";
import checklistData from "../checklistData";
import FinalPage from "../pages/FinalPage";
import groupMembers from "../groupMembers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Starting />} />
      <Route
        path="/checklist"
        element={<ChecklistItem questions={checklistData} />}
      />
      <Route
        path="/summary"
        element={<ChecklistSummary questions={checklistData} />}
      />
      <Route
        path="/finalpage"
        element={<FinalPage groupMembers={groupMembers} />}
      />
    </Route>
  )
);

export default router;
