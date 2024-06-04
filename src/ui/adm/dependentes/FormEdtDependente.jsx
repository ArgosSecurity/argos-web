'use client'

import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import {Button, Input, Snackbar, Typography} from "@mui/joy";
import React, {useEffect, useState} from "react";
import apiRequest from "@/lib/api";
import {Done, Error} from "@mui/icons-material";
import formAddDependente from "@/actions/adm/formAddDependente";
import formEditDependente from "@/actions/adm/formEditDependente";

export default function FormEdtDependente({id}){

   const [snackbarState, setSnackbarState] = useState({
      open: false
   })

   const [dependente, setDependente] = useState({})

   async function getResponsavel(){
      await apiRequest.get(`dependente/${id}`).then(res =>{
         setDependente(res.data)
      })
   }

   useEffect(() => {
      getResponsavel()
   }, []);

   async function formSnackBar(e){
      e.preventDefault()

      formEditDependente(e)
         .then(() => {
            setSnackbarState({
               open: true,
               startDecorator: <Done/>,
               color: "success",
               message: "Dependente alterado com sucesso!"
            })
         })
         .catch(err => {
            setSnackbarState({
               open: true,
               startDecorator: <Error/>,
               color: "danger",
               message: "Ocorreu um erro ao alterar o dependente - " + err.message
            })
         })
         .finally(() => {
            setTimeout(() => {
               setSnackbarState({
                  open: false
               })
            }, 7000)
         })
   }

   return (
      <ContainerLevel1 className={' p-4 flex flex-col gap-5'}>
         <Typography level={'h4'}>
            Editar Dependente
         </Typography>

         <div className={'flex flex-col gap-2'}>

            <form onSubmit={formSnackBar}  className={'flex flex-col gap-5'}>
               <input type={'hidden'} name={'txtDependenteId'} value={dependente.id}/>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Nome do Dependente</Typography>
                  <Input placeholder={'Ex. Fulano de Tal'} name={'txtNomeDependente'} type={'text'} defaultValue={dependente.nome}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>RG do Dependente</Typography>
                  <Input placeholder={'XX.XXX.XX-X'} name={'txtRgDependente'} type={'text'} defaultValue={dependente.rg}/>
               </div>

               <Button type={'submit'}>Confirmar Alteração</Button>
            </form>
         </div>

         <Snackbar color={snackbarState.color} variant="solid" startDecorator={snackbarState.startDecorator} open={snackbarState.open}>
            {snackbarState.message}
         </Snackbar>
      </ContainerLevel1>
   )
}