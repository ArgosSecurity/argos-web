import ContainerLevel1 from '@/ui/containers/ContainerLevel1'
import { Delete, Edit } from '@mui/icons-material'
import { Button, Table, Typography } from '@mui/joy'
import Link from 'next/link'
import styles from './DependentesCadastrados.module.css'
import apiRequest from "@/lib/api";
import LinkButton from "@/ui/LinkButton";
import ModalDeleteDependente from "@/ui/adm/dependentes/ModalDeleteDependente";
import React from "react";

export default async function DependentesCadastrados({userId}) {

   const dependentes = await apiRequest.get(`dependente/r/${userId}`).then(res =>{
      return res.data
   })

   return (
      <ContainerLevel1 className={styles.container}>
         <Typography level={'title-lg'}>Dependentes Cadastrados</Typography>

         <Table>
            <thead>
               <tr>
                  <th>Nome do Dependente</th>
                  <th>RG do Dependente</th>
                  <th>Editar</th>
                  <th>Excluir</th>
               </tr>
            </thead>
            <tbody>
               {dependentes.map(dependente => {
                  return (
                     <tr key={dependente.id}>
                        <td>{dependente.nome}</td>
                        <td>{dependente.rg}</td>
                        <td>
                           <Link href={`dependente/${dependente.id}`}>
                              <Button fullWidth aria-label='Botão para editar informações do dependente' color='neutral'
                                      variant='soft'><Edit/></Button>
                           </Link>
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
