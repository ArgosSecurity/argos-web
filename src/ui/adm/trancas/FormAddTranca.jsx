'use client'

import formAddTranca from "@/actions/adm/formAddTranca";
import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import { Done, Error } from "@mui/icons-material";
import {Button, Input, Snackbar, Typography} from "@mui/joy";
import { useState } from "react";

export default function FormAddTranca(){


   const [snackbarState, setSnackbarState] = useState({
      open: false
   })

   async function formSnackBar(e){
      e.preventDefault()

      const res = formAddTranca(e)

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
            Adicionar Tranca
         </Typography>

         <div className={'flex flex-col gap-2'}>
            <form onSubmit={formSnackBar}  className={'flex flex-col gap-5'}>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>ID de registro físico</Typography>
                  <Input placeholder={'000000'} name={'txtIdRegistro'} type={'text'}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Localidade</Typography>
                  <Input placeholder={'Ex: Portão Principal'} name={'txtLocalidade'} type={'text'}/>
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