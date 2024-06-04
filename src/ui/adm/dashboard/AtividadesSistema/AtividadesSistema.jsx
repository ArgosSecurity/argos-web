import {Typography} from "@mui/joy";
import ActivityItem from "@/ui/user/dashboard/AtividadesRegitradas/ActivityItem";
import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import React from "react";

import styles from './AtividadeSistema.module.css'
import apiRequest from "@/lib/api";

export default async function AtividadesSistema() {

   const chamados = await apiRequest.get(`chamado`).then(res => {
      return res.data
   })
   const tags = await apiRequest.get(`tag`).then(res => {
      return res.data
   })
   const dependentes = await apiRequest.get(`dependente`).then(res => {
      return res.data
   })
   const responsaveis = await apiRequest.get(`responsavel`).then(res => {
      return res.data
   })
   const trancas = await apiRequest.get(`tranca`).then(res => {
      return res.data
   })

   return (
      <ContainerLevel1 className={'h-full w-full p-4 flex flex-col gap-3'}>
         <Typography level={'title-lg'}>Atividades do Sistema</Typography>
         <div className={styles.activityContainer}>
            <ActivityItem data={chamados.length} titulo={"Quantidade de chamados cadastrados no sistema"}/>
            <ActivityItem data={tags.length} titulo={"Quantidade de Tags cadastradas no sistema"}/>
            <ActivityItem data={dependentes.length} titulo={"Quantidade de dependentes cadastrados no sistema"}/>
            <ActivityItem data={responsaveis.length} titulo={"Quantidade de responsáveis cadastrados no sistema"}/>
            <ActivityItem data={trancas.length} titulo={"Quantidade de Trancas cadastradas no sistema"}/>
         </div>
      </ContainerLevel1>
   )
}