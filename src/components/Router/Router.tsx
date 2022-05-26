import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AddSyllabusPage,
  DashboardPage,
  SyllabusPage,
  InstitutionPage,
  SubjectPage,
  TeacherPage,
} from "../../pages";

export const RouterPicker = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/syllabus" element={<SyllabusPage />} />
        <Route path="/syllabus/add" element={<AddSyllabusPage />} />
        <Route path="/institution" element={<InstitutionPage />} />
        <Route path="/subjects" element={<SubjectPage />} />
        <Route path="/teachers" element={<TeacherPage />} />
      </Routes>
    </BrowserRouter>
  );
};
