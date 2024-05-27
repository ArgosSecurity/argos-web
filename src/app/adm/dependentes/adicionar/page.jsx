import Link from "next/link";
import {ArrowBack} from "@mui/icons-material";
import {Typography} from "@mui/joy";
import FormAddResponsavel from "@/ui/adm/responsaveis/FormAddResponsavel";
import {Fragment} from "react";
import FormAddDependente from "@/ui/adm/dependentes/FormAddDependente";

export default function AdicionarDependente() {
   return (
      <Fragment>
         <div className='title flex flex-col'>
            <div className={'flex items-center gap-3'}>
               <Link aria-label='Link de retorno para a tela principal da dashboard'  Link href={'/adm/dependentes'}>
                  <ArrowBack/>
               </Link>
               <Typography level={'h2'}>Dashboard</Typography>
            </div>
            <Typography level={'body-md'} className={'pl-9'}>Dashboard / Gerenciar Dependentes/ Adicionar Dependente</Typography>
         </div>
         <FormAddDependente/>
      </Fragment>
   )
}