import Link from "next/link";
import {Fragment} from "react";
import {ArrowBack} from "@mui/icons-material";
import {Typography} from "@mui/joy";
import FormEdtTranca from "@/ui/adm/trancas/FormEdtTranca";

export default function EditarTrancas({params}){
   return (
      <Fragment>
         <div className='title flex flex-col'>
            <div className={'flex items-center gap-3'}>
               <Link aria-label='Link de retorno para a tela principal da dashboard'  Link href={'/adm/trancas'}>
                  <ArrowBack/>
               </Link>
               <Typography level={'h2'}>Dashboard</Typography>
            </div>
            <Typography level={'body-md'} className={'pl-9'}>Dashboard / Gerenciar Trancas / Editar Tranca</Typography>
         </div>

         <FormEdtTranca id={params.id}/>
      </Fragment>
   )
}