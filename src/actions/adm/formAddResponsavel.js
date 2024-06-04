import apiRequest from "@/lib/api";

export default async function formAddResponsavel(e) {
   const formData = e.target

   console.log(formData)

   const requestFormData = {
      id: formData.idResponsavel.value,
      nome: formData.txtNomeResponsavel.value,
      rg: formData.txtRgResponsavel.value,
      apto: formData.txtAptoResponsavel.value
   }
   
   const resposta = {
      success: true,
      res: await apiRequest.post('responsavel', requestFormData)
   }

   if (resposta.res.error) {
      resposta.success = false
      console.error(resposta.error)
   } else {
      console.log(resposta.res.data)
   }

   return resposta
}