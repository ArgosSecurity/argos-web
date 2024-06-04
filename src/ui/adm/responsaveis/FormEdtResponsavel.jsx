'use client'

import ContainerLevel1 from '@/ui/containers/ContainerLevel1'
import {Button, Input, Snackbar, Typography} from '@mui/joy'
import apiRequest from "@/lib/api";
import formEditResponsavel from "@/actions/adm/formEditResponsavel";
import {useEffect, useState} from "react";
import formEditTranca from "@/actions/adm/formEditTranca";
import {Done, Error} from "@mui/icons-material";
import formEditDependente from "@/actions/adm/formEditDependente";

export default function FormEdtResponsavel({id}) {

   const [snackbarState, setSnackbarState] = useState({
      open: false
   })

   const [responsavel, setResponsavel] = useState({})

   async function getResponsavel(){
      await apiRequest.get(`responsavel/${id}`).then(res =>{
         setResponsavel(res.data)
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
               message: "Responsavel alterado com sucesso!"
            })
         })
         .catch(err => {
            setSnackbarState({
               open: true,
               startDecorator: <Error/>,
               color: "danger",
               message: "Ocorreu um erro ao alterar o responsavel - " + err.message
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
            Editar Responsável
         </Typography>

         <div className={'flex flex-col gap-2'}>
            <form onSubmit={formSnackBar} className={'flex flex-col gap-5'}>
               <input type={"hidden"} name={"idResponsavel"} value={responsavel.id}/>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Nome do Responsável</Typography>
                  <Input defaultValue={responsavel.nome} placeholder={'Ex. Fulano de Tal'} name={'txtNomeResponsavel'} type={'text'}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>RG do Responsavel</Typography>
                  <Input defaultValue={responsavel.rg} placeholder={'XX.XXX.XX-X'} name={'txtRgResponsavel'} type={'text'}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Apartamento</Typography>
                  <Input defaultValue={responsavel.apto} placeholder={'12-A'} name={'txtAptoResponsavel'} type={'text'}/>
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
