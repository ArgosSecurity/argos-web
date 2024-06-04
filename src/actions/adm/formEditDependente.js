import apiRequest from "@/lib/api";

export default async function formEditDependente(e) {
   const formData = e.target

   const requestFormData = {
      id: formData.txtDependenteId.value,
      nome: formData.txtNomeDependente.value,
      rg: formData.txtRgDependente.value,
   }

   console.log(requestFormData)

   const resposta = {
      success: true,
      res: await apiRequest.patch('dependente', requestFormData)
   }

   if (resposta.res.error) {
      resposta.success = false
      console.error(resposta.error)
   } else {
      console.log(resposta.res.data)
   }

   return resposta
}