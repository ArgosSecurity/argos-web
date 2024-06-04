import {Button, Typography} from "@mui/joy";

import styles from './layout.module.css'
import Image from "next/image";
import {Logout} from "@mui/icons-material";
import Link from "next/link";
import ToggleColorButton from "@/ui/ToggleColorButton";
import { verifySession } from "@/lib/dal";
import { redirect } from "next/navigation";
import apiRequest from "@/lib/api";

export const metadata = {
  title: "Dashboard - Argos Security",
  description: "Argos Security - Segurança para seu Apto",
};

export default async function RootLayout({ modal, children }) {
  const session = await verifySession()

  if (!session.isAuth || session.typeUser !== 'responsavel') {
     redirect("/redirect")
  }

  const userData = await apiRequest.get(`responsavel/${session.userId}`).then(res => {
    return res.data
  })

  return (
    <div className={styles.layoutContainer}>
      <nav className="flex justify-between">
        <div className="flex items-center gap-5">
          <Image className={"rounded-full"} src="/profile.png" height={'70'} width={"70"} alt="Sua foto de perfil" />
          <div>
            <Typography level="title-md">{userData.nome}</Typography>
            <Typography level="body-md">{userData.apto}</Typography>
          </div>
        </div>
        <div className={"flex items-center"}>
            <ToggleColorButton/>
            <Link aria-label="Botão para sair da sua conta no sistema" href={'/logout'}>
              <Button variant="outlined" color="neutral" startDecorator={<Logout/>}>Sair</Button>
            </Link>
        </div>
      </nav>
      {modal}
      {children}
    </div>
  );
}
