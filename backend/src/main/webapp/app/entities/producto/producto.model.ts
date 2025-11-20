import { ICliente } from 'app/entities/cliente/cliente.model';

export interface IProducto {
  id: number;
  nombre?: string | null;
  precio?: number | null;
  cliente?: ICliente | null;
}

export type NewProducto = Omit<IProducto, 'id'> & { id: null };
