'use client'

import formEditTranca from "@/actions/adm/formEditTranca";
import apiRequest from "@/lib/api";
import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import { Done, Error } from "@mui/icons-material";
import {Button, Input, Snackbar, Typography} from "@mui/joy";
import { useEffect, useState } from "react";

export default function FormEdtTranca({id}){

   const [snackbarState, setSnackbarState] = useState({
      open: false
   })
   
   const [tranca, setTranca] = useState({})

   async function getTranca(){
      await apiRequest.get(`tranca/${id}`).then(res =>{
         setTranca(res.data) 
      })
   }

   useEffect(() => {
      getTranca()
   }, []);

   async function formSnackBar(e){
      e.preventDefault()

      const res = formEditTranca(e)

      if ((await res).success) {
         setSnackbarState({
            open: true,
            startDecorator: <Done/>,
            color: "success",
            message: "Tranca adicionada com sucesso!"
         })
      } else {
         setSnackbarState({
            open: true,
            startDecorator: <Error/>,
            color: "success",
            message: "Ocorreu um erro ao adicionar a tranca!"
         })
      }
      
      setTimeout(() => {
         setSnackbarState({
            open: false
         })
      }, 7000)
   }

   return (
      <ContainerLevel1 className={' p-4 flex flex-col gap-5'}>
         <Typography level={'h4'}>
            Editar Tranca
         </Typography>

         <div className={'flex flex-col gap-2'}>
            <form onSubmit={formSnackBar} className={'flex flex-col gap-5'}>
               <input type="hidden" value={tranca.id} name={"txtIdTranca"} />

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>ID de registro físico</Typography>
                  <Input placeholder={'000000'} name={'txtIdRegistro'} type={'text'} defaultValue={tranca.idRegistroTranca}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Localidade</Typography>
                  <Input placeholder={'Ex: Portão Principal'} name={'txtLocalidade'} type={'text'} defaultValue={tranca.localidade}/>
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