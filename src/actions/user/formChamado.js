import apiRequest from "@/lib/api";

export default async function formChamado(e){
   e.preventDefault()

   const formData = e.target
   let body = {}

   if (formData.tipoChamado.value === 'tag') {
      body = {
         tipoChamado: "TAG",
         isTagTemporaria: false,
         motivo: formData.txtmotivoChamado.value
      }
   }
   if (formData.tipoChamado.value === 'dependente') {
      body = {
         tipoChamado: "DEPENDENTE",
         dependenteNome: formData.txtNomeDependente.value,
         dependenteRg: formData.txtRgDependente.value
      }
   }

   const resposta = {
      success: true,
      res: await apiRequest.post(`chamado?userId=${formData.userId.value}`, body)
   }

   if (resposta.res.error) {
      resposta.success = false
      console.error(resposta.error)
   } else {
      console.log(resposta.res.data)
   }

   return resposta
}
