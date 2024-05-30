import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="py-24">
        <div className="container flex justify-center items-center">
            <SignIn path="/sign-in"/>
        </div>
    </section>
  )
}