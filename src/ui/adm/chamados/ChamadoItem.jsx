'use client'

import { ContainerLevel3 } from "@/ui/containers/ContainerLevel3";
import { Typography, Button} from "@mui/joy";
import actionChamado from "@/actions/adm/actionChamado";

export default function ChamadoItem({chamado}){

   const actionChamadoParsingChamado = actionChamado.bind(null, chamado)

   return(
      <ContainerLevel3 className="flex flex-col gap-2 flex-wrap w-80 justify-between">
         <div className={'pt-3 pb-3'}>
             <Typography level="title-lg">Cadastro de {chamado.tipoChamado === "TAG" ? "Tag" : "Dependente"}</Typography>
             <Typography level="body-md">Responsável: {chamado.responsavel.nome}</Typography>
             <Typography level="body-md">Apartamento: {chamado.responsavel.apto}</Typography>
             <Typography level="body-md">Tipo de TAG requisitado: {chamado.isTagTemporatia ? "Temporaria" : "Permanente"}</Typography>
             {chamado.motivo && <Typography level="body-md">Motivo: {chamado.motivo}</Typography>}
         </div>

         <Button fullWidth onClick={actionChamadoParsingChamado}>Cadastrar {chamado.tipoChamado === "TAG" ? "Tag" : "Dependente"}</Button>
      </ContainerLevel3>
   )
}