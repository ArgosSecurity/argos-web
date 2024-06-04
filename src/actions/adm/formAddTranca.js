import apiRequest from "@/lib/api"
import axios from "axios"

export default async function formAddTranca(e){
    const formData = e.target

    const body = {
        idRegistroTranca: formData.txtIdRegistro.value,
        localidade: formData.txtLocalidade.value
    }

   const resposta = {
      success: true,
      res: await apiRequest.post(`tranca`, body)
   }

   if (resposta.res.error) {
      resposta.success = false
      console.error(resposta.error)
   } else {
      console.log(resposta.res.data)
   }

   return resposta
}
