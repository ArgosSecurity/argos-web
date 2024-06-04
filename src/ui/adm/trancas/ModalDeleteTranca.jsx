'use client'

import apiRequest from '@/lib/api';
import { DeleteForever, Done, Error, Warning } from '@mui/icons-material'
import { Button, DialogActions, DialogContent, DialogTitle, Divider, Modal, ModalDialog, Snackbar } from '@mui/joy'
import React, { useState } from 'react'

export default function ModalDeleteTranca({id}) {

   const [snackbarState, setSnackbarState] = useState({
      open: false
   })
   const [open, setOpen] = useState(false);

   async function deleteTranca(){
      await apiRequest.delete(`tranca/${id}`)
         .then(() => {
            setSnackbarState({
               open: true,
               startDecorator: <Done/>,
               color: "success",
               message: "Dados deletados com sucesso!"
            })
         })
         .catch(err => {
            setSnackbarState({
               open: true,
               startDecorator: <Error/>,
               color: "danger",
               message: "Ocorreu um erro ao deletar os dados  -  " + err.message
            })
         })

      setOpen(false)

      setTimeout(() => {
         setSnackbarState({
            open: false
         })
      }, 7000)
   }
   
   return (
      <React.Fragment>
         <Button
         fullWidth
         variant="soft"
         color="danger"
         endDecorator={<DeleteForever />}
         onClick={() => setOpen(true)}
         ></Button>
         <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog variant="outlined" role="alertdialog">
               <DialogTitle>
                  <Warning />
                  Necessita confirmação
               </DialogTitle>
               <Divider />
               <DialogContent>
                  Você tem certeza que quer excluir esta tranca?
               </DialogContent>
               <DialogContent>
                  Nenhuma tag irá mais funcionar com essa tranca específica
               </DialogContent>
               <DialogActions>
                  <Button variant="solid" color="danger" onClick={() => deleteTranca()}>
                  Deletar Tranca do ID {id}
                  </Button>
                  <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                  Cancelar
                  </Button>
               </DialogActions>
            </ModalDialog>
         </Modal>

         <Snackbar color={snackbarState.color} variant="solid" startDecorator={snackbarState.startDecorator} open={snackbarState.open}>
            {snackbarState.message}
         </Snackbar>
      </React.Fragment>
   )
}
