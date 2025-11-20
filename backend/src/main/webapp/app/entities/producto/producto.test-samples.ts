import { IProducto, NewProducto } from './producto.model';

export const sampleWithRequiredData: IProducto = {
  id: 26142,
  nombre: 'till',
  precio: 21122,
};

export const sampleWithPartialData: IProducto = {
  id: 21284,
  nombre: 'concerning',
  precio: 23367,
};

export const sampleWithFullData: IProducto = {
  id: 31795,
  nombre: 'er behold needily',
  precio: 12411,
};

export const sampleWithNewData: NewProducto = {
  nombre: 'perfection highly quickly',
  precio: 30197,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
