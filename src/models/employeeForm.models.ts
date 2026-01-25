export interface EmployeeFormModel {
 id?: number;

  names: string;
  lastNames: string;
  curp: string;
  rfc: string;
  nationality: string;
  birthDate: string;

  email?: string;
  phone?: string;
  country?: string;
  city?: string;

  contractType?: string;
  role?: string;
  startDate?: string;

  availabilityRange?: string;
  shift?: string;

  medicalInsurance?: boolean;
  remoteWork?: boolean;
  bonus?: boolean;

  comments?: string;
}