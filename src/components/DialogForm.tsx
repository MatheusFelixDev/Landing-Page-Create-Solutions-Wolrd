import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
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

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"



    


const formSchema = z.object({
    name: z.string().min(2, { message: "Mínimo de 2 caracteres." }),
    email: z
      .string()
      .email({
        message: "E-mail inválido.",
      })
      .min(10, {
        message: "Mínimo de 10 caracteres.",
      })
      .max(50, {
        message: "Máximo de 50 caracteres.",
      }),
    
    phone: z.string().min(10, { message: "Mínimo de 10 caracteres." }),
  });
  


export function DialogForm() {


   //Definir o formulário
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name:"",
        email: "",
        phone:"",
    },
  });

  //Defina seu Handler
  function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data);
  }
 
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
          
        <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className=" gap-2">
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem className="mb-8">
          <FormLabel className="hidden">Nome</FormLabel>
          <FormControl>
            <Input placeholder="Nome" {...field} />
          </FormControl>
          <FormDescription className="">Campo obrigatorio*</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
     <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem className="mb-8">
          <FormLabel className="hidden">Email</FormLabel>
          <FormControl>
            <Input placeholder="E-mail" {...field} />
          </FormControl>
          <FormDescription className="">Campo obrigatorio*</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="phone"
      render={({ field }) => (
        <FormItem className="mb-8">
          <FormLabel className="hidden">Telefone</FormLabel>
          <FormControl>
            <Input placeholder="Telefone" {...field} />
          </FormControl>
          <FormDescription className="hidden">This is your phone</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
   
    <Button className="my-2 w-full font-bold" type="submit">Cadastrar</Button>
  </form>
</Form>

          
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
