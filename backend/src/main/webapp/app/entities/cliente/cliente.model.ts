export interface ICliente {
  id: number;
  nombre?: string | null;
  email?: string | null;
}

export type NewCliente = Omit<ICliente, 'id'> & { id: null };
