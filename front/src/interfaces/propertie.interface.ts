// types/Property.ts

export interface IProperty {
  id: number;
  titulo: string;
  cidade: string;
  quartos: number;
  preco: number;
  imgUrls: string[];
  bairro: string;
  banheiros: number
  descricao: string;
  tipo: string;
  vagas_garagem: number;
  tamanho: number;
}

export default IProperty;
