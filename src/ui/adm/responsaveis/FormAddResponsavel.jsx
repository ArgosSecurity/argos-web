'use client'

import ContainerLevel1 from '@/ui/containers/ContainerLevel1'
import {Button, Input, Snackbar, Typography} from '@mui/joy'
import React, {useState} from 'react'
import formAddResponsavel from "@/actions/adm/formAddResponsavel";
import formEditResponsavel from "@/actions/adm/formEditResponsavel";
import {Done, Error} from "@mui/icons-material";

export default function FormAddResponsavel() {

   const [snackbarState, setSnackbarState] = useState({
      open: false
   })

   async function formSnackBar(e){
      e.preventDefault()

      formAddResponsavel(e)
         .then(() => {
            setSnackbarState({
               open: true,
               startDecorator: <Done/>,
               color: "success",
               message: "Responsavel adicionado com sucesso!"
            })
         })
         .catch(err => {
            setSnackbarState({
               open: true,
               startDecorator: <Error/>,
               color: "danger",
               message: "Ocorreu um erro ao adicionar o responsavel - " + err.message
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
            Adicionar Responsável
         </Typography>

         <div className={'flex flex-col gap-2'}>
            <form onSubmit={formSnackBar} className={'flex flex-col gap-5'}>
               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Nome do Responsável</Typography>
                  <Input placeholder={'Ex. Fulano de Tal'} name={'txtNomeResponsavel'} type={'text'}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>RG do Responsavel</Typography>
                  <Input placeholder={'XX.XXX.XX-X'} name={'txtRgResponsavel'} type={'text'}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Apartamento</Typography>
                  <Input placeholder={'12-A'} name={'txtAptoResponsavel'} type={'text'}/>
               </div>

               <Button type={'submit'}>Solicitar</Button>
            </form>
         </div>

         <Snackbar color={snackbarState.color} variant="solid" startDecorator={snackbarState.startDecorator} open={snackbarState.open}>
            {snackbarState.message}
         </Snackbar>
      </ContainerLevel1>
   )
}
