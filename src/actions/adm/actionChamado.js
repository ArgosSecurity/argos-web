import formAddDependente from "@/actions/adm/formAddDependente";
import apiRequest from "@/lib/api";

export default async function actionChamado(chamado) {

   if (chamado.tipoChamado === "DEPENDENTE"){
      await formAddDependente({target: {
         txtNomeDependente: {value : chamado.dependenteNome},
         txtRgDependente: {value : chamado.dependenteRg},
         txtAptoDependente: {value : chamado.responsavel.apto}
      }})
      apiRequest.delete(`chamado/${chamado.id}`)
      alert("Dependente inserido com sucesso")
   }

   if (chamado.tipoChamado === "TAG"){
      await apiRequest.post('tag', {
         isTemporario: false,
         responsavel: chamado.responsavel.id
      })
      apiRequest.delete(`chamado/${chamado.id}`)
      alert("Tag do responsável inserida com sucesso")

   }
}