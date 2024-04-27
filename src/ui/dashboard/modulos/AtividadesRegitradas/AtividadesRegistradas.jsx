import CardWrapper from '@/ui/containers/CardWrapper'
import { Typography } from '@mui/joy'
import React from 'react'
import ActivityItem from './ActivityItem'

export default function AtividadesRegistradas() {
   return (
      <CardWrapper className={'p-4 flex flex-col gap-2'}>
         <Typography level={'title-lg'}>Atividades Registradas</Typography>

         <div className={'user-activity flex flex-col gap-5'}>
            <div className={"flex justify-center"}>
               {/* <ActivityCalendar 
                  blockSize={8} 
                  blockMargin={2} 
                  theme={{
                     light: ['hsl(0, 0%, 92%)', 'firebrick'],
                     dark: ['#333', 'rgb(214, 16, 174)'],
                     }}
                  data={arr}/> */}
            </div>
            <div className={'flex flex-wrap gap-3'}>
               <ActivityItem />
               <ActivityItem />
               <ActivityItem />
               <ActivityItem />
            </div>
         </div>
      </CardWrapper>
   )
}
