import { useState } from "react";
import EmployeeForm from "../components/employeeForm";
import EmployeeTable from "../components/employeeTable";

export default function Dashboard() {
    const [employeeData, setEmployeeData] = useState([
        { id: 1, names: 'Juan', lastNames: 'Pérez', curp: 'JUAP800101HDFRRN09', rfc: 'JUAP800101ABC', nationality: 'mexican', birthDate: '1980-01-01', email: 'juan.perez@email.com', phone: '5551234567', country: 'mx', city: 'cdmx', contractType: 'full_time', role: 'developer', startDate: '2022-01-10', availabilityRange: '2025-01-01|2025-12-31', shift: 'day', medicalInsurance: true, remoteWork: false, bonus: true, comments: 'Empleado destacado.' },
        { id: 2, names: 'Ana', lastNames: 'García', curp: 'AANG900202MDFRRL05', rfc: 'AANG900202DEF', nationality: 'colombian', birthDate: '1990-02-02', email: 'ana.garcia@email.com', phone: '5559876543', country: 'co', city: 'medellin', contractType: 'part_time', role: 'designer', startDate: '2023-03-15', availabilityRange: '2025-06-01|2025-12-01', shift: 'night', medicalInsurance: false, remoteWork: true, bonus: false, comments: '' }
    ]);

    const [editingEmployee, setEditingEmployee] = useState(undefined);

    const handleSave = (data: any) => {
        if (data.id) {
            // Edit
            setEmployeeData(prev => prev.map(emp => emp.id === data.id ? { ...emp, ...data } : emp));
        } else {
            // Add
            const newId = Math.max(0, ...employeeData.map(e => e.id || 0)) + 1;
            setEmployeeData(prev => [...prev, { ...data, id: newId }]);
        }
        setEditingEmployee(undefined);
    };

    const handleEdit = (employee: any) => {
        setEditingEmployee(employee);
    };

    return (
        <>
            <EmployeeForm employee={editingEmployee} onSave={handleSave} />
            <EmployeeTable employeeData={employeeData} onEdit={handleEdit} />
        </>
    );
}
