

import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import { ArrowBack, History } from "@mui/icons-material";
import { Table, Typography } from "@mui/joy";
import Link from "next/link";
import { Fragment } from "react";
import axios from "axios";
import apiRequest from "@/lib/api";

export default async function Historico({ params }) {

   const historico = await apiRequest.get(`historico/tag/${params.id}`).then(res =>{
      return res.data
   })

   return (
      <Fragment>
         <div className='title flex items-center gap-3'>
            <Link aria-label="Link de retorno para a tela principal da dashboard" href={'/user/dashboard'}>
               <ArrowBack/>
            </Link>
            <Typography level={'h2'}>
               Dashboard
            </Typography>
            <Typography level={'body-sm'}></Typography>
         </div>

         <ContainerLevel1 className="p-4 flex flex-col gap-4">

            <div className="flex gap-2">
               <History/>
               <div>
                  <Typography level={'h3'}>Registro do histórico da Tag: {params.id}</Typography>
                  <Typography level="body-md">Tipo de Tag: Permanente</Typography>
               </div>
            </div>

            <Table className={'pr-8 pl-8'}>
               <thead>
                  <tr>
                     <th>id</th>
                     <th>Dependente</th>
                     <th>RG</th>
                     <th>Registro</th>
                     <th>Atividade</th>
                  </tr>
               </thead>
               <tbody>
                  {historico.map(historicoItem => {
                     return (
                        <tr key={historicoItem.id}>
                           <td>{historicoItem.id}</td>
                           <td>{historicoItem.dependente?.nome ? historicoItem.dependente.nome : "Indefinido"}</td>
                           <td>{historicoItem.dependente?.rg ? historicoItem.dependente.rg : "Indefinido"}</td>
                           <td>{historicoItem.timestamp}</td>
                           <td>{historicoItem.typeAtividade}</td>
                        </tr>
                     )
                  })}
               </tbody>
            </Table>
         </ContainerLevel1>

      </Fragment>

   )
}