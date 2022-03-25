import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {

  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro,
  ) { }

  async findAll(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }

  async findOne(id: number): Promise<Livro> {
    return this.livroModel.findByPk(id);
  }

  async store(livro: Livro) {
    this.livroModel.create(livro);
  }

  async update(id: number, livro: Livro) {
    const livroAtualizado: Livro = await this.findOne(id);
    return this.livroModel.update(livro, { where: { id: id } });
  }

  async delete(id: number) {
    const livro: Livro = await this.findOne(id);
    livro.destroy();
  }
}
