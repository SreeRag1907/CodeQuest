import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SignUp 
        afterSignUpUrl="/dashboard"
        appearance={{
          elements: {
            formButtonPrimary: "bg-primary hover:bg-primary/90",
            footerActionLink: "text-primary hover:text-primary/90",
          }
        }}
      />
    </div>
  );
}