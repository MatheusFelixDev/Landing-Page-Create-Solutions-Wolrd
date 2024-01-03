import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
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
import { Button } from "./ui/button"


const createUserFormSchema = z.object({
  first_name: z.string().nonempty("O nome é obrigatório").min(2, { message: "Mínimo de 2 caracteres." }),


  email: z.string()
        .nonempty("O e-mail é obrigatório")
        .email("Formato de e-mail inválido")
        .max(50, {
        message: "Máximo de 50 caracteres.",
      }),
    
      phone_number: z.string().min(10, { message: "Mínimo de 10 caracteres." }),
  });


export function UserForm() {
    
     //Definir o formulário
    const form = useForm<z.infer<typeof createUserFormSchema>>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      first_name:"",
      email: "",
        phone_number:"",
    },
  });


    
    return (
        <Form {...form} >
          <div id="mc_embed_shell">
  
              <div id="mc_embed_signup">
                
          
                <form
                  action="https://systeme.io/embedded/11738466/subscription"
                  method="post"
                  id="userForm" 
                  name="userForm"
                  target="_self" 
                        noValidate
                        onSubmit={(e) => {
                            e.preventDefault();
                        
                            form.trigger().then((isValid) => {
                                if (isValid) {
                                    (e.target as HTMLFormElement).submit(); // Explicitly cast e.target to HTMLFormElement
                                }
                            });
                        }}
                        >
                
          
          <div id="mc_embed_signup_scroll">    
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormLabel className="hidden">Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome" {...field} />
                  </FormControl>
                  <FormDescription className="hidden">Campo obrigatorio*</FormDescription>
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
                  <FormDescription className="hidden">Campo obrigatorio*</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
                
            <FormField
                control={form.control}
                name="phone_number"
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
        <Button className="my-2 w-full font-bold" type="submit">
          Começar Agora
        </Button>
            </div>
          </form>

          </div>
          </div>
        </Form> 
    )
}