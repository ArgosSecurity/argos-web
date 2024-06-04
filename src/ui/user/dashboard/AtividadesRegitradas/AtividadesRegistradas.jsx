import ContainerLevel1 from '@/ui/containers/ContainerLevel1'
import { Typography } from '@mui/joy'
import ActivityItem from './ActivityItem'

import styles from './AtividadesRegistradas.module.css'
import apiRequest from '@/lib/api'

export default async function AtividadesRegistradas({userId}) {

   const tags = await apiRequest.get(`tag/r/${userId}`).then(res => {
      return res.data
   })

   const dependentes = await apiRequest.get(`dependente/r/${userId}`).then(res => {
      return res.data
   })

   return (
      <ContainerLevel1 className={styles.container + ' flex flex-col gap-2'}>
         <Typography level={'title-lg'}>Atividades Registradas</Typography>

         <div className={'user-activity flex flex-col gap-5'}>
            <div className={"flex justify-center"}>
            </div>
            <div className={'flex flex-wrap gap-3'}>
               <ActivityItem data={tags.length} titulo={'Quantidade de tags cadastradas'}/>
               <ActivityItem data={dependentes.length} titulo={'Quantidade de dependentes cadastrados'}/>
            </div>
         </div>
      </ContainerLevel1>
   )
}
