import apiRequest from "@/lib/api";

export default async function formAddDependente(e) {
   const formData = e.target

   const requestFormData = {
      nome: formData.txtNomeDependente.value,
      rg: formData.txtRgDependente.value,
   }
   
   const resposta = {
      success: true,
      res: await apiRequest.post(`dependente?apto=${formData.txtAptoDependente.value}`, requestFormData)
   }

   if (resposta.res.error) {
      resposta.success = false
      console.error(resposta.error)
   } else {
      console.log(resposta.res.data)
   }

   return resposta
}