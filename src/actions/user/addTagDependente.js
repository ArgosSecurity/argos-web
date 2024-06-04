import apiRequest from "@/lib/api"
import { redirect } from 'next/navigation'

export async function addTagDependente(formData){
   'use server'

   const rawFormData = {
      tagId: formData.get('tag'),
      dependente: formData.get('dependente'),
   }

   await apiRequest.get(`tag/${rawFormData.tagId}`).then(res => {
      apiRequest.patch(`tag/d/${rawFormData.dependente}`, res.data)
   })

   redirect("/user/dashboard")
}