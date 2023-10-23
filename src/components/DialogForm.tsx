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
    FNAME: z.string().min(2, { message: "Mínimo de 2 caracteres." }),
    EMAIL: z
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
    
    PHONE: z.string().min(10, { message: "Mínimo de 10 caracteres." }),
  });
  


export function DialogForm() {


   //Definir o formulário
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        FNAME:"",
        EMAIL: "",
        PHONE:"",
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
          <div id="mc_embed_shell">
  
              <div id="mc_embed_signup">
                
          
                <form
                  
                  action="https://gmail.us12.list-manage.com/subscribe/post?u=64d0de3e8d89d88ae540c2cdd&amp;id=e82f051e66&amp;f_id=001d48e0f0"
                  method="post"
                  id="mc-embedded-subscribe-form" 
                  name="mc-embedded-subscribe-form"

                  target="_self" 
                  noValidate
                >
          
          <div id="mc_embed_signup_scroll">    
            <FormField
              control={form.control}
              name="FNAME"
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
              name="EMAIL"
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
                name="PHONE"
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
                    
   
                    <Button
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="my-2 w-full font-bold" type="submit">Cadastrar</Button>
            </div>
          </form>

          </div>
          </div>
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



  