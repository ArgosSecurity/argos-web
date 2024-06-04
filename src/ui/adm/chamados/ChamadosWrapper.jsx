'use client'

import ChamadoItem from "./ChamadoItem";
import styles from './chamadosWrapper.module.css'
import {Fragment, useEffect, useState} from "react";
import apiRequest from "@/lib/api";
import {Snackbar} from "@mui/joy";
import {Done, Error} from "@mui/icons-material";

export default function ChamadosWrapper(){

   const [chamados, setChamados] = useState([])

   async function getChamados(){
      await apiRequest.get('chamado').then(res =>{
         setChamados(res.data)
      })
   }

   useEffect(() => {
      getChamados()
   }, );

   if (chamados.length){
      return (
         <Fragment>
            <div className={styles.container}>
               {chamados.map((chamado, key) => {
                   return(<ChamadoItem chamado={chamado} key={key}/>)
               })}
            </div>
         </Fragment>
      )
   } else {
      return(
         <Fragment>
            <div className={styles.container}>
               <h4>Não há chamados</h4>
            </div>
         </Fragment>
      )
   }


}