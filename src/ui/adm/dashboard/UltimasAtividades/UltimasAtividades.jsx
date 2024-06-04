import {Table, Typography} from "@mui/joy";
import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import React from "react";
import axios from "axios";

export default async function UltimasAtividades() {

   const historico = await axios.get('http://localhost:8080/api/v1/historico').then(res =>{
      return res.data
   })

   return (
      <ContainerLevel1 className={'h-full w-full p-4 flex flex-col gap-3'}>
         <Typography level={'title-lg'}>Últimas Atividades</Typography>

         <Table>
            <thead>
               <tr>
                  <th>Id de registro</th>
                  <th>TagId</th>
                  <th>Responsavel</th>
                  <th>RG do Responsavel</th>
                  <th>Atividade</th>
                  <th>Horário da atividade</th>
               </tr>
            </thead>
            <tbody>
               {historico.map(historicoItem => {
                     return (
                        <tr key={historicoItem.id}>
                           <td>{historicoItem.id}</td>
                           <td>{historicoItem.tag}</td>
                           <td>{historicoItem.responsavel}</td>
                           <td>{historicoItem.rgResponsavel}</td>
                           <td>{historicoItem.typeAtividade}</td>
                           <td>{historicoItem.timestamp}</td>
                        </tr>
                     )
               })}
            </tbody>
         </Table>
      </ContainerLevel1>
   )
}