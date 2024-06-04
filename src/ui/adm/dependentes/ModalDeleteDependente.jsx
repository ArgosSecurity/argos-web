'use client'

import apiRequest from '@/lib/api';
import { DeleteForever, Done, Error, Warning } from '@mui/icons-material'
import { Button, DialogActions, DialogContent, DialogTitle, Divider, Modal, ModalDialog, Snackbar } from '@mui/joy'
import React, { useState } from 'react'

export default function ModalDeleteDependente({id}) {

   const [snackbarState, setSnackbarState] = useState({
      open: false
   })
   const [open, setOpen] = useState(false);

   async function deleteDependente(){

      await apiRequest.delete(`dependente/${id}`)
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
                  Você tem certeza que quer excluir este dependente?
               </DialogContent>
               <DialogContent>
                  Tags vinculadas a ele serão excluídos também.
               </DialogContent>
               <DialogActions>
                  <Button variant="solid" color="danger" onClick={() => deleteDependente()}>
                  Deletar Dependente do ID {id}
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
