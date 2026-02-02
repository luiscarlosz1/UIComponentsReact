import { UiTableManager } from "@luiscarlosz1/react-library";
import { UiTableHeader } from "../../../Design_System_Stencil/packages/stencil-library/dist/types/components/ui-table/models";
import { EmployeeFormModel } from "../models/employeeForm.models";

export default function EmployeeTable({ employeeData, onEdit, onDelete }: { employeeData: EmployeeFormModel[], onEdit?: (row: any) => void, onDelete?: (curp: string) => void }) {
    const employeeHeaders: UiTableHeader[] = [
        { field: 'names', text: 'First Name', width: '170px' },
        { field: 'lastNames', text: 'Last Name', width: '170px' },
        { field: 'email', text: 'Email', width: '170px' },
        { field: 'role', text: 'Role', width: '170px' },
        { field: 'country', text: 'Country' },
        { field: 'city', text: 'City' },
        { field: 'contractType', text: 'Contract Type' },
        { field: 'shift', text: 'Shift' },
        { field: 'medicalInsurance', text: 'Medical Insurance' },
        { field: 'remoteWork', text: 'Remote Work' },
        { field: 'bonus', text: 'Bonus' },
        { field: 'startDate', text: 'Start Date' },
        { field: 'birthDate', text: 'Birth Date' },
        { field: 'availabilityRange', text: 'Availability' },
        { field: 'comments', text: 'Comments' },
        { field: 'actions', text: 'Actions', width: '200px' }
    ];

    const renderActionsCell = (_: any, row: any) => {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.gap = '8px';

        const btnEdit = document.createElement('ui-button');
        btnEdit.setAttribute('label', 'Edit');
        btnEdit.addEventListener('buttonClick', () => onEdit && onEdit(row));

        const btnDelete = document.createElement('ui-button');
        btnDelete.setAttribute('label', 'Delete');
        btnDelete.setAttribute('color', 'secondary');
        btnDelete.addEventListener('buttonClick', () => onDelete && onDelete(row.curp));

        container.appendChild(btnEdit);
        container.appendChild(btnDelete);
        return container;
    };

    return (
        <UiTableManager
            style={{ overflow: "auto" }}
            data={employeeData}
            headers={employeeHeaders}
            stickyColumns={{ left: 4, right: 1 }}
            templates={{ cell: { actions: renderActionsCell } }}
        />
    );
}
