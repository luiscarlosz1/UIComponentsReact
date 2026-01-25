import { useRef, useState } from "react";
import { UiAutocomplete, UiButton, UiCheckbox, UiDatepicker, UiInput, UiRadiobutton, UiSelect, UiTextarea } from "@luiscarlosz1/react-library";
import './employeeForm.scss';
import {
    AVAILABILITY_RANGE_TEXT_OPTIONS,
    BIRTH_DATE_TEXT_OPTIONS,
    CITY_OPTIONS,
    CONTRACT_TYPE_OPTIONS,
    COUNTRY_OPTIONS,
    NATIONALITY_OPTIONS,
    ROLE_OPTIONS,
    SHIFT_OPTIONS,
    START_DATE_TEXT_OPTIONS
} from "./employeeForm.constants";
import { EmployeeFormModel } from "../models/employeeForm.models";

export default function EmployeeForm({ employee, onSave }: { employee?: EmployeeFormModel, onSave?: (data: any) => void }) {
    const validationMessages = {
        valueMissing: 'This field is required.',
        patternMismatch: 'The value does not match the required format.',
        tooShort: 'The value is too short.'
    };
    const formRef = useRef<HTMLFormElement>(null);
    const [localEmployee, setLocalEmployee] = useState<any | undefined>(undefined);
    const [isDeactivated, setIsDeactivated] = useState(false);

    const isEdit = !!employee?.id;

    const onSetValues = () => {
        if (!isEdit) {
            setLocalEmployee({
                names: 'Juan',
                lastNames: 'Pérez Gómez',
                curp: 'PEGA800101HDFRZN09',
                rfc: 'PEGA800101XXX',
                nationality: 'mexican',
                birthDate: '01/01/1994',
                email: 'juan.perez@example.com',
                phone: '5551234567',
                country: 'mx',
                city: 'cdmx',
                contractType: 'part_time',
                role: 'qa',
                startDate: '01/01/2024',
                availabilityRange: '01/01/2024|31/12/2024',
                shift: 'night',
                medicalInsurance: true,
                remoteWork: true,
                bonus: true,
                comments: 'Empleado de ejemplo'
            });
        }
    };

    const onSetIncorrectValues = () => {
        if (!isEdit) {
            setLocalEmployee((prev: EmployeeFormModel) => ({
                ...prev,
                curp: 'INVALIDCURP',
                rfc: 'SHORT',
                email: 'invalidEmailFormat',
                phone: '2123',
                birthDate: '1990-01-01',
                startDate: '2024-01-01',
            }));
        }
    };

    const onViewData = () => {
        const form = formRef.current;
        if (!form) return;
        const formDataObj: any = {};
        const elements = Array.from(form.elements) as HTMLInputElement[];
        elements.forEach(el => {
            const name = el.getAttribute('name');
            if (name) formDataObj[name] = el.value;
        }
        );
        console.log('Current Form Data:', formDataObj)
    };

    const onViewFormState = () => {
        const form = formRef.current;
        if (!form) return;
        const isValid = form.checkValidity();
        console.log(isValid ? 'Form is Valid' : 'Form is Invalid');
    };

    const onDeactivate = () => {
        setIsDeactivated((prev) => !prev);
    };

    const onReset = () => {
        setLocalEmployee(undefined);
        formRef?.current?.reset();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form || !form.current || !form.current.checkValidity()) return;
        const formDataObj: any = {};
        const elements = Array.from(form.elements) as HTMLInputElement[];

        elements.forEach(el => {
            const name = el.getAttribute('name');
            if (name) formDataObj[name] = el.value;
        });

        if (isEdit) { formDataObj.id = employee.id; }
        onSave && onSave(formDataObj);
        setLocalEmployee(undefined);
        form.reset();
    }

    const formData = isEdit ? employee : localEmployee;

    return (
        <form className="employee-form" ref={formRef} onSubmit={handleSubmit} noValidate>
            <fieldset disabled={isDeactivated} style={{ border: 'none', padding: 0, margin: 0 }}>
                <section>
                    <UiInput
                        required
                        label="First Name"
                        validationMessages={validationMessages}
                        {...{ name: 'names', value: formData?.names }} />
                    <UiInput
                        required
                        label="Last Name"
                        validationMessages={validationMessages}
                        {...{ name: 'lastNames', value: formData?.lastNames }} />
                    <UiInput
                        required
                        label="CURP"
                        minLength={18}
                        maxLength={18}
                        pattern="[A-Z]{4}\d{6}[HM][A-Z]{5}\d{2}"
                        hint="Unique Population Registry Code"
                        validationMessages={validationMessages}
                        {...{ name: 'curp', value: formData?.curp }} />
                    <UiInput
                        required
                        label="RFC"
                        minLength={13}
                        maxLength={13}
                        pattern="[A-Z]{4}\d{6}[A-Z0-9]{3}"
                        hint="Federal Taxpayer Registry"
                        validationMessages={validationMessages}
                        {...{ name: 'rfc', value: formData?.rfc }} />
                    <UiAutocomplete
                        required
                        label="Nationality"
                        placeholder="Select a nationality"
                        options={NATIONALITY_OPTIONS} 
                        validationMessages={validationMessages}
                        {...{ name: 'nationality', value: formData?.nationality }}
                        />
                    <UiDatepicker
                        required
                        textOptions={BIRTH_DATE_TEXT_OPTIONS}
                        pattern="dd/mm/yyyy"
                        validationMessages={validationMessages}
                        {...{ name: 'birthDate', value: formData?.birthDate }} />
                </section>

                <section>
                    <UiInput
                        label="Email"
                        type="email"
                        {...{ name: 'email', value: formData?.email }} />
                    <UiInput
                        label="Phone"
                        minLength={7}
                        pattern=".{7,}"
                        validationMessages={validationMessages}
                        {...{ name: 'phone', value: formData?.phone }} />
                    <UiSelect
                        label="Country"
                        {...{ name: 'country', value: formData?.country }}
                        options={COUNTRY_OPTIONS} />
                    <UiAutocomplete
                        label="City"
                        {...{ name: 'city', value: formData?.city }}
                        placeholder="Select a city"
                        options={CITY_OPTIONS} />
                </section>

                <section>
                    <UiRadiobutton
                        label="Contract Type"
                        {...{ name: 'contractType', value: formData?.contractType }}
                        options={CONTRACT_TYPE_OPTIONS} />
                    <UiSelect
                        label="Role"
                        {...{ name: 'role', value: formData?.role }}
                        required
                        options={ROLE_OPTIONS} />
                    <UiDatepicker
                        {...{ name: 'startDate', value: formData?.startDate }}
                        textOptions={START_DATE_TEXT_OPTIONS}
                        pattern="dd/mm/yyyy" />
                </section>

                <section>
                    <UiDatepicker
                        {...{ name: 'availabilityRange', value: formData?.availabilityRange }}
                        dateType="range"
                        textOptions={AVAILABILITY_RANGE_TEXT_OPTIONS} />
                    <UiRadiobutton
                        label="Shift"
                        {...{ name: 'shift', value: formData?.shift }}
                        options={SHIFT_OPTIONS} />
                </section>

                <section>
                    <UiCheckbox label="Medical Insurance" {...{ name: 'medicalInsurance', value: formData?.medicalInsurance }} />
                    <UiCheckbox label="Remote Work" {...{ name: 'remoteWork', value: formData?.remoteWork }} />
                    <UiCheckbox label="Bonuses" {...{ name: 'bonus', value: formData?.bonus }} />
                </section>

                <section>
                    <UiTextarea
                        label="Comments"
                        {...{ name: 'comments', value: formData?.comments }}
                        maxLength={300}
                        placeholder="Relevant additional information" />
                </section>
            </fieldset>
            <div className="employee-form__buttons">
                <UiButton color="primary" label="Set Values" onButtonClick={onSetValues} />
                <UiButton color="secondary" label="Set Incorrect Values" onButtonClick={onSetIncorrectValues} />
                <UiButton color="secondary" label="View Current Data" onButtonClick={onViewData} />
                <UiButton color="secondary" label="View Form State" onButtonClick={onViewFormState} />
                <UiButton color="success" label={isEdit ? "Edit Employee" : "Add Employee"} buttonType="submit" disabled={isDeactivated} />
                <UiButton color="secondary" label={isDeactivated ? "Activate" : "Deactivate"} onButtonClick={onDeactivate} />
                <UiButton color="tertiary" label="Reset" onButtonClick={onReset} />
            </div>
        </form>
    );
}
