import React, {Fragment} from "react";
import {Typography} from "@mui/joy";
import FormChamado from "@/ui/user/FormChamado/FormChamado";
import {ArrowBack} from "@mui/icons-material";
import Link from "next/link";
import {verifySession} from "@/lib/dal";

export default async function ChamadoPage() {

   const userSession = await verifySession()

   return (
      <Fragment>
         <div className='title flex flex-col'>
            <div className={'flex items-center gap-3'}>
               <Link aria-label='Link de retorno para a tela principal da dashboard'  Link href={'/user/dashboard'}>
                  <ArrowBack/>
               </Link>
               <Typography level={'h2'}>Dashboard</Typography>
            </div>
            <Typography level={'body-md'} className={'pl-9'} >Dashboard/Solicitar Chamado</Typography>
         </div>

         <div className={'flex justify-center items-center'}>
            <FormChamado userId={userSession.userId}/>
         </div>
      </Fragment>
   )
}