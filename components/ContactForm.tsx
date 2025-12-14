"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactForm() {
  const { t } = useLanguage();

  const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Molimo unesite vaše ime i prezime" }),
    phone: z.string().min(2, { message: "Molimo unesite vaš broj telefona" }),
    email: z.string().email({ message: "Molimo unesite vašu email adresu" }),
    message: z.string().min(10, {
      message: "Poruka mora imati najmanje 10 karaktera.",
    }),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Ime: ${values.name}\nTelefon: ${values.phone}\nEmail: ${values.email}\nPoruka: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: `Novi kontakt - ${values.name}`,
      text: mailText,
    });

    if (response?.messageId) {
      toast.success(t.contact.success, {
        description: t.contact.successDesc,
      });
    } else {
      toast.error(t.contact.error, {
        description: t.contact.errorDesc,
      });
    }
    form.reset();
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          className="space-y-6 p-8 bg-white rounded-2xl shadow-lg"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">{t.contact.name}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t.contact.namePlaceholder}
                    {...field}
                    className="h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">{t.contact.phone}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t.contact.phonePlaceholder}
                    {...field}
                    className="h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">{t.contact.email}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    {...field}
                    className="h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">{t.contact.message}</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder={t.contact.messagePlaceholder}
                    className="min-h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading}
            className="w-full h-12 text-lg"
            type="submit"
          >
            {isLoading ? (
              <>
                <span className="animate-pulse">{t.contact.sending}</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {t.contact.send}
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
