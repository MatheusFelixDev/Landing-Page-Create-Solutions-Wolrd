
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { UserForm } from "./UserForm"





    



  


export function DialogForm() {


  
  
 
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Aumente suas vendas</Button>
            </DialogTrigger>
            
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-center'>Aumente suas Vendas</DialogTitle>
          <DialogDescription className='text-center font-bold'>
                      Saiba como tornar seu site mais eficiente em converter visitantes em clientes.
                      Receba estrategias comprovadas e impulsione seus resultados AGORA!
          </DialogDescription>
                </DialogHeader>
                
        <div className="grid gap-4 py-4">
          <UserForm />
          
      </div>

                
        <DialogFooter>
          <p >
            Nós nos preocupamos com a proteção de seus dados. Leia nossa    
            <Button variant="link">Política de Privacidade .</Button>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}



  