import formChamado from "@/actions/user/formChamado";
import { Done, Error } from "@mui/icons-material";
import {Button, Input, Snackbar, Typography} from "@mui/joy";
import { useState } from "react";

export default function FormAddDependente({userId}){

   const [snackbarState, setSnackbarState] = useState({
      open: false
   })

   async function formChamadoSnackBar(e){
      const res = formChamado(e)

      if ((await res).success) {
         setSnackbarState({
            open: true,
            startDecorator: <Done/>,
            color: "success",
            message: "Chamado cadastrado com sucesso"
         })
      } else {
         setSnackbarState({
            open: true,
            startDecorator: <Error/>,
            color: "success",
            message: "Não foi possível cadastrar o chamado, tente novamente mais tarde"
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
         <input type="hidden" name={'tipoChamado'} value={'dependente'}/>
         <input type="hidden" name={'userId'} value={userId}/>

         <div className={'flex flex-col gap-2'}>
            <Typography level={'body-lg'}>Nome do Dependente</Typography>
            <Input placeholder={'Ex. Fulano de Tal'} name={'txtNomeDependente'} type={'text'}/>
         </div>

         <div className={'flex flex-col gap-2'}>
            <Typography level={'body-lg'}>RG do Dependente</Typography>
            <Input placeholder={'XX.XXX.XX-X'} name={'txtRgDependente'} type={'text'}/>
         </div>

         <Snackbar color={snackbarState.color} variant="solid" startDecorator={snackbarState.startDecorator} open={snackbarState.open}>
            {snackbarState.message}
         </Snackbar>

         <Button type={'submit'}>Solicitar</Button>
      </form>
   )
}