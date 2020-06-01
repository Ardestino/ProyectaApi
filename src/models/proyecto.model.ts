import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Proyecto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idProyecto?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
  })
  Direccion?: string;

  @property({
    type: 'string',
  })
  Colonia?: string;

  @property({
    type: 'string',
  })
  Ciudad?: string;

  @property({
    type: 'string',
  })
  Estado?: string;

  @property({
    type: 'number',
  })
  CP?: number;

  @property({
    type: 'date',
  })
  FechaInicio?: string;

  @property({
    type: 'date',
  })
  FechaFin?: string;

  @property({
    type: 'string',
  })
  Status?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Proyecto>) {
    super(data);
  }
}

export interface ProyectoRelations {
  // describe navigational properties here
}

export type ProyectoWithRelations = Proyecto & ProyectoRelations;
