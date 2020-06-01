import {DefaultCrudRepository} from '@loopback/repository';
import {Proyecto, ProyectoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProyectoRepository extends DefaultCrudRepository<
  Proyecto,
  typeof Proyecto.prototype.idProyecto,
  ProyectoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Proyecto, dataSource);
  }
}
