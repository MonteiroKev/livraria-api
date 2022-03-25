import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {
  }

  @Get()
  async findAll(): Promise<Livro[]> {
    return this.livrosService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Livro> {
    return this.livrosService.findOne(params.id);
  }

  @Post()
  async store(@Body() livro: Livro) {
    this.livrosService.store(livro);
  }

  @Put(':id')
  async update(@Param() params, @Body() livro: Livro) {
    this.livrosService.update(params.id, livro);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.livrosService.delete(params.id);
  }
}
