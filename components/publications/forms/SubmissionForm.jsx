"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  authorName: z.string().min(2, {
    message: "Author name must be at least 2 characters.",
  }),
  penName: z.string().optional(),
  title: z.string().min(1, {
    message: "Title is required.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  file: z.instanceof(File).refine((file) => file.size <= 5000000, {
    message: "File size should be less than 5MB.",
  }),
});

export default function SubmissionForm() {
  const [file, setFile] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      authorName: "",
      penName: "",
      title: "",
      description: "",
    },
  });

  function onSubmit(values) {
    // Here you would typically send the form data to your backend
    console.log(values);
    // Reset the form after submission
    form.reset();
    setFile(null);
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <p className="text-lg text-center mb-6 italic">
          "Submit thy writings unto the world through De-Lit."
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="authorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Shakespeare" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="penName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pen Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Mark Twain" {...field} />
                  </FormControl>
                  <FormDescription>
                    If you'd like to use a pseudonym, enter it here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Payphone Paradox" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="A brief description of your writing..." 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Your Writing</FormLabel>
                  <FormControl>
                    <Input 
                      type="file" 
                      accept=".txt,.doc,.docx,.pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setFile(file);
                          field.onChange(file);
                        }
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Accepted formats: .txt, .doc, .docx, .pdf (Max 5MB)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Submit Writing</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
