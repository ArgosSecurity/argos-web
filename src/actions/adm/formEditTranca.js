import apiRequest from "@/lib/api"

export default async function formEditTranca(e){
    const formData = e.target

    const body = {
         id: formData.txtIdTranca.value,
         idRegistroTranca: formData.txtIdRegistro.value,
         localidade: formData.txtLocalidade.value
    }

   const resposta = {
      success: true,
      res: await apiRequest.patch(`tranca`, body)
   }

   if (resposta.res.error) {
      resposta.success = false
      console.error(resposta.error)
   } else {
      console.log(resposta.res.data)
   }

   return resposta
}
