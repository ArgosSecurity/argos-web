import React from 'react'
import {Typography} from "@mui/joy";

import styles from './ActivityItem.module.css';
import { ContainerLevel3 } from '@/ui/containers/ContainerLevel3';

export default function ActivityItem({data, titulo}) {
   return (
      <ContainerLevel3 className={styles.container}>
         <Typography level={'body-sm'}>{titulo}</Typography>
         <Typography level={'h3'}>{data}</Typography>
      </ContainerLevel3>
   )
}