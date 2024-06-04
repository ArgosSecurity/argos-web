'use client'

import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import { Radio, RadioGroup, Sheet, Typography} from "@mui/joy";
import style from './FormChamado.module.css';
import {Fragment, useState} from "react";
import FormTag from "@/ui/user/FormChamado/FormTag";
import FormAddDependente from "@/ui/user/FormChamado/FormAddDependente";



export default function FormChamado({userId}) {
   const formOptions = {
      tag : <Fragment>
         <FormTag userId={userId}/>
      </Fragment>,
      dependente :
         <Fragment>
            <FormAddDependente userId={userId}/>
         </Fragment>,
   }

   const [tipoChamado, setTipoChamado] = useState('');

   return (
      <ContainerLevel1 className={style.container + ' p-4 flex flex-col gap-5'}>
         <Typography level={'h4'}>
            Solicitar Chamado
         </Typography>

         <div className={'flex flex-col gap-2'}>
            <Typography level={'body-lg'}>Deseja Solicitar?</Typography>
               <RadioGroup
                  aria-labelledby="Tipo de Chamado"
                  defaultValue="tag"
                  size="md"
                  sx={{ gap: 1.5 }}
               >
                  {['tag', 'dependente'].map((value) => (
                     <Sheet
                        key={value}
                        sx={{
                           p: 2,
                           borderRadius: 'md',
                           boxShadow: 'sm',
                        }}
                     >
                        <Radio
                           label={`Cadastro de ${value}`}
                           overlay
                           disableIcon
                           value={value}
                           onClick={() => setTipoChamado(value)}
                           slotProps={{
                              label: ({ checked }) => ({
                                 sx: {
                                    fontWeight: 'lg',
                                    fontSize: 'md',
                                    color: checked ? 'text.primary' : 'text.secondary',
                                 },
                              }),
                              action: ({ checked }) => ({
                                 sx: (theme) => ({
                                    ...(checked && {
                                       '--variant-borderWidth': '2px',
                                       '&&': {
                                          // && to increase the specificity to win the base :hover styles
                                          borderColor: theme.vars.palette.primary[500],
                                       },
                                    }),
                                 }),
                              }),
                           }}
                        />
                     </Sheet>
                  ))}
               </RadioGroup>
         </div>

         {formOptions[tipoChamado]}


      </ContainerLevel1>
   )
}