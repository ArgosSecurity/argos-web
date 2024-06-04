import formChamado from "@/actions/user/formChamado";
import { Done, Error } from "@mui/icons-material";
import {Button, Snackbar, Textarea, Typography} from "@mui/joy";
import { useState } from "react";

export default function FormTag({userId}){

   const [snackbarState, setSnackbarState] = useState({
      open: false
   })

   async function formChamadoSnackBar(e){
      const res = formChamado(e)

      if ((await res).success) {
         setSnackbarState({
            open: true,
            startDecorator: <Done/>,
            color: "success"
         })
      } else {
         setSnackbarState({
            open: true,
            startDecorator: <Error/>,
            color: "success"
         })
      }
      
      setTimeout(() => {
         setSnackbarState({
            open: false
         })
      }, 7000)
   }


   return (
      <form onSubmit={formChamadoSnackBar} className={'flex flex-col gap-5'}>
         <input type="hidden" name={'tipoChamado'} value={'tag'}/>
         <input type="hidden" name={'userId'} value={userId}/>

         <div className={'flex flex-col gap-2'}>
            <Typography level={'body-lg'}>Motivo do chamado</Typography>
            <Textarea name={'txtmotivoChamado'} placeholder={"Ex. Perdi minha TAG antiga"}></Textarea>
         </div>

         <Snackbar color={snackbarState.color} variant="solid" startDecorator={snackbarState.startDecorator} open={snackbarState.open}>
            Chamado cadastrado com sucesso
         </Snackbar>

         <Button type={'submit'}>Solicitar</Button>
      </form>
   )
}