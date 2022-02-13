import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../hooks/useLocalStorage"

const AssignmentsContext = React.createContext()

export function useAssignments() {
    return useContext(AssignmentsContext)
  }

  export const AssignmentsProvider = ({ children }) => {
    const [modules, setModules] = useLocalStorage("modules", [])
    const [assignments, setAssignments] = useLocalStorage("assignments", [])

    function addModule({ name, colour }) {
        setModules(prevModules => {
            return [...prevModules, {id: uuidV4(), name, colour }]
        })
    }

    function deleteModule({ id }) {
      setModules(prevModules => {
        return prevModules.filter(module => module.id !== id)
      })
    }

    function addAssignment({ name, module, date, percent }) {
      setAssignments(prevAssignments => {
          return [...prevAssignments, {id: uuidV4(), name, module, date, percent }]
      })
    }

    function deleteAssignment({ name }) {
      setAssignments(prevAssignments => {
        return prevAssignments.filter(assignment => assignment.name !== name)
      })
    }

    function updateAssignment({ id, newDate, newPercent }) {
      setAssignments(prevAssignments => {
        return prevAssignments.map(assignment =>
        assignment.id === id
          ? {...assignment, date: newDate, percent: newPercent}
          : assignment
        );
      })
    }

  return (
    <AssignmentsContext.Provider
      value={{
          modules,
          addModule,
          deleteModule,
          assignments,
          addAssignment,
          deleteAssignment,
          updateAssignment,
      }}
    >
      {children}
    </AssignmentsContext.Provider>
  )
}