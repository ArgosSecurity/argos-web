import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import LinkButton from "@/ui/LinkButton";
import {Button, Table, Typography} from "@mui/joy";
import {Delete, Edit} from "@mui/icons-material";
import React from "react";
import apiRequest from "@/lib/api";
import ModalDeleteResponsavel from "@/ui/adm/responsaveis/ModalDeleteResponsavel";
import ModalDeleteDependente from "@/ui/adm/dependentes/ModalDeleteDependente";

export default async function DependenteTable(){

   const dependentes = await apiRequest.get('dependente').then(res =>{
      return res.data
   })

   return (
      <ContainerLevel1 className="p-4 flex flex-col gap-4">

         <div className={'flex justify-between items-center'}>
            <Typography level={'h4'}>{dependentes.length} Dependentes cadastrados</Typography>
            <LinkButton href={'/adm/dependentes/adicionar'}>Adicionar Dependentes</LinkButton>
         </div>

         <Table>
            <thead>
            <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>RG</th>
                  <th>Apto</th>
                  <th>Responsavel</th>
                  <th>Editar</th>
                  <th>Excluir</th>
               </tr>
            </thead>
            <tbody>
            {dependentes.map(dependente => {
               return (
                  <tr key={dependente.id}>
                     <td>{dependente.id}</td>
                     <td>{dependente.nome}</td>
                     <td>{dependente.rg}</td>
                     <td>{dependente.responsavel.apto}</td>
                     <td>{dependente.responsavel.nome}</td>
                     <td>
                        <LinkButton color='neutral' fullwidth variant='soft' href={`/adm/dependentes/${dependente.id}/editar`}>
                           <Edit/>
                        </LinkButton>
                     </td>
                     <td>
                        <ModalDeleteDependente id={dependente.id}/>
                     </td>
                  </tr>
               )
            })}
            </tbody>
         </Table>
      </ContainerLevel1>
   )
}