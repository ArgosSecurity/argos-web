import ContainerLevel1 from '@/ui/containers/ContainerLevel1'
import { Typography } from '@mui/joy'
import TagItem from './TagItem'

import styles from './TagasCadastradas.module.css'
import axios from "axios";
import apiRequest from "@/lib/api";

export default async function TagsCadastradas({userId}) {
   console.log(userId)
   const tags = await apiRequest.get(`tag/r/${userId}`).then(res =>{
      return res.data
   })

   return (
      <ContainerLevel1 className={styles.container + ' flex flex-col gap-2 h-full'}>
         <Typography level={'title-lg'}>Tags Cadastradas</Typography>
         <div>
            {tags.length === 0 ? "Sem Tags cadastradas" : tags.map(tag => {
               return (
                  <TagItem key={tag.id} tag={tag}/>
               )
            })}
         </div>
      </ContainerLevel1>
   )
}
