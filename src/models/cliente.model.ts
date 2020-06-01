import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCliente?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
  })
  RFC?: string;

  @property({
    type: 'string',
  })
  Mail?: string;

  @property({
    type: 'number',
  })
  Telefono?: number;

  @property({
    type: 'number',
  })
  Telefono1?: number;

  @property({
    type: 'string',
  })
  Direccion?: string;

  @property({
    type: 'string',
  })
  Colonia?: string;

  @property({
    type: 'number',
  })
  CP?: number;

  @property({
    type: 'string',
  })
  Ciudad?: string;

  @property({
    type: 'string',
  })
  Estado?: string;

  @property({
    type: 'string',
  })
  Notas?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
