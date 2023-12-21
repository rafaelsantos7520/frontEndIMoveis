import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "@nextui-org/react";
import {
  IProperpertyRequestData,
  PropertyRequestSchema,
} from "../../schemas/propertie.schemas";

export default function PropertyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProperpertyRequestData>({
    resolver: zodResolver(PropertyRequestSchema),
  });

  const onSubmit = (data: IProperpertyRequestData) => {
    console.log(data);
  };

  return (
    <main className="h-full bg-zinc-50 flex items-center justify-center">
      <form
        className="flex flex-col gap-3 w-full max-w-md p-4 m-4 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center">Anunciar imóvel</h2>

        <Input
          label="Título"
          placeholder="ex: linda casa centro da cidade"
          className="p-2"
          {...register("titulo")}
          isInvalid={!!errors.titulo?.message}
          errorMessage={errors.titulo && <span>{errors.titulo.message}</span>}
        />

        <div className="flex gap-3">
          <div className="flex flex-col w-1/2">
            <Input
              label="Quartos"
              placeholder="ex... 2"
              type="number"
              className="p-2"
              {...register("quartos")}
              isInvalid={!!errors.quartos?.message}
              errorMessage={
                errors.quartos && <span>{errors.quartos.message}</span>
              }
            />
            <Input
              label="Banheiros"
              placeholder="ex... 2"
              type="number"
              className="p-2"
              {...register("banheiros")}
              isInvalid={!!errors.banheiros?.message}
              errorMessage={
                errors.banheiros && <span>{errors.banheiros.message}</span>
              }
            />
          </div>

          <div className="flex flex-col w-1/2">
            <Input
              label="Vagas de Garagem"
              placeholder="exemplo 2"
              type="number"
              className="p-2"
              {...register("vagas_garagem")}
              isInvalid={!!errors.vagas_garagem?.message}
              errorMessage={
                errors.vagas_garagem && (
                  <span>{errors.vagas_garagem.message}</span>
                )
              }
            />
            <Input
              label="Valor"
              placeholder="2300,00"
              type="number"
              className="p-2"
              {...register("valor")}
              isInvalid={!!errors.valor?.message}
              errorMessage={errors.valor && <span>{errors.valor.message}</span>}
            />
          </div>
        </div>

        <Input
          label="Descrição"
          placeholder="ex... casa de frente pra praia proximo..."
          className="p-2"
          {...register("descricao")}
          isInvalid={!!errors.descricao?.message}
          errorMessage={
            errors.descricao && <span>{errors.descricao.message}</span>
          }
        />

        <Input
          label="Bairro"
          placeholder="Centro"
          className="p-2"
          {...register("bairro")}
          isInvalid={!!errors.bairro?.message}
          errorMessage={errors.bairro && <span>{errors.bairro.message}</span>}
        />

        <Input
          label="Cidade"
          placeholder="Guarapari"
          className="p-2"
          {...register("cidade")}
          isInvalid={!!errors.cidade?.message}
          errorMessage={errors.cidade && <span>{errors.cidade.message}</span>}
        />

        <Input
          label="Fotos"
          placeholder="escolha um foto"
          className="p-2"
        type="file"
          {...register("fotos")}
          isInvalid={!!errors.fotos?.message}
          errorMessage={errors.fotos && <span>{errors.fotos.message}</span>}
        />

        <Button type="submit">Salvar</Button>
      </form>
    </main>
  );
}
