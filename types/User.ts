export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  telephone: string;
  active:boolean
  job: 'KERTESZ' | 'HENTES' | 'PEK';
}
