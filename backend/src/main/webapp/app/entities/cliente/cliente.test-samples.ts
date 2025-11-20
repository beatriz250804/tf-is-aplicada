import { ICliente, NewCliente } from './cliente.model';

export const sampleWithRequiredData: ICliente = {
  id: 2897,
  nombre: 'wherever alongside per',
};

export const sampleWithPartialData: ICliente = {
  id: 6094,
  nombre: 'besides',
};

export const sampleWithFullData: ICliente = {
  id: 17129,
  nombre: 'circumference',
  email: 'Joaquin.TafoyaCazares11@yahoo.com',
};

export const sampleWithNewData: NewCliente = {
  nombre: 'under',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
