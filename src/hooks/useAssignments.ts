"use client";

import { useState, useEffect } from "react";

export interface Submission {
  studentId: string;
  submittedAt: string;
  answer?: string;
  status: "Pending" | "Submitted" | "Graded";
  grade?: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  assignedStudentIds: string[]; // "all" or specific list of student IDs
  submissions: Submission[];
}

const DEFAULT_ASSIGNMENTS: Assignment[] = [
  {
    id: "a1",
    title: "Trade Finance Assessment",
    description: "Write a summary analyzing key factors in international letter of credits.",
    dueDate: "Due in 3 days",
    assignedStudentIds: ["all"],
    submissions: [
      { studentId: "s1", submittedAt: "2024-05-15", status: "Submitted", answer: "I analyzed international letters of credits..." }
    ]
  },
  {
    id: "a2",
    title: "Customs Clearance Case Study",
    description: "Prepare a breakdown of customs delays for the selected supply route.",
    dueDate: "Due in 7 days",
    assignedStudentIds: ["all"],
    submissions: []
  }
];

export function useAssignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("merkanto_assignments");
    if (saved) {
      try {
        setAssignments(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse assignments", e);
        setAssignments(DEFAULT_ASSIGNMENTS);
      }
    } else {
      setAssignments(DEFAULT_ASSIGNMENTS);
      localStorage.setItem("merkanto_assignments", JSON.stringify(DEFAULT_ASSIGNMENTS));
    }
    setIsLoaded(true);
  }, []);

  const save = (newAssignments: Assignment[]) => {
    setAssignments(newAssignments);
    localStorage.setItem("merkanto_assignments", JSON.stringify(newAssignments));
  };

  const addAssignment = (data: Omit<Assignment, "id" | "submissions">) => {
    const newAssignment: Assignment = {
      ...data,
      id: Math.random().toString(36).substring(2, 9),
      submissions: []
    };
    save([...assignments, newAssignment]);
  };

  const submitAssignment = (assignmentId: string, studentId: string, answer: string) => {
    const updated = assignments.map(a => {
      if (a.id === assignmentId) {
        const otherSubmissions = a.submissions.filter(s => s.studentId !== studentId);
        const newSubmission: Submission = {
          studentId,
          submittedAt: new Date().toISOString().split("T")[0],
          answer,
          status: "Submitted"
        };
        return {
          ...a,
          submissions: [...otherSubmissions, newSubmission]
        };
      }
      return a;
    });
    save(updated);
  };

  const gradeAssignment = (assignmentId: string, studentId: string, grade: string) => {
    const updated = assignments.map(a => {
      if (a.id === assignmentId) {
        const submissions = a.submissions.map(s => {
          if (s.studentId === studentId) {
            return { ...s, grade, status: "Graded" as const };
          }
          return s;
        });
        return { ...a, submissions };
      }
      return a;
    });
    save(updated);
  };

  const deleteAssignment = (id: string) => {
    save(assignments.filter(a => a.id !== id));
  };

  return {
    assignments,
    isLoaded,
    addAssignment,
    submitAssignment,
    gradeAssignment,
    deleteAssignment
  };
}
