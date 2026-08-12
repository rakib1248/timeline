import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`  h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            classNames: {
              toast: "toast-base",
              success: "toast-success",
              error: "toast-error",
              warning: "toast-warning",
              info: "toast-info",
              description: "toast-description",
            },
          }}
        />
      </body>
    </html>
  );
}
