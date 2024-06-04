import {Typography} from "@mui/joy";
import React, {Fragment} from "react";

import styles from './page.module.css';
import LinksWrapper from "@/ui/adm/dashboard/LinksWrapper";
import AtividadesSistema from "@/ui/adm/dashboard/AtividadesSistema/AtividadesSistema";
import ChamadosPendentes from "@/ui/adm/dashboard/ChamadosPendentes/ChamadosPendentes";
import UltimasAtividades from "@/ui/adm/dashboard/UltimasAtividades/UltimasAtividades";

export default function Dashboard(){
   return (
      <Fragment>
         <div className='title'>
            <Typography level={'h2'}>Dashboard</Typography>
            <Typography level={'body-sm'}></Typography>
         </div>

         <div className='flex flex-col gap-2'>
            <div className={styles.dashContainer}>
               <div className={styles.buttonsContainer + ' flex flex-col gap-2'}>
                  <LinksWrapper/>
               </div>
               <div className={styles.activityContainer}>
                  <AtividadesSistema/>
               </div>
               
            </div>

            <div>
               <UltimasAtividades/>
            </div>

         </div>
      </Fragment>
   )
}